import { Pair1, MPair1 } from "./type.js";
export declare function transpose<T>(xs: Pair1<T[]>): Pair1<T>[];
export declare function transpose<T>(xs: Pair1<T>[]): Pair1<T[]>;
export declare function transpose<T>(xs: MPair1<T[]>): MPair1<T>[];
export declare function transpose<T>(xs: MPair1<T>[]): MPair1<T[]>;
export declare const of: <T>(xs: T[]) => MPair1<T>;
export declare const make: <T = undefined>(n: 1 | 2, x?: T) => MPair1<T | undefined>;
