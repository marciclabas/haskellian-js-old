import { Tup } from "./tuples.js"

/** `N + 1` for a non-negative integer `N` */
export type Inc<N extends number> = [...Tup<N>, any]['length']
/** `N - 1` for a positive integer `N` */
export type Dec<N extends number> = Tup<N> extends [any, ...infer U] ? U['length'] : never

/** An integer in `[0, N]` */
export type Bounded<N extends number> = N | (N extends 0 ? 0 : Bounded<Dec<N>>)
