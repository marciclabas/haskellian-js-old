export function await2d<T>(xxs: Promise<T>[][]): Promise<T[][]> {
  return Promise.all(xxs.map(xs => Promise.all(xs)))
}
export function await3d<T>(xxxs: Promise<T>[][][]): Promise<T[][][]> {
  return Promise.all(xxxs.map(xxs => Promise.all(xxs.map(xs => Promise.all(xs)))))
}