import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./public-path.js";
import route from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance: Vue;

function render(props = {}) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { container, routerBase } = props;

  instance = new Vue({
    router: route(routerBase),
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function mount(props: any) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
