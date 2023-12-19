<template>
  <!-- 表格分页 -->
  <div class="table_box">
    <div style="text-align: right">
      <!-- 控制列隐藏显示 -->
      <!--          <el-popover trigger="click">-->
      <!--            <el-checkbox-group v-model="item.isTrue" v-for="(item, index) in columns" :key="item.label"-->
      <!--                               @change="changeCheckbox(index)">-->
      <!--              <el-checkbox :label="item.label" :disabled="item.disabled"/>-->
      <!--            </el-checkbox-group>-->
      <!--            <i slot="reference" class=" icon el-icon-setting"/>-->
      <!--          </el-popover>-->
    </div>
    <div style="display: inline-block; width: 100%">
      <el-table
        :data="tableData"
        border
        @selection-change="handleSelectionChange"
        @sort-change="sortRankChange"
        @cell-dblclick="celldblclick"
        @row-click="clickRow"
        :row-class-name="tableRowClassName"
        :header-cell-style="{ background: '#e8e8e8' }"
        :default-sort="defaultSort"
        size="mini"
        ref="trendsTable"
        class="tableAuto"
      >
        <slot name="time" />
        <el-table-column
          type="selection"
          width="55"
          align="center"
          :reserve-selection="true"
          v-if="chekoutSow"
        />
        <el-table-column
          type="index"
          :index="indexMethod"
          align="center"
          label="序号"
          width="65"
          v-if="showIndex"
        />
        <!-- -->
        <template v-for="(item, index) in newList">
          <el-table-column
            :align="item.align ? item.align : 'left'"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :fixed="item.fixed"
            :width="item.width"
            :min-width="
              item.minWidth
                ? item.minWidth
                : flexColumnWidth(item.prop || item.slot, item.label, tableData)
            "
          >
            <template slot-scope="scope">
              <slot v-if="item.slot" :row="scope.row" :name="item.slot"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      v-show="tableData.length > 1"
      :page-sizes="[10, 20, 50]"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      background
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>

<script>
// import Clipboard from "clipboard";
// import Sortable from "sortablejs";
// import { flexColumnWidth } from "../utils/fit-table-columns";
/**
 *  showIndex: 是否显示序号,默认false
 *  chekoutSow: 是否显示复选框，默认false
 *  tableData: 表单数据
 *  columns: 表头数据
 *       columns: [
 {
                prop: "userId",  prop:后端借口字段，用于渲染
                label: "用户ID",
                minWidth: 70,
                istrue: true,   istrue: 列隐藏显示
              },
 ]
 total: 分页总数据
 currentPage: 当前页码
 pageSize:  每页条数
 */

export default {
  props: {
    showIndex: {
      type: Boolean,
      default: false,
    },
    defaultSort: {
      type: Object,
      default: () => {},
    },
    chekoutSow: {
      type: Boolean,
      default: false,
    },
    // columObj:{
    //   type:Object,
    //   default:{}
    // },
    tableData: {
      type: Array,
      default: [],
    },
    columns: {
      type: Array,
      default: [],
    },
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },

  data() {
    return {
      newList: this.columns,
      isShow: null,
      a1: "",
      transFld: [],
    };
  },
  watch: {
    tableData(valArr) {
      const _this = this;
      this.newList = this.newList.map(function (value) {
        const arr = valArr.map((x) => x[value.prop]); // 获取每一列的所有数据
        arr.push(value.label); // 把每列的表头也加进去算
        value.width = _this.getMaxLength(arr) + 20; // 每列内容最大的宽度 + 表格的内间距(依据实际情况而定)
        return value;
      });
    },
  },
  created() {},
  mounted() {
    // this.columnDropInit ()
    // this.rowDropInit ()
    // this.aaa();
    // const columns = this.calcColumnsWidth(this.columns, this.tableData);
    // this.columns = columns;
  },
  methods: {
    flexColumnWidth(prop, label, tableData) {
      console.log("2222");
      prop = prop + "";
      if (
        !tableData ||
        !tableData.length ||
        tableData.length === 0 ||
        tableData === undefined
      ) {
        return;
      }
      if (!prop || !prop.length || prop.length === 0 || prop === undefined) {
        return;
      }
      // 获取列表中最长的数据(内容)
      let old_width = 0;
      let col_width = 0;
      let transProp = "";
      this.transFld.forEach((item) => {
        if (item.id === prop) {
          transProp = item.name;
        }
      });
      for (let i = 0; i < tableData.length; i++) {
        let content = transProp ? tableData[i][transProp] : tableData[i][prop];
        let new_width = this.getTextWidth(content);
        if (new_width > old_width) {
          old_width = new_width;
        }
        col_width = this.getTextWidth(label);
        if (col_width > old_width) {
          old_width = col_width;
        }
      }
      return old_width + "px";
    },
    getTextWidth(text) {
      let pixelLength = this.pxWidth(text, "normal 15px Microsoft YaHei");
      return pixelLength + 40;
    },
    pxWidth(text, font) {
      let canvas =
          this.pxWidth.canvas ||
          (this.pxWidth.canvas = document.createElement("canvas")),
        context = canvas.getContext("2d");
      font && (context.font = font);
      let metrics = context.measureText(text);
      return metrics.width;
    },
    clickRow(row) {
      // event.preventDefault(); //阻止默认行为
      this.$refs.trendsTable.toggleRowSelection(row);
    },
    celldblclick(row, column, cell, event) {
      if (event.type === "dblclick") {
        this.$copyText(event.target.innerText).then(
          (e) => {
            console.log("复制成功：", e);
          },
          (e) => {
            console.log("复制失败：", e);
          }
        );
        // let save = function (e) {
        //   e.clipboardData.setData("text/plain", event.target.innerText);
        //   e.preventDefault(); //阻止默认行为
        // };
        // document.addEventListener("copy", save);
        // document.execCommand("copy");
        // document.removeEventListener("copy", save);
      }
      // this.$message({ message: "复制成功", type: "success" }); //加提示
      // this.$message.success(`${column.label}:复制成功`); //加提示
    },

    //列拖拽
    columnDropInit() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        draggable: ".allow-drag",
        onEnd: (e) => {
          let tempHableHeader = [...this.newList]; // 先存一份临时变量表头数据
          let temp; // 临时变量用于交换
          temp = tempHableHeader[e.oldIndex - 1]; // 注意这里-2是因为，我在表格的前面加了两列（勾选框列，和序号列）
          tempHableHeader[e.oldIndex - 1] = tempHableHeader[e.newIndex - 1]; // 如果没有这两列，序号就是正常对应的，就不用减2
          tempHableHeader[e.newIndex - 1] = temp;
          this.newList = []; // 大家可以注掉试试哦
          this.$nextTick(() => (this.newList = tempHableHeader));
        },
      });
    },
    rowDropInit() {
      // 第一步，获取行容器
      const wrapperRow = document.querySelector(
        ".el-table__body-wrapper tbody"
      );
      const that = this; // 存一份指向
      // 第二步，给行容器指定对应拖拽规则
      Sortable.create(wrapperRow, {
        onEnd({ newIndex, oldIndex }) {
          // 这里是区分上面的列拖拽的另外一种写法

          // 首先删除原来的那一项，并且保存一份原来的那一项，因为splice返回的是一个数组，数组中的第一项就是删掉的那一项
          const currRow = that.tableData.splice(oldIndex, 1)[0];
          // 然后把这一项加入到新位置上
          that.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    selectableFunc(key) {
      this.$emit("selectableFunc", key);
    },
    // 分页size
    handleSizeChange(val) {
      this.$emit("changeSize", val);
    },
    // 分页current
    handleCurrentChange(val) {
      this.$emit("changeCurrent", val);
    },
    //表单选择全选
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    sortRankChange(val) {
      this.$emit("sortRankChange", val);
    },
    tableRowClassName({ row, rowIndex }) {
      if ((rowIndex + 1) % 2 === 0) {
        return "success-row";
      }
    },
    // 序号自增
    indexMethod(index) {
      return index + 1 + (this.currentPage - 1) * 10;
    },
    changeCheckbox(index) {
      const isFinal = this.columns.every((item) => !item.isTrue);
      if (isFinal) {
        this.columns[index].isTrue = true;
        this.$message.warning("至少保留一项");
      }
    },
  },
};
</script>

<style>
.el-table .cell,
.el-table th > .cell {
  display: inline-block;
  white-space: nowrap;
  width: auto;
  overflow: auto;
}
/* .el-table /deep/ th {
  padding: 0;
  white-space: nowrap;
  min-width: fit-content;
}

.el-table /deep/ td {
  padding: 10px;
  white-space: nowrap;
  width: fit-content;
}


.el-table /deep/ .cell {
  white-space: nowrap;
  width: fit-content;
} */
</style>
