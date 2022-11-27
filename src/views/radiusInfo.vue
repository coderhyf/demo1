<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%">
  <el-radio-group v-model="radio">
    <el-radio  :label="item.value" v-for="(item,  ) in dataRadius" :key="item.value" >
      {{ item.label }}
    </el-radio>
  </el-radio-group>


    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
    <el-button type="primary" @click="submit" size="mini">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>

export default {
  name: "checkdialog",

  data () {
    return {
      dialogVisible: false,
      radio: '',
      dataRadius: [
        {label: '星期一', value: ''},
        {label: '星期二', value: ''},
        {label: '星期三', value: ''},
        {label: '星期四', value: ''},
        {label: '星期五', value: ''},
        {label: '星期六', value: ''},
        {label: '星期天', value: ''},
      ]
    }
  },
  mounted () {
    this.dialogVisible = true
  },
  methods: {
    submit () {
      let a = this.dataRadius.find(item => item.value === this.radio)
      this.dialogVisible = false
      this.$emit('changRadius', a)

    },
  }
}
</script>

<style scoped>

</style>
