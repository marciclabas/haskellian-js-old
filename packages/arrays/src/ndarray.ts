import { Inc, Dec } from '@haskellian/peano'

type _NDArray<D extends number, T = any, A = T[]> =
  D extends 0 ? T :  
  D extends 1 ? A
              : _NDArray<Dec<D>, T, A[]>

/** An `N`-dimensional array (possibly ragged) */
export type NDArray<N extends number, T = any> = _NDArray<N, T>

/** Number of dims of a possibly nested array */
export type NDims<A> = A extends (infer Y)[]
  ? Inc<NDims<Y>> : 0

/** Inner type of a possibly nested array */
export type ScalarType<A> = A extends (infer Y)[]
  ? ScalarType<Y> : A

/** Type of a `D`-dimensional array when unnesting `N` dimensions */
export type Unnest<N extends number, A> = A extends NDArray<N, infer T> ? T : never
