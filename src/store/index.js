import Vue from 'vue'
import Vuex from 'vuex'

Vue.use (Vuex)
function removalRepeat (arr, key) {
  let map = new Map ()
  for (let i of arr) {
    map.set (i[key], i)
  }
  return arr = [...map.values ()]

}
export default new Vuex.Store ({
  state: {
    btnBg: null,
    openTab: [],
    activeIndex: ''
    // tabsPage: [],
  },
  mutations: {
    BTN_BG (state, val) {
      state.btnBg = val
    },
    // add_tab (state, data) {
    //   state.tabsPage.push (data, '================')
    //   let a = state.tabsPage.some (item => item.path === data.path)
    //   console.log (a, 'aaaa==========aaaa')
    //   if (state.tabsPage.some (item => item.path === data.path)){
    //     console.log ('222220=============')
    //     return
    //   }
    //     state.tabsPage.push (data)
    //   console.log (state.tabsPage , 'state.tabsPagestate.tabsPage')
    // }

    add_tabs (state, data) {
      state.openTab.push(data)
    },
    delete_tabs (state, route) {
      let index = 0
      for (let gohh of state.openTab) {
        if (gohh.route === route) {
          break
        }
        index++
      }
       state.openTab.splice(index, 1)
    },
    set_active_index (state, index) {
      state.activeIndex = index
    }

  },
  actions: {},
  modules: {},
  getters: {
    // 获取tbsList
    getTabs: (state) => state.tabsPage
  },

})
