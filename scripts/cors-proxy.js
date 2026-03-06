/**
 * 通用 CORS 代理服务器（参考 AetherLink）
 *
 * 功能：
 * - 支持任意域名的请求代理，无需单独配置
 * - 自动处理 CORS 问题
 * - 支持 GET、POST、PUT、DELETE、PATCH 等所有 HTTP 方法
 * - 保留原始请求头和响应头
 * - 支持流式响应（SSE、chunked transfer）
 *
 * 使用方式：
 * 1. 启动代理：node scripts/cors-proxy.js
 * 2. 在代码中使用：http://localhost:8888/proxy?url=https://api.example.com/endpoint
 */

import http from 'http';
import https from 'https';
import { URL } from 'url';

const PROXY_PORT = 8888;
const MAX_REDIRECTS = 5;

// ANSI 颜色代码
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

const log = {
  info: (msg) => console.log(`${colors.cyan}i ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}v ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}! ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}x ${msg}${colors.reset}`),
  request: (method, url) =>
    console.log(`${colors.magenta}> ${method}${colors.reset} ${colors.blue}${url}${colors.reset}`),
};

// 不转发到目标服务器的请求头
const FILTERED_REQUEST_HEADERS = new Set([
  'host',
  'connection',
  'keep-alive',
  'proxy-connection',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'origin',
  'referer',
]);

// 不返回给客户端的响应头
const FILTERED_RESPONSE_HEADERS = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'access-control-allow-origin',
  'access-control-allow-methods',
  'access-control-allow-headers',
  'access-control-allow-credentials',
  'access-control-max-age',
  'access-control-expose-headers',
]);

/**
 * 设置 CORS 响应头
 */
function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD',
  );
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Expose-Headers', '*');
  res.setHeader('Access-Control-Max-Age', '86400');
}

/**
 * 处理代理请求
 */
function handleProxyRequest(req, res, redirectCount = 0) {
  // OPTIONS 预检
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  // 解析目标 URL
  const urlParams = new URL(req.url, `http://localhost:${PROXY_PORT}`);
  const targetUrl = urlParams.searchParams.get('url');

  if (!targetUrl) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        error: 'Missing url parameter',
        usage: `http://localhost:${PROXY_PORT}/proxy?url=https://example.com/api`,
      }),
    );
    return;
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(targetUrl);
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid URL', message: error.message }));
    return;
  }

  log.request(req.method, targetUrl);

  // 准备代理请求
  const isHttps = parsedUrl.protocol === 'https:';
  const httpModule = isHttps ? https : http;

  // 复制并过滤请求头
  const proxyHeaders = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (!FILTERED_REQUEST_HEADERS.has(key.toLowerCase())) {
      proxyHeaders[key] = value;
    }
  }

  if (!proxyHeaders['user-agent']) {
    proxyHeaders['user-agent'] = 'StudyGoGoGo/1.0';
  }

  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || (isHttps ? 443 : 80),
    path: parsedUrl.pathname + parsedUrl.search,
    method: req.method,
    headers: proxyHeaders,
    servername: parsedUrl.hostname,
    rejectUnauthorized: false,
    timeout: 300000,
  };

  const proxyReq = httpModule.request(options, (proxyRes) => {
    // 处理重定向
    if ([301, 302, 303, 307, 308].includes(proxyRes.statusCode)) {
      const location = proxyRes.headers.location;
      if (location && redirectCount < MAX_REDIRECTS) {
        log.warning(`Redirect -> ${location}`);
        const redirectUrl = new URL(location, targetUrl);
        const newReq = {
          ...req,
          url: `/proxy?url=${encodeURIComponent(redirectUrl.toString())}`,
        };
        handleProxyRequest(newReq, res, redirectCount + 1);
        return;
      }
    }

    // 复制响应头（过滤不需要的）
    const responseHeaders = {};
    for (const [key, value] of Object.entries(proxyRes.headers)) {
      if (!FILTERED_RESPONSE_HEADERS.has(key.toLowerCase())) {
        responseHeaders[key] = value;
      }
    }

    setCorsHeaders(res);
    res.writeHead(proxyRes.statusCode, responseHeaders);
    proxyRes.pipe(res);

    proxyRes.on('end', () => {
      log.success(`${proxyRes.statusCode} ${targetUrl}`);
    });
  });

  proxyReq.on('error', (error) => {
    log.error(`Proxy failed: ${error.message}`);
    if (!res.headersSent) {
      setCorsHeaders(res);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          error: 'Proxy request failed',
          message: error.message,
          target: targetUrl,
        }),
      );
    }
  });

  proxyReq.on('timeout', () => {
    log.error('Proxy timeout');
    proxyReq.destroy();
    if (!res.headersSent) {
      setCorsHeaders(res);
      res.writeHead(504, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Proxy request timeout', target: targetUrl }));
    }
  });

  // 转发请求体
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    req.pipe(proxyReq);
  } else {
    proxyReq.end();
  }
}

// 创建服务器
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PROXY_PORT}`);

  // 健康检查
  if (url.pathname === '/health' || url.pathname === '/') {
    setCorsHeaders(res);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        status: 'ok',
        service: 'StudyGoGoGo CORS Proxy',
        port: PROXY_PORT,
        usage: `http://localhost:${PROXY_PORT}/proxy?url=https://example.com/api`,
      }),
    );
    return;
  }

  // 代理请求
  if (url.pathname === '/proxy') {
    handleProxyRequest(req, res);
    return;
  }

  // 404
  setCorsHeaders(res);
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found', message: 'Use /proxy endpoint' }));
});

// 启动
server.listen(PROXY_PORT, '127.0.0.1', () => {
  console.log(
    `\n${colors.bright}${colors.green}${'='.repeat(50)}${colors.reset}`,
  );
  console.log(
    `${colors.bright}${colors.green}  CORS Proxy Server Started${colors.reset}`,
  );
  console.log(
    `${colors.bright}${colors.green}${'='.repeat(50)}${colors.reset}\n`,
  );
  log.info(`Port: ${colors.bright}${PROXY_PORT}${colors.reset}`);
  log.info(
    `Health: ${colors.bright}http://localhost:${PROXY_PORT}/health${colors.reset}`,
  );
  log.info(
    `Usage:  ${colors.bright}http://localhost:${PROXY_PORT}/proxy?url=<target>${colors.reset}\n`,
  );
});

// 优雅关闭
process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});
