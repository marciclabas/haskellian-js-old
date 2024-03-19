import { reduce } from "./functional.js"
import { Vec2 } from "./type.js"


/** Elementwise `u * v * ...` */
export const prod = (u: Vec2, ...vs: Vec2[]): Vec2 => reduce((x, y) => x*y, u, ...vs)
/** Elementwise `(((u / v) / ...) / ...)` */
export const div = (u: Vec2, ...vs: Vec2[]): Vec2 => reduce((x, y) => x/y, u, ...vs)
/** `u + v + ...` */
export const add = (u: Vec2, ...vs: Vec2[]): Vec2 => reduce((x, y) => x+y, u, ...vs)
/** `u - v - ...` */
export const sub = (u: Vec2, ...vs: Vec2[]): Vec2 => reduce((x, y) => x-y, u, ...vs)

/** Euclidian distance between u and v */
export const dist = (u: Vec2, v: Vec2): number => (u[0]-v[0])**2 + (u[1]-v[1])**2
