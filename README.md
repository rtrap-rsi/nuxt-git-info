# Nuxt Git Info

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This module wraps [git-repo-info](https://www.npmjs.com/package/git-repo-info) to provide information about the current git repository in your Nuxt app.
All the information is available at build time and can be accessed in your Nuxt app through the public runtime config, under the `gitInfo` key. 

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-git-info?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Provides information about the current git repository as per git-repo-info module. See [git-repo-info](https://www.npmjs.com/package/git-repo-info) for more information.

## Quick Setup

1. Add `nuxt-git-info` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-git-info

# Using yarn
yarn add --dev nuxt-git-info

# Using npm
npm install --save-dev nuxt-git-info

# Using bun
bun add -D nuxt-git-info
```

2. Add `nuxt-git-info` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-git-info'
  ]
})
```

That's it! You can now use Nuxt Git Info in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-git-info/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-git-info

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-git-info.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-git-info

[license-src]: https://img.shields.io/npm/l/nuxt-git-info.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-git-info

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
