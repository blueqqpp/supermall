import axios from 'axios'
export default function request(config) {

  //方式四 直接返回promise
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 3000
  })

    //拦截器
    //1.请求拦截的作用
    instance1.interceptors.request.use(config => {
        return config
    }, err => {
            return Promise.reject(err)
    })
    //响应拦截
    instance1.interceptors.response.use(res => {
        return res.data
    }, err => {
           return Promise.reject(err) 
    })
    //instance1(config)本事就是一个promise
  return instance1(config)
}