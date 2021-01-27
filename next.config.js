const dotenv = require("dotenv-webpack")

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new dotenv({ silent: true }))

    return config
  }
}
