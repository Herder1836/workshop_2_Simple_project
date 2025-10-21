import * as dotenv from 'dotenv';

dotenv.config();

/** Базові утиліти */
export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * СКЛАДНИЙ ТИП
 * Опційні параметри precision (точність) і locale (мова форматування)
 */
export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

/**
 * Форматування числа з опціональною точністю
 */
export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? Number(process.env.APP_PRECISION ?? 2);
  return value.toFixed(precision);
}
/**
 * Інтерфейс користувача
 */
export interface User {
  id: number;
  name: string;
  age: number;
  city?: string; // опційне поле
}

/**
 * GENERIC-ФУНКЦІЯ
 * Групує масив об’єктів за певним ключем
 */
export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce(
    (acc, item) => {
      const groupKey = String(item[key]);
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}
