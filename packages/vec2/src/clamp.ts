import { Vec2 } from "./type.js"

const clamp1d = (xmin: number, x: number, xmax: number) => Math.max(xmin, Math.min(x, xmax))

const clamp2d = (vmin: Vec2, v: Vec2, vmax: Vec2): Vec2 =>
  [clamp1d(vmin[0], v[0], vmax[0]), clamp1d(vmin[1], v[1], vmax[1])]
  
/** Your usual 1d clamp */
export function clamp(xmin: number, x: number, xmax: number): number;
/** Elementwise clamp */
export function clamp(vmin: Vec2, v: Vec2, vmax: Vec2): Vec2
export function clamp(x, y, z): number | Vec2 {
  return typeof x === 'number' ? clamp1d(x, y, z) : clamp2d(x, y, z)
}