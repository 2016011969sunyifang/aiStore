
const port = process.env.port || process.env.npm_config_port || 8888 // dev port
module.exports = {
    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "@/assets/scss/index.scss";`
          }
        }
      },
      devServer: {
        port: port,
        open: true,
        overlay: {
          warnings: false,
          errors: true
        },
        // before: require('./mock/mock-server.js')
      },
      publicPath: './',
      configureWebpack: {
        resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
        module: {
          rules: [
            { test: /\.ts$/, loader: "ts-loader" },
          ]
        }
      }
}