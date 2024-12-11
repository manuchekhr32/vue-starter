import axios, { AxiosInstance } from 'axios'
import { App, inject, ObjectPlugin } from 'vue'

export const injectApi = () => inject<AxiosInstance>('api') as AxiosInstance

export const apiPlugin: ObjectPlugin = {
  install(app: App) {
    const apiBase = import.meta.env.VITE_API_BASE
    const api = axios.create({
      baseURL: apiBase,
    })
    app.provide('api', api)
  },
}
