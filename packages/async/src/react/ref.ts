import { Ref, useCallback, useRef } from "react"
import { managedPromise } from "../promises/index.js"

/** A `Ref` that is never null (but is a `Promise`)
 * 
 * ```
 * const [ref, promise] = usePromisedRef()
 * 
 * async function doSomeWithRef() {
 *   const div = await promise.current // no null checks!
 * }
 * 
 * 
 * return (
 *   <div ref={ref} />
 * )
 * ```
*/
export function usePromisedRef<T>(): [Ref<T>, { current: Promise<T> }] {
  const promise = useRef(managedPromise<T>())
  const callback = useCallback((obj: T) => {
    promise.current.resolve(obj)
  }, [])
  return [callback, promise]
}