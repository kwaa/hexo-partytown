# hexo-partytown

🎉 [Partytown](https://github.com/BuilderIO/partytown) Integration for [Hexo](https://github.com/hexojs/hexo)

## Install

```bash
pnpm add hexo-partytown # pnpm
yarn add hexo-partytown # yarn
npm i hexo-partytown # npm
```

## Config

```ts
type HexoPartytownConfig = {
  /**
   * Script matching fields
   * 
   * @remarks
   * If using an array, run as `new RegExp(arr[0], arr[1])`
   * 
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
```

## License

Licensed under the [WTFPL](http://www.wtfpl.net), See the [COPYING](COPYING) file for more details.