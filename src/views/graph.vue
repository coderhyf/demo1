<template>
  <div>
    <div style="height: calc(100vh - 50px)">
      <RelationGraph ref="seeksRelationGraph" :options="graphOptions" />
    </div>
  </div>
</template>

<script>
import RelationGraph from "relation-graph";

export default {
  name: "Demo",
  components: { RelationGraph },
  data() {
    return {
      currentSize: 400,
      myGraphPanelSize: { width: 400, height: 400 },
      graphOptions: {
        debug: true,
        disableZoom: true,
        allowShowMiniToolBar: false,
        defaultFocusRootNode: false,
        defaultNodeFontColor: "white",
        backgrounImageNoRepeat: true,
        defaultNodeShape: 0,
        defaultLineWidth: 3,
        disableDragNode: true,
        backgrounImageNoRepeat: true,
        layouts: [
          {
            layoutName: "tree",
            from: "left",
            max_per_width: "300",
            min_per_height: "30",
          },
        ],
        defaultNodeShape: 1,
        defaultNodeWidth: "120",
        defaultLineShape: 4,
        defaultJunctionPoint: "lr",
        defaultNodeBorderWidth: 0,
      },
    };
  },
  mounted() {
    this.resetGraph();
    // this.$refs.seeksRelationGraph.refresh()
    // this.$nextTick(() => {
    //   // $nextTick的功能你懂的
    //   this.$refs.seeksRelationGraph.onGraphResize();
    //   this.$refs.seeksRelationGraph.refresh();
    // });
  },
  methods: {
    resetGraph() {
      this.$refs.seeksRelationGraph.setOptions(
        this.graphOptions,
        (graphInstance) => {
          this.showSeeksGraph();
        }
      );
    },
    showSeeksGraph() {
      let __graph_json_data = {
        // rootId: "R-b",
        nodes: [
          // { id: "a", text: "根节点a" },
          // 根节点左侧的数据：
          { id: "R-b", text: "总升级客户数", color: "blue" },
          { id: "R-b-1", text: "基础", color: "#d25379" },
          { id: "R-b-2", text: "贵宾", color: "#d25379" },
          { id: "R-b-3", text: "财富2", color: "#d25379" },
          { id: "R-b-4", text: "财富3", color: "#d25379" },
          { id: "R-b-5", text: "财富4", color: "#d25379" },
          { id: "R-b-6", text: "财富5", color: "#d25379" },
          // 左侧数据
          { id: "001", text: "200", color: "#778ee7" },
          { id: "002", text: "300", color: "#778ee7" },
          { id: "003", text: "400", color: "#778ee7" },
          { id: "008", text: "900", color: "#778ee7" },
        ],
        lines: [
          // 右侧数据
          { from: "R-b-1", to: "R-b", color: "#ccc" },
          { from: "R-b-2", to: "R-b", color: "#ccc" },
          { from: "R-b-3", to: "R-b", color: "#ccc" },
          { from: "R-b-4", to: "R-b", color: "#ccc" },
          { from: "R-b-5", to: "R-b", color: "#ccc" },
          { from: "R-b-6", to: "R-b", color: "#ccc" },
          // 左侧数据
          { from: "R-b", to: "001", color: "#ccc" },
          { from: "R-b", to: "002", color: "#ccc" },
          { from: "R-b", to: "003", color: "#ccc" },
          { from: "R-b", to: "004", color: "#ccc" },
          { from: "R-b", to: "005", color: "#ccc" },
          { from: "R-b", to: "006", color: "#ccc" },
          { from: "R-b", to: "007", color: "#ccc" },
          { from: "R-b", to: "008", color: "#ccc" },
        ],
      };
      this.$refs.seeksRelationGraph.setJsonData(
        __graph_json_data,
        (graphInstance) => {
          console.log(graphInstance, '=====graphInstance');
          // 这些写上当图谱初始化完成后需要执行的代码 
          graphInstance.focusNodeById('R-b')
        }
      );
    },
  },
};
</script>
