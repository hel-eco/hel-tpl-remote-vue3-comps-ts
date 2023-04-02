const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')
const helDevUtils = require('hel-dev-utils')
const appInfo = require('./appInfo');

module.exports = defineConfig({
  // 此处传入的url值仅为了方便另一个项目可以基于当前模块的wed-dev-server调试当前模块代码，端口号对齐 npm run start 里的 PORT
  // 它不会影响流水线的 publicUrl 值，因为 hel-dev-utils 内部发现设置有 process.env.HEL_APP_HOME_PAGE 时或 设置了 npmCdnType 时，
  // 会优先采用 HEL_APP_HOME_PAGE 值或 npmCdnType 对应的 cdn 前缀值作为 publicUrl，覆盖掉这里的默认值
  publicPath: appInfo.getPublicPathOrUrl(`http://localhost:${process.env.PORT}`),
  productionSourceMap: true,
  outputDir: helDevUtils.cst.HEL_DIST_DIR,
  transpileDependencies: true,
  configureWebpack: config => {
    if (!config.output) config.output = {};
    config.output.library = appInfo.groupName;
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = subApp.jsonpFnName; // for webpack 4
    config.output.chunkLoadingGlobal = appInfo.jsonpFnName; // for webpack 5
    config.externals = appInfo.externals;
    config.optimization = {
      splitChunks: {
        maxSize: 6000000,
      },
    };

    config.devServer = {
      // 开启跨域，方便本机上别的项目调试当前模块
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      },
    };

    if (!config.plugins) config.plugins = [];
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 2
      }),
    );

    // if user want to inject env var
    // config.plugins.push(new webpack.DefinePlugin({
    //   "process.env": {
    //     VUE_APP_XXX: JSON.stringify('xxx'),
    //   }
    // }));
  },
})
