
type _Tup<N extends number, T = any, A extends T[] = []> =
  A['length'] extends N
    ? A
    : _Tup<N, T, [...A, T]>

/** An `N`-tuple (an array of length `N`) */
export type Tup<N extends number, T = any> = _Tup<N, T>

/** A `Tup` with typed array methods */
export type MTup<N extends number, T = any> = Omit<Tup<N, T>, 'map' | 'filter'> & {
  map<U>(f: (x: T, idx: number) => U): MTup<N, U>
  // filter(p: (x: T, idx: number) => boolean): MBoundedTup<N, T>
}

export type Dec<N extends number> = Tup<N> extends [any, ...infer U] ? U['length'] : never

type _BoundedTup<N extends number, T = any, A extends T[] = []> =
  N extends 0
    ? []
    : _BoundedTup<Dec<N>, T, [...A, T]> | [...A, T]

/** An array of length at most `N` */
export type BoundedTup<N extends number, T = any> = _BoundedTup<N, T>

/** A `BoundedTup` with typed array methods */
export type MBoundedTup<N extends number, T = any> = Omit<BoundedTup<N, T>, 'map' | 'filter'> & {
  map<U>(f: (x: T, idx: number) => U): MTup<N, U>
  filter(p: (x: T, idx: number) => boolean): MBoundedTup<N, T>
}
