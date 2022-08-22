import type { PartytownConfig } from '@builder.io/partytown/integration'
import { hexoPartytown } from './partytown'
import { copyLib } from './copylib'

export type HexoPartytownConfig = {
  match: (RegExp | string)[]
  range: 'head' | 'html'
  snippet: string | false
  copylib: boolean
  config?: PartytownConfig
}

export type Hexo = {
  config: {
    partytown: HexoPartytownConfig
    public_dir: string
  }
  readonly extend: {
    readonly filter: {
      readonly register: (
        type: string,
        fn: (result: string, data: unknown) => string | void
      ) => void
    }
  }
}

declare const hexo: Hexo

hexo.config.partytown = {
  match: [/^https:\/\/.+\.min\.js$/i],
  range: 'html',
  snippet: 'inline',
  copylib: true,
  ...hexo.config.partytown,
}

hexo.extend.filter.register('after_render:html', hexoPartytown)
hexo.extend.filter.register('after_generate', copyLib)
