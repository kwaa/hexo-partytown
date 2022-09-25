import { HexoConfig } from 'hexo'
import { copyLibFiles } from '@builder.io/partytown/utils'
import { resolve, join } from 'path'

export function copyLib() {
  const {
    config: { partytown, public_dir },
  }: { config: HexoConfig } = this
  if (partytown.copylib)
    (async () =>
      await copyLibFiles(
        resolve(join(public_dir, partytown.config?.lib ?? '/~partytown/'))
      ))()
}
