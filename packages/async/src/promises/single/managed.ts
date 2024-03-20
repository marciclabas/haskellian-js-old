import { PromiseState } from "./state.js"

/** A promise that's resolved/rejected via the `resolve/reject` methods, plus it's state (`PromiseState`) */
export type ManagedPromise<T> = Promise<T> & {
  resolve(x: T): void
  reject(reason?: any): void
} & PromiseState<T>

/** A promise with methods to resolve/reject it + direct access to its state
 * 
 * ```javascript
 * const loaded = managedPromise()
 * img.onload = () => loaded.resolve()
 * img.src = '...'
 * await loaded
 * ```
 */
export function managedPromise<T = void>(): ManagedPromise<T> {
  let resolve: (x: T) => void = () => {}
  let reject: (reason?: any) => void = () => {}
  let state: PromiseState<T> = { status: 'pending' }
  const promise = new Promise<T>((rs, rj) => {
    resolve = value => { state = { status: 'resolved', value }; rs(value) }
    reject = reason => { state = { status: 'rejected', reason }; rj(reason) }
  })
  return Object.assign(promise, { resolve, reject, ...state })
}
