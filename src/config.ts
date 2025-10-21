import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Допустимі рівні логування
 */
const validLogLevels = ['info', 'warn', 'error'] as const;
type LogLevel = (typeof validLogLevels)[number];

/**
 * Отримуємо лог рівень із .env або за замовчуванням 'info'
 */
const envLogLevel = process.env.LOG_LEVEL ?? 'info';

/**
 * Валідація LOG_LEVEL
 */
if (!validLogLevels.includes(envLogLevel as LogLevel)) {
  console.warn(`[config] ⚠️ Invalid LOG_LEVEL "${envLogLevel}" in .env. Defaulting to "info".`);
}

/**
 * Фінальна конфігурація
 */
export const config = {
  LOG_LEVEL: validLogLevels.includes(envLogLevel as LogLevel) ? (envLogLevel as LogLevel) : 'info',
};
