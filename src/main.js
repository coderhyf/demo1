import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import * as echarts from 'echarts'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use (VideoPlayer)


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue ()
Vue.prototype.$echarts = echarts
Vue.use (ElementUI);
new Vue ({
  router,
  store,
  render: h => h (App)
}).$mount ('#app')
// axios ({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }).then (res => {
//   console.log (res)
// })
// axios ({
//   url: 'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:2
//   }
// }).then (res => {
//   console.log (res)
// })

//axios并发请求，多个请求一起发送
// axios.all ([
//   axios ({
//     url: 'http://123.207.32.32:8000/home/multidata',
//   }),
//   axios ({
//     url: 'http://123.207.32.32:8000/home/data',
//     params:{
//       type:'pop',
//       page:2
//     }
//   })]
// ).then(res => {
//   console.log (res)
// })
