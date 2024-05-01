const { max, abs } = Math

export type IsCloseConfig = {
  /** Max relative tolerance. Defaults to `1e-5` */
  rtol: number
  /** Max absolute tolerance. Defaults to `1e-8` */
  atol: number
}

function isclose0d(x: number, y: number, config?: IsCloseConfig) {
  const rtol = config?.rtol ?? 1e-5
  const atol = config?.atol ?? 1e-8
  return abs(x-y) < max(rtol * max(abs(x), abs(y)), atol)
}

function isclose1d(xs: number[], ys: number[], config?: IsCloseConfig) {
  return xs.length === ys.length && xs.every((x, i) => isclose0d(x, ys[i], config))
}

function isCloseObj(xs: Record<any, any>, ys: Record<any, any>, config?: IsCloseConfig) {
  for (const k of Object.keys({...xs, ...ys}))
    if (!(k in xs) || !(k in ys) || !isclose(xs[k], ys[k], config))
      return false
  return true
}

export function isclose(x: number, y: number, config?: IsCloseConfig)
export function isclose(xs: number[], ys: number[], config?: IsCloseConfig)
export function isclose(xs: Record<any, number>, ys: Record<any, number>, config?: IsCloseConfig)
export function isclose(xs: Record<any, number[]>, ys: Record<any, number[]>, config?: IsCloseConfig)
export function isclose(xs, ys, config) {
  return (
    typeof xs === 'number' && typeof ys === 'number' ? isclose0d(xs, ys, config) :
    Array.isArray(xs) && Array.isArray(ys) ? isclose1d(xs, ys, config) :
    isCloseObj(xs, ys)
  )
}
