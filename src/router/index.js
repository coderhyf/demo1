import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use (VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/bar'
  },
  {
    path: '/bar',
    component: () => import('../views/Home'),
    children:[
      {
        path: '/bar',
        name:'首页',
        meta: {
          keepAlive: true,
          title:'首页',
        },

        component: () => import('../views/bar')
      },

      {
        path: '/line',
        name:'折线',
        meta: {
          keepAlive: false,
          title:'折线',
        },
        component: () => import('../views/lineColor')
      },
      {
        path: '/cust',
        name:'折线',
        meta: {
          keepAlive: false,
          title:'cust',
        },
        component: () => import('../views/cust')
      },
      {
        path: '/chekboxs',
        name:'折线',
        meta: {
          keepAlive: false,
          title:'cust',
        },
        component: () => import('../views/热力图/chekboxs')
      },
      {
        path: '/pie',
        name:'饼图',
        meta: {
          keepAlive: false,
          title:'饼图',
        },
        component: () => import('../views/pie')
      },
      {
        path: '/form',
        name:'查询',
        meta: {
          keepAlive: false,
          title:'查询',
        },
        component: () => import('../views/formTest')
      },
      {
        path: '/table',
        name:'表单',
        meta: {
          keepAlive: false,
          title:'表单',
        },
        component: () => import('../views/formTable')
      },
      {
        path: '/jindu',
        name:'进度条',
        meta: {
          keepAlive: false,
          title:'进度条',
        },
        component: () => import('../views/ProcessCustom1')
      },
      {
        path: '/menu',
        name:'菜单',
        meta: {
          keepAlive: false,
          title:'菜单',
        },
        component: () => import('../views/leftMenu')
      }, {
        path: '/tz',
        name:'拖拽',
        meta: {
          keepAlive: false,
          title:'拖拽',
        },
        component: () => import('../views/tz')
      } ,
      {
        path: '/graph',
        name:'图谱',
        meta: {
          keepAlive: false,
          title:'图谱',
        },
        component: () => import('../views/graph')
      },
      {
        path: '/newIndex',
        name:'newIndex',
        meta: {
          keepAlive: false,
          title:'newIndex',
        },
        component: () => import('../views/newIndex')
      },
    ]
  },
  {
    path: '/aaa',
    component: () => import('../views/404'),
  }
]

const router = new VueRouter ({
  mode:'history',
  routes
})
export default router
