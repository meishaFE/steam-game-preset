// https://cli.vuejs.org/zh/config/#vue-config-js
const CompressionPlugin = require('compression-webpack-plugin');
const proxyTarget = 'https://test-steam.meishakeji.com';
module.exports = {
  runtimeCompiler: true,
  publicPath: '/game/',
  outputDir: '<%= projectName %>',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      };
    }
  },
  devServer: {
    proxy: {
      '/game/minigamecommon': {
        target: proxyTarget,
        changeOrigin: true
      },
      '/game/mini/static': {
        target: proxyTarget,
        changeOrigin: true
      },
      '/game/commonjs/': {
        target: proxyTarget,
        changeOrigin: true
      },
      '/game/coin/': {
        target: proxyTarget,
        changeOrigin: true
      }
    }
  }
};
