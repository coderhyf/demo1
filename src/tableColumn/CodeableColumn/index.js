import CodeTableColumn from './CodeTableColumn.vue'

CodeTableColumn.install = (Vue, options) => {
  Vue.prototype.$ELEMENT = options
  Vue.component(CodeTableColumn.name, CodeTableColumn)
}

export default CodeTableColumn
