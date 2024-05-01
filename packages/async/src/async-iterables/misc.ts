export async function syncify<T>(xs: AsyncIterable<T>): Promise<T[]> {
  const ys: T[] = []
  for await (const x of xs)
    ys.push(x)
  return ys
}