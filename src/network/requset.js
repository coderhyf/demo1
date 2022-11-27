import axios from 'axios';

export function request(config) {

}

// 请求拦截
axios.interceptors.request.use(config => {
  // 1. 比如config中的一些信息不符合服务器要求
  // 2. 比如每次发送网路请求时，都希望界面中显示一个请求图标
  // 3. 某些网请求(比如登陆带有token)，必须携带一些特殊信息
  return config;
}, error => {
  console.log(error)
})
// 响应拦截
axios.interceptors.response.use( res => {

})