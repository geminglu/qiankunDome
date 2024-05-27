import { App as AppType, createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./public-path.js";
import router from "./router";
import store from "./store";

let app: AppType<Element> | null = null;

function render(props: any = {}) {
  const { container, routerBase } = props;
  app = createApp(App)
  app
    .use(store)
    .use(router(routerBase))
    .mount(container?.querySelector("#app") || "#app");
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  app?.unmount();
}
