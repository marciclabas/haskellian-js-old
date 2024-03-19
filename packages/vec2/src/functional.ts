import { Vec2 } from "./type.js"

/** Functor map for `Vec2` */
export const map = (f: (x: number) => number, v: Vec2): Vec2 => [f(v[0]), f(v[1])]

/** Element-wise reduce */
export const reduce = (f: (prev: number, curr: number) => number, v: Vec2, ...vs: Vec2[]): Vec2 => [
  vs.reduce((p, x) => f(p, x[0]), v[0]),
  vs.reduce((p, x) => f(p, x[1]), v[1]),
]