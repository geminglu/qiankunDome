import { createBrowserRouter } from "react-router-dom";
import Settings from "../views/settings/index";
import microApps from "../micro-app";
import path from "path-browserify";
import MicroApp from "@/views/MicroApp/index";
import Layout from "@/layout";

const microAppsRouter = microApps.map((item) => {
  return { path: path.join(item.activeRule, "*"), element: <MicroApp /> };
});

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: microAppsRouter
  },
  {
    path: "/settings",
    element: <Settings />,
    children: [
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/home",
    element: <div>werte</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
