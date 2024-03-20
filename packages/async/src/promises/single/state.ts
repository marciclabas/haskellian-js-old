/** The state of a promise, reified */
export type PromiseState<T> = {
  status: 'pending'
} | {
  status: 'resolved' 
  value: T
} | {
  status: 'rejected'
  reason?: any
}

/** A Promise and it's state */
export type TrackedPromise<T> = Promise<T> & PromiseState<T>

export function track<T>(task: () => Promise<T>): () => TrackedPromise<T> {
  return () => {
    let state: PromiseState<T> = { status: 'pending' };
    const promise = task().then(
      value => {
        state = { status: 'resolved', value }
        return value;
      },
      reason => {
        state = { status: 'rejected', reason }
        throw reason;
      }
    )
    return Object.assign(promise, state);
  };
}
