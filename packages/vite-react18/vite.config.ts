import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import qiankun from "vite-plugin-qiankun";
import path from "path";
import requireTransform from "vite-plugin-require-transform";

import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_ORIGIN, VITE_APP_PORD } = loadEnv(mode, __dirname);
  return {
    plugins: [
      // 需要注释掉不然主应用会报错
      // react(),
      qiankun(name, {
        useDevMode: true,
      }),
      requireTransform({
        fileRegex: /.ts$|.tsx$/,
      }),
    ],
    server: {
      port: VITE_APP_PORD as unknown as number,
      origin: VITE_APP_ORIGIN,
      cors: true,
    },
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
  };
});

// export default defineConfig({
//   plugins: [
//     // useDevMode = true 时不开启热更新
//     // react(),
//     qiankun(name, {
//       useDevMode: true,
//     }),
//   ],
//   resolve: {
//     // https://cn.vitejs.dev/config/#resolve-alias
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//     // https://cn.vitejs.dev/config/#resolve-extensions
//     extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
//   },
//   base: "/",
//   server: {
//     port: 3005,
//     origin: "http://localhost:3005/",
//     cors: true,
//   },
// });
