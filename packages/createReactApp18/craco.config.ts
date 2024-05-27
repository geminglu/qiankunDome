import { CracoConfig } from "@craco/types";
import WebpackBar from "webpackbar";
import path from "path";

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

  devServer: (config) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    // config.historyApiFallback = true;
    // config.hot = false;
    // config.liveReload = false;

    return config;
  },
} as CracoConfig;
