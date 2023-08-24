<template>
  <el-dialog title="提示"
             :visible.sync="dialogVisible"
             width="30%">
    <el-checkbox :indeterminate="state"
                 v-model="stateAll"
                 @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="arr"
                       @change="handleCheckedCitiesChange">
      <el-checkbox v-for="(city,index) in custArr"
                   :label="city.label"
                   :key="index">{{ city.label }}</el-checkbox>
    </el-checkbox-group>

    <span slot="footer"
          class="dialog-footer">
      <el-button @click="dialogVisible = false"
                 size="mini">取 消</el-button>
      <el-button type="primary"
                 @click="submit"
                 size="mini">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "checkdialog",
  props: {
    checkAll: {
      type: Boolean,
      default: false,
    },
    isIndeterminate: {
      type: Boolean,
      default: true,
    },
    checkedCities: {
      type: Array,
      default: [],
    },
    custList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      dialogVisible: false,
      arr: this.checkedCities,
      state: this.isIndeterminate,
      custArr: this.custList,
      stateAll: this.checkAll,
      changeList: [],
    };
  },
  mounted() {
    this.dialogVisible = true;
  },
  methods: {
    submit () {
      this.changeList = []
      this.custArr.forEach (item => {
        this.arr.forEach (val => {
          if (item.label === val) {
            this.changeList.push(item);
          }
        });
      });
      this.dialogVisible = false;
      this.$emit("submit", this.changeList);
    },
    handleCheckAllChange(val) { 
      this.arr = [];
      // 当全选被选中的时候，循环遍历源数据，把数据的每一项加入到默认选中的数组去
      this.custArr.forEach((item) => this.arr.push(item.label));
      // 三元表达式，如果val的值为true，那么就把当前默认选中的值赋值给自身，这样页面页面上所有的元素就都选中了。如果为false，就是取消全选
      this.arr = val ? this.arr : [];
      // 官网说这是个样式控制，是来控制，什么时候半选的，要不要都无所谓，看你需求
      this.state = false;
    },

    // checkbox选中 --- 当绑定值变化时触发的事件
    handleCheckedCitiesChange(value) {
      //选中值的长度
      let checkedCount = value.length;
      // 如果选中值的长度和源数据的长度一样，返回true，就表示你已经选中了全部checkbox，那么就把true赋值给this.checkAll
      this.stateAll = checkedCount === this.custArr.length;
      // 同全选按钮事件里面的那个样式控制
      this.state = checkedCount > 0 && checkedCount < this.custArr.length;
    },
  },
};
</script>

<style scoped>
/* csss */
</style>
