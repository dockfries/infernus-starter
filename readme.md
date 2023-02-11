# Introduction

A very simple [omp server](https://github.com/openmultiplayer/open.mp/releases) template that based on [samp-node](https://github.com/AmyrAhmady/samp-node) and uses the library [omp-node-lib](https://github.com/yucarl77/omp-node-lib)

## Features

- 🥳 [open.mp](https://github.com/openmultiplayer) for the next generation
- 🚀 fully embrace the powerful node.js ecosystem
- 🎉 i18n support for different charsets depending on the player
- 💡 better data types and asynchronous support

## Preparation

> **The necessary files were removed** to ensure that the latest version is always used and that the repository file size is reduced

1. Download the [omp server](https://github.com/openmultiplayer/open.mp/releases), later extract the `omp-server[.exe]` and `components` folder to the project root directory
2. Download the [samp-node](https://github.com/AmyrAhmady/samp-node/releases), later put `libnode.so/dll` in the project root directory and `samp-node.so/dll` in the plugins folder
3. Download the [streamer plugin](https://github.com/samp-incognito/samp-streamer-plugin/releases), later put `streamer.so/dll` in the plugins folder

## Getting started

```sh
# clone the project with https
git clone https://github.com/YuCarl77/omp-node-ts
# or ssh
git clone git@github.com:YuCarl77/omp-node-ts.git

# enter the project directory
cd omp-node-ts

# install dependency
pnpm install

# change rcon.password in config.json
vim config.json

"rcon": {
  "password": "changeme" # change this
},

# develop (start compilation, listen for changes and restart automatically)
npm run dev
```

## Build

```sh
# build for production environment
npm run build

# run omp server
npm run serve
```

## Notice

- [Why does crash the first time you run it?](https://github.com/YuCarl77/omp-node-ts/issues/12)
- `samp-node` plugin should be executed after other plugins, see `config.json -> pawn.legacy_plugins`
- `samp-node` requires compliance with the `commonjs` specification and has been converted via `rollup`

## Credits

- [openmultiplayer](https://github.com/openmultiplayer/open.mp)
- [samp-node](https://github.com/AmyrAhmady/samp-node)
- [samp-node-lib](https://github.com/peterszombati/samp-node-lib)
- [@sa-mp/node](https://github.com/samp-dev/node)

## License

[MIT](./LICENSE)
