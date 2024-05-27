import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../views/home/index";

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export default function (routerBase: string) {
  return createBrowserRouter(routers, { basename: routerBase });
}
