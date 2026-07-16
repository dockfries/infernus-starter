# Introduction

A very simple [omp server](https://github.com/openmultiplayer/open.mp/releases) template that based on [samp-node](https://github.com/dockfries/samp-node) and uses the library [@infernus/core](https://github.com/dockfries/infernus)

[📚 **Documentation**](https://dockfries.github.io/infernus/quick-start.html)

## Get Started

```sh
# if you are using the x86 version of samp-node
export npm_config_arch=ia32
export npm_config_target_arch=ia32

# powershell env
# $env:npm_config_arch="ia32";
# $env:npm_config_target_arch="ia32";

# cmd env
# set npm_config_arch=ia32
# set npm_config_target_arch=ia32

pnpm dlx @infernus/create-app@latest install

pnpm install --dev # ensure node-gyp install first

pnpm install

pnpm build
pnpm serve
```

## Notice

- [Why does crash the first time you run it?](https://github.com/dockfries/infernus-starter/issues/12)
- `samp-node` plugin should be executed after other plugins, see `config.json -> pawn.legacy_plugins`

## Credits

- [openmultiplayer](https://github.com/openmultiplayer/open.mp)
- [samp-node](https://github.com/dockfries/samp-node)
- [samp-node-lib](https://github.com/peterszombati/samp-node-lib)
- [@sa-mp/node](https://github.com/samp-dev/node)

## License

[MIT](./LICENSE) License © 2022-PRESENT Carl You
