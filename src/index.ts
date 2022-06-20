import { formatDate } from './utils';

export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

const KEY = 'streak';

function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): 'increment' | 'reset' | 'none' {
  const difference = currentDate.getDate() - parseInt(lastLoginDate.split('/')[1]);

  if (difference === 0) {
    return 'none';
  }

  if (difference === 1) {
    return 'increment';
  }

  return 'reset';
}

export function streakCounter(storage: Storage, date: Date): Streak {
  const streakInLocalStorage = storage.getItem(KEY);

  if (streakInLocalStorage) {
    try {
      const streak = JSON.parse(streakInLocalStorage);
      const state = shouldIncrementOrResetStreakCount(date, streak.lastLoginDate);
      const SHOULD_INCREMENT = state === 'increment';
      const SHOULD_RESET = state === 'reset';

      if (SHOULD_INCREMENT) {
        const updatedStreak = {
          ...streak,
          currentCount: streak.currentCount + 1,
          lastLoginDate: formatDate(date)
        };

        storage.setItem(KEY, JSON.stringify(updatedStreak));

        return updatedStreak;
      }

      if (SHOULD_RESET) {
        const updatedStreak = {
          currentCount: 1,
          startDate: formatDate(date),
          lastLoginDate: formatDate(date)
        };

        storage.setItem(KEY, JSON.stringify(updatedStreak));

        return updatedStreak;
      }

      return streak;
    } catch (error) {
      console.error('Failed to parse streak from localStorage');
    }
  }

  const streak = {
    currentCount: 1,
    startDate: formatDate(date),
    lastLoginDate: formatDate(date)
  };

  storage.setItem(KEY, JSON.stringify(streak));

  return streak;
}
