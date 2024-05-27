import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import "./index.css";
import App from "@/App";
import reportWebVitals from "./reportWebVitals";
import createRouter from "./router";
import './public-path'

let root: Root

function render(props?: any) {
  root = ReactDOM.createRoot(
    props?.container?.querySelector("#root") || document.getElementById("root")
  );
  const route = createRouter(props?.routerBase || '/')


  root.render(
    <React.StrictMode>
      <App route={route}/>
    </React.StrictMode>
  );
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log(props);
  
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  root.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
