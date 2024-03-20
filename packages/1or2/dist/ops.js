import { transpose as transpose_ } from "ramda";
export function transpose(xs) {
    return transpose_(xs);
}
export const of = (xs) => xs;
export const make = (n, x) => of(n === 1 ? [x] : [x, x]);
