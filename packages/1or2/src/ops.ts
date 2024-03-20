import { transpose as transpose_ } from "../node_modules/@types/ramda/index.js"
import { Pair1, MPair1 } from "./type.js"

export function transpose<T>(xs: Pair1<T[]>): Pair1<T>[]
export function transpose<T>(xs: Pair1<T>[]): Pair1<T[]>
export function transpose<T>(xs: MPair1<T[]>): MPair1<T>[]
export function transpose<T>(xs: MPair1<T>[]): MPair1<T[]>
export function transpose(xs: any): any {
  return transpose_(xs)
}


export const of = <T>(xs: T[]): MPair1<T> => xs as unknown as MPair1<T>
export const make = <T = undefined>(n: 1 | 2, x?: T) => of(n === 1 ? [x] : [x, x])