import { CracoConfig } from "@craco/types";
import path from "path";
import WebpackBar from "webpackbar";
// import CracoLessPlugin from "craco-less";

const CracoLessPlugin = require('craco-less');

const { env } = process;

module.exports = {
  webpack: {
    alias: {
      //名称:路径
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      webpackConfig.plugins?.push(new WebpackBar());

      !webpackConfig.output && (webpackConfig.output = {});
      webpackConfig.output["libraryTarget"] = "umd";
      webpackConfig.output["library"] = `${env.npm_package_name}-[name]`;
      webpackConfig.output[
        "chunkLoadingGlobal"
      ] = `webpackJsonp_${env.npm_package_name}`;
      webpackConfig.output["globalObject"] = "window";

      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: (config) => {
    config.historyApiFallback = true;
    config.hot = true;
    // config["watchContentBase"] = false;
    config.liveReload = false;

    return config;
  },
} as CracoConfig;
