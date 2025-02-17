// #ifdef H5
const baseUrl = process.env.DEPLOY_MODE === 'dev' ? process.env.DEV_BACKEND : process.env.PROD_BACKEND
// #endif

module.exports = {
  transpileDependencies: ['uview-ui'],
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: true,

  devServer: {
    proxy: {
      '/api': {
        target:
          baseUrl || "http://192.168.31.200:8080/api/v1",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    experiments: {
      asyncWebAssembly: true,
    },
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: 'webassembly/async',
        },
      ],
    },
    resolve: {
      alias: {
      },
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      }
    }
  }
}