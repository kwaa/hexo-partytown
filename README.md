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
  // [['^https:\/\/.+\.min\.js$', 'i']]
  match: (string | [string, string])[]
  // 'html'
  range: string
  // 'inline'
  snippet: string | false
  // true
  copylib: boolean
  // undefined
  config?: PartytownConfig
}
```
