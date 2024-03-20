import { Tup } from "@haskellian/tuples";

export function every2d<T>(xxs: T[][], p: (x: T, [i, j]: Tup<2, number>) => boolean): boolean {
  return xxs.every((xs, i) => xs.every((x, j) => p(x, [i, j])))
}
export function every3d<T>(xxxs: T[][][], p: (x: T, [i, j, k]: Tup<3, number>) => boolean): boolean {
  return xxxs.every((xxs, i) => xxs.every((xs, j) => xs.every((x, k) => p(x, [i, j, k]))))
}