import { RequestStatus } from './store';

export const getRatingClass = (rating: number, high: string, low: string) => {
  if (rating >= 4) {
    return high;
  } else {
    return low;
  }
};

export async function loadEntity<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  const data = (await response.json()) as unknown;
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new Error('Invalid data format');
  }
  return data as T;
}

export async function loadEntityList<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  const data = (await response.json()) as unknown;
  if (!Array.isArray(data)) {
    throw new Error('Invalid data format: expected an array');
  }
  return data as T[];
}

export function mergeStatuses(...statuses: RequestStatus[]) {
  if (statuses.includes('rejected')) {
    return 'rejected';
  }
  if (statuses.includes('pending')) {
    return 'pending';
  }
  return 'fulfilled';
}
