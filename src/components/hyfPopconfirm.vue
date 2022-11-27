<template>
  <el-popconfirm
    :confirm-button-text='confirmButton'
    :cancel-button-text='cancelButton'
    :title="title"
    :icon="icon"
    :icon-color="iconColor"
    :hide-icon="hideIcon"
    @confirm="confirm"
    @cancel="cancel">
    <el-link slot="reference" type="danger" :underline="false">{{ actionText }}</el-link>
  </el-popconfirm>
</template>

<script>
export default {
  name: "hyfPopconfirm",
  props: {
    confirmButton: {
      type: String,
      default: '确定'
    },
    cancelButton: {
      type: String,
      default: '取消'
    },
    title: {
      type: String,
      default: '确定要删除该数据?'
    },
    actionText: {
      type: String,
      default: '删除'
    },
    icon: {
      type: String,
      default: 'el-icon-info'
    },
    iconColor: {
      type: String,
      default: 'red'
    },
    hideIcon: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    confirm () {
      this.$emit ('confirm')
    },
    cancel () {
      this.$emit ('cancel')
    },
  }
}
</script>
