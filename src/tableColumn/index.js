import Vue from 'vue'

import CodeTableColumn from './CodeableColumn'

// 导入需要被全局注册的组件
const globalComponents = [
  CodeTableColumn,
]

globalComponents.install = () => {
  globalComponents.map((component) => {
    Vue.component(component.name, component)
  })
}

export default globalComponents
