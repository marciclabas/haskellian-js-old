import { Tup } from "./tuples.js"

export type Dec<N extends number> = Tup<N> extends [any, ...infer U] ? U['length'] : never

/** An integer in `[0, N]` */
export type Bounded<N extends number> = N | (N extends 0 ? 0 : Bounded<Dec<N>>)
