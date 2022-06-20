import { Streak } from ".";

export const KEY = 'streak';

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US');
}

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak = {
    currentCount: 1,
    startDate: formatDate(date),
    lastLoginDate: formatDate(date)
  };

  return {
    ...defaultStreak,
    ...overrideDefaults
  };
}

export function updateStreak(storage: Storage, streak: Streak): void {
  storage.setItem(KEY, JSON.stringify(streak));
}