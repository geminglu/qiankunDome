import './assets/main.css'
import './public-path.js'
import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps
} from 'vite-plugin-qiankun/dist/helper'

import { createApp, type App as AppType } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

let app: AppType<Element>

const render = async (props: QiankunProps = {}) => {
  const { container, routerBase } = props
  app = createApp(App)
  app.use(createPinia()).use(router(routerBase))

  app.mount(container?.querySelector('#app') || '#app')
}

// some code
renderWithQiankun({
  mount(props) {
    console.log('mount', props)
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    console.log('unmount')
    app.unmount()
  },
  update: function (props): void | Promise<void> {
    throw new Error('Function not implemented.')
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
