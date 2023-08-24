<template>
  <div class="down_panel">
    <!-- <el-input placeholder="输入关键字进行过滤"
              v-model="filterText">
    </el-input> -->

    <el-tree
      :filter-node-method="filterNode"
      :data="treeData1"
      ref="tree1"
      class="treeDom"
      node-key="id"
      draggable
      default-expand-all
      @node-drag-end="handleDragend"
    >
      <!-- <span class="custom-tree-node"
            slot-scope="{node,data}">
        {{ data.label }}
      </span>    :allow-drop="returnFalse" -->
    </el-tree>

    <div class="divDom">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      filterText: "",
      treeData1: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 3,
              label: "二级 1-1",
            },
            {
              id: 4,
              label: "二级 1-2",
            },
          ],
        },
        {
          id: 5,
          label: "一级 1",
          children: [
            {
              id: 3,
              label: "二级 1-1",
            },
            {
              id: 4,
              label: "二级 1-2",
            },
          ],
        },
        {
          id: 2,
          label: "二级 2",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      topY: 0,
      leftX: 0,
    };
  },
  components: {
    draggable,
  },
  watch: {
    filterText(val) {
      console.log(this.$refs.tree1);
      this.$refs.tree1.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleDragend(draggingNode, endNode, position, event) {
      this.topY = event.y;
      this.leftX = event.x;
      // console.log(draggingNode.data.children .length > 0);
      if (draggingNode.data.children && draggingNode.data.children !== 0) {
        // console.log('222');
        this.$message.error("父级不可拖动");
        return;
      }
      if (this.topY > 150 && this.leftX > 650) {
        this.tableData.push({
          date: "2022-06-02",
          name: "郝元峰",
          address: "北京市朝阳区阜通东大街 6 号",
        });
      } else {
        this.$message.error("请拖到指定区域");
      }
    },
    allowDrag(node) {
      console.log(node, "---node");
    },
    returnFalse(draggingNode, dropNode, type) {
      // if (draggingNode.data.level === dropNode.data.level) {
      //   //aboveId是父节点id
      //   if (draggingNode.parent.id === dropNode.parent.id) {
      //     return type === "prev" || type === "next";
      //   }
      // } else {
      //   // 不同级进行处理
      //   return false;
      // }
    },
  },
};
</script>
<style lang="scss">
.down_panel {
  display: flex;

  .treeDom {
    width: 300px;
    background: orange;
  }

  .divDom {
    flex: 1;
  }
}
</style>
