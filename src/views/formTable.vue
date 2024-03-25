<template>
  <div>
    <el-button>23333</el-button>
    <el-popover trigger="click">
      <el-checkbox-group
        v-model="item.isTrue"
        v-for="(item, index) in columns"
        :key="item.label"
        @change="changeCheckbox(index)"
      >
        <el-checkbox :label="item.label" :disabled="item.disabled" />
      </el-checkbox-group>
      <i slot="reference" class="icon el-icon-setting" />
    </el-popover>
    <div>
      <hyfTable
        :tableData="tableData"
        :columns="columns"
        :total="total"
        :chekoutSow="true"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :defaultSort="defaultSort"
        @selectableFunc="selectableFunc"
        @changeSize="handleSizeChange"
        @changeCurrent="handleCurrentChange"
        @handleSelectionChange="handleSelectionChange"
        ref="tables"
      >
        <template #action="scope">
          <hyf-popconfirm @confirm="query(scope.row, scope.$index)" />
          <el-link
            type="primary"
            :underline="false"
            @click="viewDetails(scope.row)"
          >
            详情
          </el-link>
        </template>
        <template #id="scope">
          <span class="colorChange" @click="viewId(scope.row)">
            {{ scope.row.userId }}
          </span>
        </template>
      </hyfTable>
    </div>
  </div>
</template>

<script>
// vue本身api
// 引入组件
import HyfTable from "../components/hyfTable";
import HyfPopconfirm from "../components/hyfPopconfirm";
// api
// 工具库
import { closeLoading, openLoading } from "../utils/loading";

export default {
  name: "formTable",
  components: { HyfTable, HyfPopconfirm },
  data() {
    return {
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
      collapse: false,
      dialogVisible: false,
      message: "App组件",
      counter: 0,
      title: "",
      columns: [
        {
          prop: "userId",
          label: "用户ID",
          isTrue: true,
          slot: "id",
          align: "center",
        },
        {
          prop: "username",
          label: "用户账号",
          isTrue: true,
          sortTable: true,
        },
        {
          prop: "username2",
          label: "用户账号2",
          isTrue: true,
          sortTable: true,
        },
        {
          slot: "action",
          label: "操作",
          width: 150,
          isTrue: true,
          fixed: "right",
        },
      ],
      // columObj: {
      //   // 选择框根据条件是否可选
      //   selectable: (row, index) => {
      //     if (row.id !== 2) return true
      //   },
      // },
      tableData: [
        { userId: "1111", username: "名字4", id: 1, username2: "名字4", id: 1 },
        {
          userId: "22222",
          username: "名字名字3名字3名字3名字3名字",
          id: 2,
          username2: "名字4",
          id: 1,
        },
        { userId: "000", username: "名字1", id: 3, username2: "名字4", id: 1 },
        { userId: "3333", username: "名字0", id: 3, username2: "名字4", id: 1 },
        {
          userId:
            "我我SU我2我我SU我222222222gg222222我我SU我222222222gg222222我我SU我222222222gg222222我我SU我222222222gg222222我我SU我222222222gg22222222222222gg222222",
          username: "@SWWSS000000%@@@~~~222222222gg222222",
          id: 3,
          username2: "名字4",
          id: 1,
        },
      ],
      defaultSort: {
        prop: "username",
        order: "ascending",
      },
      total: 30,
      currentPage: 1,
      pageSize: 10,
      conut: 0,
    };
  },
  methods: {
    viewId(row) {
      console.log(row, "=====rows");
    },
    changeCheckbox(index) {
      const isFinal = this.columns.every((item) => !item.isTrue);
      if (isFinal) {
        this.columns[index].isTrue = true;
        this.$message.warning("至少保留一项");
      }
    },
    selectableFunc(item) {
      console.log(item);
    },
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    query(row, index) {
      console.log(row, "====row");
      console.log(index, "====index");
      openLoading();
      setTimeout(() => {
        closeLoading();
        console.log(row);
        this.tableData.splice(index, 1);
      }, 1000);
    },
    viewDetails(row) {
      console.log(row,'-====rows');
      // this.$refs.tables.$refs.singleTable.toggleRowSelection();

      this.dialogVisible = true;
      this.formModel = row;
    },
    handleSelectionChange(val) {
      console.log(val);
    },
  },
  getHideColist(val) {
    console.log(val);
  },
};
</script>

<style scoped lang="scss">
@import "../scss/mixin";
@import "../scss/variable";

.colorChange {
  @include icon($btn1);
}

/deep/ .sort-caret.descending {
  @include iconTop($btn1);
}

///deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
//  background: rgba(24, 144, 255, 0.09);
//  border: 1px solid #1890FF;
//  color: #65B5FF;
//}
</style>
