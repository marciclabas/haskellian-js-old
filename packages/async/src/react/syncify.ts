import { PromiseState, TrackedPromise } from "../promises/single/state.js";
import { useState, useEffect } from 'react'

/** Syncify a `TrackedPromise` (see `track`). Returns a state */
export function useTracked<T>(promise: TrackedPromise<T>): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>(promise)
  useEffect(() => {
    let canceled = false
    promise.then(
      value => !canceled && setState({ status: 'resolved', value }),
      reason => !canceled && setState({ status: 'rejected', reason })
    )
    return () => { canceled = true }
  }, [])
  return state
}

/** Syncify a `Promise`. Returns a state
 * #### Note
 * The returned state defaults to `pending`, and is updated on a `useEffect`.
 * If the promise could already be resolved and you want to reflect that, try using `track` and `useTracked` 
 */
export function useSyncify<T>(promise: Promise<T>): PromiseState<T> {
  const [state, setState] = useState<PromiseState<T>>({ status: 'pending' })
  useEffect(() => {
    let canceled = false
    promise.then(
      value => !canceled && setState({ status: 'resolved', value }),
      reason => !canceled && setState({ status: 'rejected', reason })
    )
    return () => { canceled = true }
  }, [])
  return state
}