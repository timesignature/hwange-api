import axios, { AxiosInstance } from 'axios'
import { base_url } from './share.js'

const http: AxiosInstance = axios.create({
  baseURL: `${base_url}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

// axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>)=>{
//   const token=localStorage.getItem(app_token)
//   if(token){
//     config.headers['Authorization'] = `Bearer ${token}`
//   }
//   return config
// })

export default http
