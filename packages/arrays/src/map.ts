import { Add } from '@haskellian/peano'
import { NDArray, NDims, ScalarType, Unnest } from "./ndarray.js";
import { Tup } from '@haskellian/tuples';

export function map2d<T, U>(xxs: T[][], f: (x: T, [i, j]: Tup<2, number>) => U): U[][] {
  return xxs.map((xs, i) => xs.map((x, j) => f(x, [i, j])))
}

export function map3d<T, U>(xxxs: T[][][], f: (x: T, [i, j, k]: Tup<3, number>) => U): U[][][] {
  return xxxs.map((xxs, i) => xxs.map((xs, j) => xs.map((x, k) => f(x, [i, j, k]))))
}

/** Nested `map` with fixed `depth` over an `N`-dimensional array */
export function ndmap<
  D extends number, A extends any[], U,
  OutD = Add<NDims<U>, D>
>(
  xs: A, depth: D,
  f: (x: Unnest<D, A>) => U
): OutD extends number ? NDArray<OutD, ScalarType<U>> : never
  /** Nested `map` over an `N`-dimensional array */
export function ndmap<A extends any[], U>(
  xs: A,
  f: (x: ScalarType<A>) => U
): NDArray<NDims<A>, U>
export function ndmap(xs, ...ps): any {
  if (ps.length === 1) {
    const [f] = ps
    return Array.isArray(xs)
      ? xs.map(x => ndmap(x, f))
      : f(xs)
  }
  else {
    const [depth, f] = ps
    return depth > 0
      ? xs.map(x => ndmap(x, f))
      : f(xs)
  }
}
  
