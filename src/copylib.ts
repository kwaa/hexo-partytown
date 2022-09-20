import type { Hexo } from './index'
import { copyLibFiles } from '@builder.io/partytown/utils'
import { resolve, join } from 'path'

export const copyLib = () => {
  const {
    config: { partytown, public_dir },
  }: Hexo = this
  if (partytown.copylib)
    (async () =>
      await copyLibFiles(resolve(join(public_dir, partytown.config.lib ?? '/~partytown/'))))()
}
