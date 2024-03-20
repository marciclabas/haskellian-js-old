type Arr<N extends number, T extends any[] = []> = T['length'] extends N ? T : Arr<N, [...T, any]>

type Inc<N extends number> = [...Arr<N>, any]['length']
type Dec<N extends number, T extends number[] = []> = Arr<N> extends [any, ...infer U] ? U['length'] : never
/**  */
export function map2d<T, U>(xxs: T[][], f: (x: T, [i, j]: [number, number]) => U): U[][] {
  return xxs.map((xs, i) => xs.map((x, j) => f(x, [i, j])))
}


type KTuple<T, K extends number> = K extends 0 ? [] : [T, ...KTuple<T, Dec<K>>]


type Pair = KTuple<number, 3>