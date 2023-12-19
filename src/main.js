import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// import AFTableColumn from 'af-table-column'
import * as echarts from 'echarts'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'element-ui/lib/theme-chalk/index.css';
import './utils/directive'
// import VueClipBoard from 'vue-clipboard2'
// Vue.use(VueClipBoard)
// import Plugin from 'v-fit-columns'
// import fitTableColumns from './utils/fit-table-columns'
// import  './utils/fit-table-columnsCss'
// import AFTableColumn from './components/AFTableColumn.vue'

// import globalComponents from './tableColumn'

import App from './App.vue';

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$echarts = echarts
// Vue.use(Plugin)

Vue.use(ElementUI);

// Vue.use(AFTableColumn)  //要先引用vue再引入elementui
// Vue.use(globalComponents)
Vue.use(VideoPlayer)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
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
