// ============================================================
// Custom Storage Errors
// ============================================================

export class StorageError extends Error {
  readonly table: string;
  readonly operation: string;
  override readonly cause?: unknown;

  constructor(message: string, table: string, operation: string, cause?: unknown) {
    super(`[Storage:${table}:${operation}] ${message}`);
    this.name = 'StorageError';
    this.table = table;
    this.operation = operation;
    this.cause = cause;
  }
}

export class RecordNotFoundError extends StorageError {
  constructor(table: string, key: string) {
    super(`Record not found: ${key}`, table, 'read');
    this.name = 'RecordNotFoundError';
  }
}

export class ValidationError extends StorageError {
  constructor(table: string, field: string, reason: string) {
    super(`Validation failed on '${field}': ${reason}`, table, 'validate');
    this.name = 'ValidationError';
  }
}

export class MigrationError extends StorageError {
  constructor(fromVersion: number, toVersion: number, cause?: unknown) {
    super(`Migration failed from v${fromVersion} to v${toVersion}`, 'schema', 'migrate', cause);
    this.name = 'MigrationError';
  }
}
