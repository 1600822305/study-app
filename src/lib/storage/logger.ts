// ============================================================
// Storage Operation Logger
// ============================================================

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  table: string;
  operation: string;
  detail?: string;
  timestamp: Date;
}

const LOG_BUFFER_SIZE = 200;
const logBuffer: LogEntry[] = [];

function log(level: LogLevel, table: string, operation: string, detail?: string) {
  const entry: LogEntry = {
    level,
    table,
    operation,
    detail,
    timestamp: new Date(),
  };

  logBuffer.push(entry);
  if (logBuffer.length > LOG_BUFFER_SIZE) {
    logBuffer.shift();
  }

  if (import.meta.env.DEV) {
    const prefix = `[Storage:${table}:${operation}]`;
    switch (level) {
      case 'debug':
        break;
      case 'info':
        break;
      case 'warn':
        console.warn(prefix, detail);
        break;
      case 'error':
        console.error(prefix, detail);
        break;
    }
  }
}

export const storageLogger = {
  debug: (table: string, op: string, detail?: string) => log('debug', table, op, detail),
  info: (table: string, op: string, detail?: string) => log('info', table, op, detail),
  warn: (table: string, op: string, detail?: string) => log('warn', table, op, detail),
  error: (table: string, op: string, detail?: string) => log('error', table, op, detail),

  getRecentLogs: (count = 50): LogEntry[] => logBuffer.slice(-count),
  clearLogs: () => {
    logBuffer.length = 0;
  },
};
