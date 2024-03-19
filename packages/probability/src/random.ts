/** Random number strictly in (0, 1) */
export function positiveRand() {
  let x
  do x = Math.random(); while (x === 0)
  return x
}
