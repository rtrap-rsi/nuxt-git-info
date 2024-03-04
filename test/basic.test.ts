import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page with git information', async () => {
    const html = await $fetch('/')
    expect(html).toContain('branch:')
    expect(html).toContain('sha:')
    expect(html).toContain('abbreviatedSha:')
  })
})
