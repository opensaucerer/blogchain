# Blogchain

A simple proof of stake consensus blockchain for managing blog posts and incentivizing creators built using Cosmos SDK and Tendermint.

## Get started

```shell
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

The blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

A Vue.js-based web app sis present in the `vue` directory. Run the following commands to install dependencies and start the app:

```shell
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

### Install

To install the latest version of the blockchain node's binary, execute the following command on your machine:

```shell
curl https://get.ignite.com/samperfect/blog@latest! | sudo bash
```

In case you are working with a fork,`samperfect/blog` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Release

To release a new version of the blockchain, fork and clone the repository then create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```shell
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
