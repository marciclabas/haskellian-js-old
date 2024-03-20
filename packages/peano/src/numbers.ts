import { Nat } from "./peano.js";

export type Inc<N extends number> = [...Nat<N>, any]['length']
export type Dec<N extends number> = Nat<N> extends [any, ...infer U] ? U['length'] : never
export type Add<N extends number, M extends number> = [...Nat<N>, ...Nat<M>]['length']
export type Sub<N extends number, M extends number> = M extends 0 ? N : Sub<Dec<N>, Dec<M>>
