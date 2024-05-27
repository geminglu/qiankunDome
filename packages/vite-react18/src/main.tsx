import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/es/helper";
import App from "./App.tsx";
import "./index.css";
import createRouter from "./router/index.tsx";

let root: Root;

function render(props: any) {
  const { container } = props;

  root = ReactDOM.createRoot(
    container?.querySelector("#root") || document.getElementById("root")
  );

  const route = createRouter(props?.routerBase || "/");

  root.render(
    <React.StrictMode>
      <App route={route} />
    </React.StrictMode>
  );
}

renderWithQiankun({
  mount(props) {
    console.log("react18 mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount() {
    console.log("react18 unmount");
    root.unmount();
  },
  update(props: any) {
    console.log("react18 update");
    console.log(props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
