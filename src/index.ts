import type { PartytownConfig } from '@builder.io/partytown/integration'
import { hexoPartytown } from './partytown'
import { copyLib } from './copylib'

export type HexoPartytownConfig = {
  /**
   * Script matching fields
   * @remarks If using an array, run as `new RegExp(arr[0], arr[1])`
   * @defaultValue `[['^https://.+.min.js$', 'i']]`
   */
  match: (string | [string, string])[]
  /**
   * Script matching range
   * @defaultValue `html`
   */
  range: string
  /**
   * Partytown Snippet
   * @defaultValue `inline`
   */
  snippet: string | false
  /**
   * Copy Library Files
   * @defaultValue `true`
   */
  copylib: boolean
  /**
   * Partytown Configuration
   * @see {@link https://partytown.builder.io/configuration}
   */
  config?: PartytownConfig
}

declare module 'hexo' {
  export interface HexoConfig {
    readonly partytown?: HexoPartytownConfig
    readonly public_dir: string
  }
}

hexo.config.partytown = {
  match: [['^https://.+.min.js$', 'i']],
  range: 'html',
  snippet: 'inline',
  copylib: true,
  ...hexo.config.partytown,
}

hexo.extend.filter.register('after_render:html', hexoPartytown)
hexo.extend.filter.register('after_generate', copyLib)
