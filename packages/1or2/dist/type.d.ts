/** A 1-or-2-tuple */
export type Pair1<T> = [T] | [T, T];
/** A 1-or-2-tuple, with typed array methods */
export type MPair1<T> = Omit<Pair1<T>, 'map'> & {
    map<U>(f: (x: T, idx: number) => U): Pair1<U>;
};
