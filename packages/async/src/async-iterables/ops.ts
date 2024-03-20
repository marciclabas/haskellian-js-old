export async function* map<T, U>(xs: AsyncIterable<T>, f: (x: T, idx: number) => U): AsyncIterable<U> {
  let i = 0
  for await (const x of xs)
    yield f(x, i++)
}

export async function* filter<T>(xs: AsyncIterable<T>, p: (x: T, idx: number) => unknown): AsyncIterable<T> {
  let i = 0
  for await (const x of xs)
    if (p(x, i++))
      yield x
}