import axios from 'axios'

axios.defaults.baseURL = `http://127.0.0.1:3333/`
//请求 响应拦截器
//请求拦截器
axios.interceptors.request.use(config=>{
    return config;
})
//响应拦截器
axios.interceptors.response.use(response=>{
    return response
},err=>{
    return Promise.reject(err)
})

export default axios