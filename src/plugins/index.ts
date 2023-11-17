import { App } from "vue"
import { pinia } from "@/plugins/pinia.ts"
import router from "@/router"

export function registerPlugins(app: App): void {
  app.use(router).use(pinia)
}
