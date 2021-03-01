import path from 'path'
import { bundleAndRun } from './utils'
import { createMessageContext } from '@intlify/runtime'

const options = {
  input: './fixtures/bundle.ts',
  include: [path.resolve(__dirname, './fixtures/locales/**')]
}

test('import', async () => {
  const { exports: messages } = await bundleAndRun(
    'vite-plugin-vue-i18n/messages-generated',
    options
  )
  ;['en', 'fr', 'ja', 'ko'].forEach(locale => {
    const fn = messages[locale].message
    expect(fn(createMessageContext({ named: { n: 3 } }))).toEqual(`3 apples`)
  })
})
