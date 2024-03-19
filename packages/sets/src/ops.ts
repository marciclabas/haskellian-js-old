export function insert<T>(xs: Set<T>, x: T, ...moreXs: T[]): Set<T> {
  const ys = new Set(xs)
  ys.add(x)
  moreXs.forEach(x => ys.add(x))
  return ys
}
export function remove<T>(xs: Set<T>, x: T): Set<T> {
  const ys = new Set(xs)
  ys.delete(x)
  return ys
}