import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'uno.css'
import icons from '@/static/iconfont.js'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.config.globalProperties.$store = uni.$store = useStore()
  app.config.globalProperties.$icons = uni.$icons = icons
  return { app }
}
