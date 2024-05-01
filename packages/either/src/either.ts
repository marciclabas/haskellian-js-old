export type Left<T> = { tag: 'left', value: T }
export type Right<T> = { tag: 'right', value: T }
export type Either<L, R> = Left<L> | Right<R>
export const left = <L>(value: L): Left<L> => ({ tag: 'left', value })
export const right = <R>(value: R): Right<R> => ({ tag: 'right', value })