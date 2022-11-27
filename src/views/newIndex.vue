<template>
  <div>
<!--    <div class="list"-->
<!--         v-for="(item, index) in dataList"-->
<!--         :key="index">-->
<!--      <foldText :showContent="item.text"></foldText>-->
<!--    </div>-->
<!--    <el-tree ref="tree"-->
<!--             :data="treeData"-->
<!--             node-key="id"-->
<!--             class="tree-wrap"-->
<!--             :indent="40">-->
<!--      <el-tooltip :disabled="showTitle"-->
<!--                  effect="dark"-->
<!--                  :content="node.label"-->
<!--                  placement="top"-->
<!--                  slot-scope="{ node }">-->
<!--        <span class="span-ellipsis"-->
<!--              @mouseover="onShowNameTipsMouseenter">{{ node.label }}</span>-->
<!--      </el-tooltip>-->
<!--    </el-tree>-->

<!--    <img src="../assets/2.png" alt="" class="imgs">-->
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities1"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :size="activity.size"
      >

        <!-- 时间线左侧 -->
        <div class="companydel">
          {{activity.timestamp}}
<!--          <p style="font-size: 14px;">{{activity.company}}</p>-->
<!--          <p style="font-size: 14px;">{{activity. comtype}}</p>-->
        </div>
        <!-- 时间线右侧 -->
        <div>
          <div class="el-row">
            <div class="fl"> <strong>{{activity.title}}</strong></div>
            <div class="fr"> <el-link type="primary">查看修改留痕</el-link></div>
          </div>
          <p style="color: #909399;">{{activity.content1}}</p>
          <p style="color: #909399; margin-bottom: 40px;">{{activity.content2}}</p>
        </div>

      </el-timeline-item>


    </el-timeline>
  </div>
</template>

<script>
import foldText from "../components/fold_text";

export default {
  name: "newIndex",
  components: { foldText },
  data() {
    return {
      drawer: false,
      activities1: [{
        title: '装箱单',
        content1:'收货人：我爱我的家弟弟吧爸爸妈妈 我爱我的家弟弟爸爸妈妈',
        content2:'翻译:',
        company:'我爱我的家弟弟吧爸爸妈妈',
        comtype:'核心企业',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'

      },

        {

          title: '分提运单',
          content1:'收货人：我爱我的家弟弟吧爸爸妈妈 我爱我的家弟弟爸爸妈妈',
          content2:'翻译:',
          company:'我爱我的家弟弟吧爸爸妈妈',
          comtype:'核心企业',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },

        {

          title: '发票',
          content1:'收货人：我爱我的家弟弟吧爸爸妈妈 我爱我的家弟弟爸爸妈妈',
          content2:'翻译:',
          company:'我爱我的家弟弟吧爸爸妈妈',
          comtype:'核心企业',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'

        }

        , {

          title: '进口采购订单',
          content1:'收货人：我爱我的家弟弟吧爸爸妈妈 我爱我的家弟弟爸爸妈妈',
          content2:'翻译:',
          company:'我爱我的家弟弟吧爸爸妈妈',
          comtype:'核心企业',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'

        }],
      count: 0,
      classActive: true,
      s: false,
      list: [
        { val: true, text: "" },
        { val: false, text: "" },
      ],
      dataList: [
        {
          text: `这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字`,
        },
        {
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字",
        },
        {
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字",
        },
        {
          text: "这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字",
        },
        {
          text: "a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig ",
        },
        {
          text: "a little pig a little pig a little piga little piga little piga little piga little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig a little pig ",
        },
      ],
      showTitle: false,
      treeData: [
        {
          label:
            "一级 一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 11",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      arr: [],
      arr1: [],
    };
  },
  computed: {},
  mounted() {
    this.aaf();
  },
  methods: {
    aaf() {
      let i = 1;
      while (i < 21) {
        this.arr.push({
          name: "coderhyf",
          age: `i${+1}`,
        });
        i++;
      }

      for (let i = 0; i < 20; i++) {
        this.arr1.push({
          name: "coderhyf",
          age: `i${+1}`,
        });
      }
      console.log(this.arr);
      console.log(this.arr1);
    },
    onShowNameTipsMouseenter(e) {
      let textLength = e.target.clientWidth;
      let containerLength = e.target.scrollWidth;
      this.showTitle = textLength >= containerLength;
    },

    // 点击弹框
    qx() {
      this.ac = false;
      this.dialogVisible = false;
      this.currentIndex = -1;
      document.querySelector(".active").className = "btns";
    },
    cl(index) {
      this.dialogVisible = !this.dialogVisible;
      this.ac = !this.ac;
    },
    // 移入
    mouseenter(e, index) {
      e.currentTarget.className = "active";
      this.currentIndex = index;
    },
    // 移出
    mouseleave(e, index) {
      // this.currentIndex = -1
      if (this.ac) {
        e.currentTarget.className = "active";
        this.currentInde = index;
      } else {
        e.currentTarget.className = "btns";
        this.currentIndex = -1;
      }
    },
  },
};
</script>
<style lang="scss">
.a1a1a1 {
  color: red !important;
}
.imgs{
  filter: drop-shadow(10px 0 20px red) ;
}
.tree-wrap {
  width: 200px;
}

.list {
  width: 500px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
  margin-bottom: 20px;
  padding: 8px;
}

.span-ellipsis {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 20px;
}

.btns,
.active {
  background: #6577ff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  width: 150px;
  position: relative;
  border: 1px solid #6577ff;

  .el-icon-delete {
    position: absolute;
    top: -9px;
    right: -5px;
  }

  div {
    margin-top: 10px;
  }

  .active {
    border: 1px solid red;
  }

}
.companydel {
  color: #909399;
  position: absolute;
  left: -100px;
  top: 1px;
  font-size: 12px;

}

.fl {
  float: left;
}

.fr {
  float: right;
}
</style>
