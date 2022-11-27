<template>
  <div>
    <!--    按钮-->
    <el-button @click="screen">全屏</el-button>
    <el-button @click="dateUp">下载</el-button>
    <div style="width: 800px;height: 300px">
      <RelationGraph ref="seeksRelationGraph" :options="graphOptions" id="graph"/>
    </div>
  </div>
</template>

<script>
import RelationGraph from 'relation-graph'

export default {
  name: 'Demo',
  components: {RelationGraph},
  data () {
    return {
      fullscreen: false,
      graphOptions: {
        allowSwitchLineShape: false,
        allowSwitchJunctionPoint: false,
        defaultJunctionPoint: 'border',
        disableZoom: true,
        allowShowZoomMenu: false,
        allowShowMiniToolBar: false,
        // allowShowMiniToolBar:false
        // 这里可以参考"Graph 图谱"中的参数进行设置
      },
      graph: {
        nodes: [
          {id: 'a',},
          {id: 'b', text: 'B', color: '#43a2f1'},
          {id: 'c', text: 'C',},
          {id: 'e', text: 'E',}
        ],
        links: [
          {from: 'a', to: 'b', text: '关系1',},
          {from: 'a', to: 'c', text: '关系2',},
          {from: 'a', to: 'e', text: '关系3',},
          {from: 'b', to: 'e', text: '关系4',}
        ]
      }
    }
  },
  mounted () {
    this.showSeeksGraph ()
  },
  methods: {
    screen () {
      let element = document.getElementById ('graph');//设置后就是   id==con_lf_top_div 的容器全屏
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen ();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen ();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen ();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen ();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen ();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen ();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen ();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen ();
        }
      }
      this.fullscreen = !this.fullscreen;

    },
    dateUp () {
      this.$refs.seeksRelationGraph.downloadAsImage ()
    },
    showSeeksGraph (query) {
      // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置
      this.$refs.seeksRelationGraph.setJsonData (this.graph, (seeksRGGraph) => {
      })
    },
  }
}
</script>
