import type { HexoPartytownConfig } from './index'
import { copyLibFiles } from '@builder.io/partytown/utils'
import { resolve } from 'path'

export const copyLib = () => {
  const {
    config: { partytown },
  }: { config: { partytown: HexoPartytownConfig } } = this
  if (partytown.copylib)
    (async () => await copyLibFiles(resolve('public/~partytown')))()
}
