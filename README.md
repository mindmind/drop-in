# Slick Kit

SvelteKit / Svelte 5 / PocketBase starter with lots of extras.

## Getting Started

1. `npx slick-kit your-app-name` || `pnpx slick-kit your-app-name`
2. `cd ./your-app-name`
3. `pnpm install` || `npm install`
4. Set ENV credentials
5. (optional). `npm run typegen` || `pnpm typegen` must have all env credentials set to work

### Extras

- Auth with templates
- Type generation via pocketbase-typegen
- Auth guard & App guard functions
- Aliases and structure
- Standards based simple toast system
- Packages dir & scaffolding cli for easy internal packages
- Extendable local package system

### Included Aliases

```
$: 'src'
$settings: 'src/settings'
$routes: 'src/routes'
$state: 'src/state'
$types: 'src/types'
$utils: 'src/utilities'
```

### Commands

#### make-package

Usage: `npm run make-package`

Follow the wizard to create a new package. This will add a new package starter to the local pacakges folder /src/packages. This will also add "@org-name/your-package-name": "workspace:^", to your package.json file

#### types

Usage: `npm run types`

Generate types for pocketbase to be used throughout project. Requires all env vars to be correctly set.

### FAQ

#### Why no authenticated SSR?

The base template has two main route paths. SSR based with no auth or app code with auth. While you could have authenticated user data there are enough major differences in approach (ie not using server actions, cookie for auth token, .server.ts files, ect..) that having both in this codebase felt like it would make it too complex. Might make a 2nd template with full SSR.

#### Why no (insert styling library) included?

It's pretty trivial to add those yourself and I wanted to keep this as bare as possible style wise. Many projects have their own CSS needs and I want to respect that. I'd like to add a cli with alternate builds of this with more baked in UI if anyone is interested in helping.

### Inspirations

- Svelte Kit CLI code
- Meteor
