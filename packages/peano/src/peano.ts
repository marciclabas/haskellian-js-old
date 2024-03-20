/** A non-negative integer, represented by a sized tuple */
export type Nat<N extends number, T = any, A extends any[] = []> = A['length'] extends N ? A : Nat<N, [...A, T]>
export type Inc<N extends any[]> = [...N, any];
export type Dec<N extends any[]> = N extends [any, ...infer A] ? A : never;
export type Add<N extends any[], M extends any[]> = [...N, ...M];
export type Sub<N extends any[], M extends any[]> = M extends [] ? N : Sub<Dec<N>, Dec<M>>;
