export function delay(secs: number): Promise<void>;
export function delay<T>(secs: number, value: T): Promise<T>;
/** Promise that resolves after `secs` (uses `setTimeout`) */
export function delay<T>(secs: number, value?: T): Promise<T|void> {
  return new Promise(r => setTimeout(() => value ? r(value) : r(), 1e3*secs))
}

export function timeout(secs: number): Promise<never>;
export function timeout<T>(secs: number, reason: T): Promise<never>;
/** Promise that rejects after `secs` (uses `setTimeout`) */
export function timeout<T>(secs: number, reason?: T): Promise<never> {
  return new Promise((_, reject) => setTimeout(() => reason ? reject(reason) : reject(new Error(`Timed out after ${secs} seconds`)), 1e3*secs));
}

/** `promise` except it rejects after `maxSecs` */
export function timedOut<T>(promise: Promise<T>, maxSecs: number): Promise<T> {
  return Promise.race([
    promise,
    timeout(maxSecs, new Error(`Operation timed out after ${maxSecs} seconds`)),
  ]);
}