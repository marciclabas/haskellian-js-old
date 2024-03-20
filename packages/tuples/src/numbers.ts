import { Dec } from '@haskellian/peano'

/** An integer in `[0, N]` */
export type Bounded<N extends number> = N | (N extends 0 ? 0 : Bounded<Dec<N>>)
