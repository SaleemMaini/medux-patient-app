import axios from 'axios'
import { InternalAxiosRequestConfig } from 'axios'

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/graphql`

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (!config.headers) {
    return config
  }

  const accessToken = window.localStorage.getItem('accessToken')

  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`
  }
  config.headers.Accept = 'application/json'

  return config
}

axios.interceptors.request.use(onRequest)

export { axios }
