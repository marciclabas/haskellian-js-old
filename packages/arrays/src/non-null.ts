import { every2d } from "./every.js"

export const nonNull = <T>(x: T | null | undefined): x is T => x !== null
export const nonNull1d = <T>(xs: Array<T|null|undefined>): xs is T[] => xs.every(x => x)
export const nonNull2d = <T>(xs: Array<T|null|undefined>[]): xs is T[][] => every2d(xs, x => !!x)
