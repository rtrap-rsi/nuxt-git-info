import { defineNuxtModule } from '@nuxt/kit'
import defu from 'defu'
import * as gitRepoInfo from 'git-repo-info'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-git-info',
    configKey: 'gitInfo'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    //@ts-ignore
    const info = gitRepoInfo.default()
    nuxt.options.runtimeConfig.public.gitInfo = defu(nuxt.options.runtimeConfig.public.gitInfo, info)
  }
})
