/* eslint-env node */
const { mergeWithRules } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react")
const path = require("path")

const mergeRules = {
  plugins: "replace",
  devServer: {
    static: {
      directory: "replace"
    }
  },
  module: {
    rules: {
      test: "match",
      include: "replace",
      exclude: "replace",
      use: "replace"
    }
  }
}

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "task-manager",
    webpackConfigEnv,
    argv
  })

  return mergeWithRules(mergeRules)(defaultConfig, {
    output: {
      path: path.join(__dirname, "..", "dist") // string (default)
    },
    resolve: {
      fallback: {
        fs: false,
        path: false,
        http: false,
        tty: false,
        buffer: false
      }
    },
    module: {
      rules: [
        {
          test: /\\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[local]--[hash:base64:5]__[name]"
                }
              }
            }
          ]
        }
      ]
    }
  })
}
