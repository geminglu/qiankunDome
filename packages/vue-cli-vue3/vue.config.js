const { defineConfig } = require("@vue/cli-service");
const path = require('path');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: process.env.VUE_APP_PORD,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
      fallback: { path: require.resolve('path-browserify') },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  chainWebpack: (config) => {
    config.module.rule('fonts').type('asset/inline').set('generator', {});
    config.module.rule('images').type('asset/inline').set('generator', {});
  },
});
