import { positiveRand } from "./random.js";
import { clamp } from "./util.js";

/** Generate a pseudo-normally-distributed random number */
export function pseudoNormal(mean: number = 0, variance: number = 1): number {
  const u1 = positiveRand()
  const u2 = positiveRand()
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return z0 * Math.sqrt(variance) + mean;
}

/** Generate a pseudo-normally-distributed random number, then clipped to `[min, max]` */
export function clippedNormal(mean: number = 0.8, variance: number = 0.01, min = 0, max = 1): number {
  return clamp(min, pseudoNormal(mean, variance), max)
}