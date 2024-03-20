import { transpose as transpose_ } from 'ramda'
import { MTup, Tup } from "./tuples.js"

/** Cast `xs` to an `n`-tuple */
export const cast = <N extends number, T>(xs: T[], n?: N): MTup<N, T> => xs as unknown as MTup<N, T>
export const make = <N extends number, T>(n: N, value?: T): MTup<N, T> => cast(new Array(n).fill(value), n)

export function transpose<N extends number, T>(xs: Tup<N, T[]>): Tup<N, T>[]
export function transpose<N extends number, T>(xs: Tup<N, T>[]): Tup<N, T[]>
export function transpose<N extends number, T>(xs: MTup<N, T[]>): MTup<N, T>[]
export function transpose<N extends number, T>(xs: MTup<N, T>[]): MTup<N, T[]>
export function transpose(xs): any {
  return transpose_(xs)
}