export function insert<K, V>(xs: Map<K, V>, key: K, value: V): Map<K, V> {
  const ys = new Map(xs)
  ys.set(key, value)
  return ys
}

export function remove<K, V>(xs: Map<K, V>, key: K): Map<K, V> {
  const ys = new Map(xs)
  ys.delete(key)
  return ys
}