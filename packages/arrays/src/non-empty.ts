export type NonEmptyArray<T> = [T, ...T[]]
export const isNonEmpty = <T>(xs: T[]): xs is NonEmptyArray<T> => xs.length > 0
