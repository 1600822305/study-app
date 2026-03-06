// ============================================================
// 统一环境检测 & 网络请求工具
// 全局唯一入口，禁止在业务代码中直接检测 window.__TAURI__ 等
// 参考 AetherLink universalFetch 架构
// ============================================================

// ==================== 平台检测 ====================

/** 是否运行在 Tauri 桌面端 */
export function isTauri(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}

/** 是否运行在 Capacitor 移动端 */
export function isCapacitor(): boolean {
  return typeof window !== 'undefined' && 'Capacitor' in window && (window as any).Capacitor?.isNativePlatform?.();
}

/** 是否运行在原生环境（Tauri 或 Capacitor） */
export function isNative(): boolean {
  return isTauri() || isCapacitor();
}

/** 是否运行在普通浏览器（非 Tauri、非 Capacitor） */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && !isTauri() && !isCapacitor();
}

/** 是否为开发环境 */
export function isDev(): boolean {
  return import.meta.env.DEV;
}

/** 是否为生产环境 */
export function isProd(): boolean {
  return import.meta.env.PROD;
}

/** 当前运行平台描述 */
export type Platform = 'tauri' | 'capacitor' | 'browser';

export function getPlatform(): Platform {
  if (isTauri()) return 'tauri';
  if (isCapacitor()) return 'capacitor';
  return 'browser';
}

// ==================== CORS 代理配置 ====================
// Web 端通过本地 CORS 代理服务器转发跨域请求
// 启动方式：npm run cors-proxy 或 npm run dev:web

const DEFAULT_CORS_PROXY_URL = 'http://localhost:8888';
let _corsProxyUrl = DEFAULT_CORS_PROXY_URL;

export function setCorsProxyUrl(url: string): void {
  _corsProxyUrl = url.replace(/\/$/, '');
}

export function getCorsProxyUrl(): string {
  return _corsProxyUrl;
}

/**
 * 构建 CORS 代理请求 URL
 */
export function buildCorsProxyRequestUrl(targetUrl: string): string {
  return `${_corsProxyUrl}/proxy?url=${encodeURIComponent(targetUrl)}`;
}

// ==================== URL 重写 ====================

/**
 * 检查是否需要 CORS 代理（仅 Web 端跨域时需要）
 */
export function needsCORSProxy(url: string): boolean {
  if (isNative()) return false;

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    // 本地地址不需要代理
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.')) {
      return false;
    }

    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * 获取适合当前平台的 URL
 * - Tauri：原始 URL（HTTP 插件绕 CORS）
 * - Web 端：跨域请求通过 CORS 代理服务器转发
 */
export function getPlatformUrl(originalUrl: string): string {
  if (needsCORSProxy(originalUrl)) {
    return buildCorsProxyRequestUrl(originalUrl);
  }
  return originalUrl;
}

// ==================== 统一 Fetch ====================

interface AdaptiveFetchOptions extends RequestInit {
  timeout?: number;
}

/**
 * Tauri fetch：使用 HTTP 插件绕过 CORS
 */
async function tauriFetch(url: string, options: AdaptiveFetchOptions): Promise<Response> {
  const { timeout = 30000, ...fetchOptions } = options;
  const { fetch: tauriHttpFetch } = await import('@tauri-apps/plugin-http');

  const headers = (fetchOptions.headers as Record<string, string>) || {};
  if (!headers['User-Agent'] && !headers['user-agent']) {
    headers['User-Agent'] = 'StudyGoGoGo/1.0';
  }

  return tauriHttpFetch(url, {
    ...fetchOptions,
    headers,
    connectTimeout: timeout,
  } as RequestInit);
}

/**
 * 标准 fetch：带超时控制
 */
async function standardFetch(url: string, options: AdaptiveFetchOptions): Promise<Response> {
  const { timeout = 30000, ...fetchOptions } = options;
  const controller = new AbortController();
  fetchOptions.signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await globalThis.fetch(url, fetchOptions);
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * 环境自适应 fetch（核心统一入口）
 * - Tauri 桌面端：使用 tauri-plugin-http（绕过 CORS）
 * - 浏览器 Web 端：URL 重写 + 标准 fetch（通过 Vite proxy 或 CORS 代理）
 */
export async function adaptiveFetch(url: string, options: AdaptiveFetchOptions = {}): Promise<Response> {
  if (isTauri()) {
    console.log('[adaptiveFetch] Tauri 桌面端 HTTP 插件:', url);
    return tauriFetch(url, options);
  }

  // Web 端：重写 URL 绕过 CORS
  const finalUrl = getPlatformUrl(url);
  console.log('[adaptiveFetch] Web 端请求:', url, '->', finalUrl);
  return standardFetch(finalUrl, options);
}
