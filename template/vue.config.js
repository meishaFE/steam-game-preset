// https://cli.vuejs.org/zh/config/#vue-config-js
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const proxyTarget = 'https://test-steam.meishakeji.com';
module.exports = {
  runtimeCompiler: true,
  publicPath: '/game/<%= projectName %>/',
  outputDir: '<%= projectName %>',
  productionSourceMap: false,
  lintOnSave: 'error',
  chainWebpack: config => {
    config.resolve.alias.set('@assets', path.join(__dirname, 'src/assets'));
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: '65-90', speed: 4 },
        gifsicle: { interlaced: false }
      });
    process.env.IS_ANALYZ &&
      config.plugin('webpack-report').use(BundleAnalyzerPlugin);
  },
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
