import { TrackedPromise } from "./state.js"

/** Lazily evaluated promise */
export function thunk<T>(get: () => TrackedPromise<T>): () => TrackedPromise<T>
export function thunk<T>(get: () => Promise<T>): () => Promise<T>
export function thunk<T>(get: () => Promise<T>): () => Promise<T> {
  let value: T | undefined
  return async () => {
    if (value === undefined)
      value = await get()
    return value
  }
}