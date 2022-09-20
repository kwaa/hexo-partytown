import type { Hexo } from './index'
import { partytownSnippet } from '@builder.io/partytown/integration'
import { inspect } from 'util'
import * as cheerio from 'cheerio'

export function hexoPartytown(result: string) {
  const {
    config: { partytown },
  }: Hexo = this
  const $ = cheerio.load(result)
  const snippetText = partytownSnippet(partytown.config)

  // Partytown Snippet
  if (partytown.snippet === 'inline')
    $('head').prepend(`<script>${snippetText}</script>`)
  else if (partytown.snippet !== false)
    $('head').prepend(`<script src="${partytown.snippet}"></script>`)

  // Partytown Config
  if (partytown.config && partytown.snippet !== 'inline')
    $('head').prepend(
      `<script>partytown={${inspect(partytown.config, {
        compact: true,
        depth: Infinity,
      })}}</script>`
    )

  // Match Third-Party Script
  $(partytown.range)
    .find('script')
    .each((_i, element) => {
      const source = $(element).attr('src') ?? $(element).html()
      if (source)
        partytown.match.some((match) =>
          match instanceof Array
            ? new RegExp(...match).test(source)
            : source.includes(match)
        ) && $(element).attr('type', 'text/partytown')
    })

  return $.html()
}
