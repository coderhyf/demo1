<template>
  <!-- 表格分页 -->
  <div class="table_box">
    <el-table :data="tableData"
              border
              @selection-change="handleSelectionChange"
              :header-cell-style="{background:'#f6f9ff'}"
              size='small'
              style="width: 100%"
              ref="trendsTable"
              @sort-change="sortChangefirst">
      <el-table-column type="selection"
                       width="55"
                       align="center"
                       :reserve-selection='true'
                       v-if="chekoutSow"
                       class-name="selection"/>
      <el-table-column type="index"
                       :index="indexMethod"
                       align="center"
                       label="序号"
                       width="65"
                       v-if="showIndex"
                       class-name="selection"/>
      <template v-for="(item, index) in columns">
        <el-table-column :align="item.align ? item.align : 'center'"
                         v-if="item.isTrue"
                         :key="index"
                         :prop="item.prop"
                         :label="item.label"
                         :fixed="item.fixed"
                         :width="item.width"
                         :min-width="item.minWidth"
                         :show-overflow-tooltip="item.tooltip ? item.tooltip : true"
                         :sortable="true"
                         class-name="allow-drag">
          <template slot-scope="scope">
            <slot v-if="item.slot"
                  :row="scope.row"
                  :name="item.slot"></slot>
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next, jumper"
                   v-show="tableData.length > 1"
                   :page-sizes="[10, 20, 50]"
                   :current-page="currentPage"
                   :page-size="pageSize"
                   :total="total"
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange">
    </el-pagination>
  </div>
</template>

<script>
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
    chekoutSow: {
      type: Boolean,
      default: true,
    },
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
  created () {
  },
  mounted () {
    this.columnDropInit ()
    this.rowDropInit ()
  },
  methods: {
    sortChangefirst (val) {
      console.log ()
    },
    // 分页size
    handleSizeChange (val) {
      this.$emit ("changeSize", val);
    },
    // 分页current
    handleCurrentChange (val) {
      this.$emit ("changeCurrent", val);
    },
    //表单选择全选
    handleSelectionChange (val) {
      this.$emit ("handleSelectionChange", val);
    },
    // 序号自增
    indexMethod (index) {
      return index + 1 + (this.currentPage - 1) * 10;
    }
  },
};
</script>

<style scoped>
.el-pagination {
  padding: 10px;
  text-align: right;
  background: #fff;
}

.text-right {
  text-align: right;
  margin-bottom: 5px;
}

.el-icon-setting:hover {
  cursor: pointer;
}
</style>

