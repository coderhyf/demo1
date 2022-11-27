<template>
  <!--    <ul class="list">-->
  <!--      <li-->
  <!--        @dragenter="dragenter($event, index)"-->
  <!--        @dragover="dragover($event, index)"-->
  <!--        @dragstart="dragstart(index)"-->
  <!--        :draggable="true"-->
  <!--        v-for="(item, index) in list"-->
  <!--        :key="item.label"-->
  <!--        class="list-item"-->
  <!--      >-->
  <!--        {{item.label}}-->
  <!--      </li>-->
  <!--    </ul>-->
  <div>
    <el-input placeholder="请输入内容" v-model="input2">
      <span slot="append" v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{ item.code }}</span>
    </el-input>
    <el-button @click="login">登录</el-button>
    <!--    <span @dragenter="dragenter($event, index)"-->
    <!--          @dragover="dragover($event, index)"-->
    <!--          @dragstart="dragstart(index)"-->
    <!--          :draggable="true"-->
    <!--          v-for="(item, index) in list"-->
    <!--          :key="item.label"-->
    <!--          class="list-item">-->
    <!--       {{ item.label }}-->
    <!--    </span>-->

  </div>
  <!--  <div>-->
  <!--    <el-tag-->
  <!--      v-for="(item, index) in list"-->
  <!--      @dragenter="dragenter($event, index)"-->
  <!--      @dragover="dragover($event, index)"-->
  <!--      @dragstart="dragstart(index)"-->
  <!--      :draggable="true"-->

  <!--      :key="item.label"-->
  <!--      class="list-item">-->
  <!--      {{ item.label }}-->
  <!--    </el-tag>-->
  <!--  </div>-->

</template>
<script>
export default {
  data () {
    return {
      list: [
        {label: '列表1'},
        {label: '列表2'},
        {label: '列表3'},
        {label: '列表4'},
        {label: '列表5'},
        {label: '列表6'},
      ],
      dragIndex: '',
      enterIndex: '',
      codeList: [],
      length: 4,
      input2: '',
      menuArr: [
        {
          curNo: 10001,
          label: '1-1',
          children: [
            {
              curNo: 10002,
              label: '1-2',
              children: [
                {
                  curNo: 10003,
                  label: '1-3',
                }
              ]
            }
          ]
        },
        {
          curNo: 20001,
          label: '2-1',
          children: null
        }
      ],
      tableData: [
        {
          oprationName: 10003,
        }
      ]
    };
  },
  created () {
    this.createdCode ()
    this.dataList ()
  },
  methods: {

    getTreeName (list, id) {

      let _this = this
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        if (item.curNo === id) {
          return item.label
        } else {
          if (item.children && item.children.length > 0) {
            let res = _this.getTreeName (item.children, id)
            if (res) return res
          }
        }
      }
    },
    dataList () {
      this.tableData.forEach (item => {
        let a = this.getTreeName (this.menuArr, item.oprationName)
        console.log (a, '=====')
      })
    }
    ,
    login () {
      console.log (this.codeList, '---codeList')
      let test = []
      this.codeList.forEach (item => test.push (item.code))
      let res = test.toString ().replace (/,/g, "")
      console.log (res, '---res')
      // if(this.input2 ){}
      this.createdCode ()
    }
    ,
    createdCode () {
      const len = this.length
      const codeList = []
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      const charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        const rgb = [Math.round (Math.random () * 220), Math.round (Math.random () * 240), Math.round (Math.random () * 200)]
        codeList.push ({
          code: chars.charAt (Math.floor (Math.random () * chars.length  )),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor (Math.random () * 10)]}px`,
          padding: `${[Math.floor (Math.random () * 10)]}px`,
          transform: `rotate(${Math.floor (Math.random () * 90) - Math.floor (Math.random () * 90)}deg)`
        })
      }
      this.codeList = codeList
    }
    ,
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
    ,
    dragstart (index) {
      this.dragIndex = index;
    }
    ,
    dragenter (e, index) {
      e.preventDefault ();
      // 避免源对象触发自身的dragenter事件
      if (this.dragIndex !== index) {
        const source = this.list[this.dragIndex];
        this.list.splice (this.dragIndex, 1);
        this.list.splice (index, 0, source);
        console.log (this.list, '--- this.list')
        // 排序变化后目标对象的索引变成源对象的索引
        this.dragIndex = index;
      }
    }
    ,
    dragover (e, index) {
      e.preventDefault ();
    }
    ,
  },
}
;
</script>
<style lang="scss" scoped>
.list {
  list-style: none;

  .list-item {
    cursor: move;
    width: 300px;
    background: #EA6E59;
    border-radius: 4px;
    color: #FFF;
    margin-bottom: 6px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>

