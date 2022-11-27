<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <hyf-form :from-items="fromItems" :form-model="formModel" ref="form">
            <template #footer-btn>
              <div style="text-align: center" class="btns1">
                <el-button size="mini" @click="query" class="query"> 查询</el-button>
                <el-button size="mini" class="defaultBtn" @click="reset"> 重置2</el-button>
                <span class="open">
                  展开 <i class="el-icon-arrow-down"/>
                </span>
              </div>
            </template>
          </hyf-form>
          <br>
          <div class="action">
            <div class="results">
              <i class="el-icon-info"></i>
              查询出符合条件的结果: 300条
            </div>
            <div>
              <el-button size="mini">删除</el-button>
              <el-button size="mini" class="xq">详情</el-button>
              <el-button size="mini" class="dc" @click="a222">导出</el-button>
            </div>
          </div>
          <form-table/>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import HyfForm from "../components/hyfForm";
import FormTable from "./formTable";
import {mapState} from "vuex";

export default {
  components: {FormTable, HyfForm},
  data () {
    return {
      dialogVisible: false,
      dowItem: {
        label: '小于',
        key: '9'
      },
      fromItems: [
        {
          placeholder: "请输入",
          label: "日期", // 展示名称
          type: "time", // 类型
          filed: 'time',  // 后台接收字段
          // rules: {required: true, message: "请选择日期", trigger: "change"},
          labelSelect: {
            list: 'e,n,x,z,b,d,s'
          },
          labelChange: 's'
        },
        {
          placeholder: "请输入用户名",
          label: "金融资产 ",  // 展示名称
          type: "input",// 类型
          filed: 'user', // 后台接收字段
          // rules: {required: true, message: "请输入活动名称", trigger: "blur"},
          labelSelect: {
            list: 'e,n,x,z,b,d,s'
          },
          labelChange: 'e'
        },
        {
          placeholder: "我的",
          label: "我的 ",  // 展示名称
          type: "select",// 类型
          filed: 'my', // 后台接收字段
          options: [
            {label: '测试1', value: '1'},
            {label: '测试2', value: '2'},
          ],
        },
        {
          placeholder: "我的",
          label: "多选",  // 展示名称
          type: "multiple",// 类型
          filed: 'multiple', // 后台接收字段
          options: [
            {label: '测试1', value: '1'},
            {label: '测试2', value: '2'},
          ],
        },

        {
          placeholder: "请输入",
          label: "日期范围",
          start: '开始日期',
          end: '结束日期',
          type: "daterange", // 类型
          filed: 'daterange',  // 后台接收字段
        },
      ],
      formModel: {
        user: '',
        my: '',
        time: '',
        daterange: '',
        multiple: '',
      },
      formModel1: {
        user: '用户',
        my: '1',
        time: '2022-04-12',
        daterange: '',
        multiple: '1',
      },
      flag: false,
      activeName: 'first',
      custStr: 'custName,custCode',
      custList: [
        {label: '客户姓名', value: 'custName'},
        {label: '客户id', value: 'custCode'},
        {label: '产品名称', value: 'custHyf'},
      ],
      arr: [
        {
          filed: "time",
          label: "日期",
          labelChange: "s",
          placeholder: "2022/08/10",
          type: "time",
          name:'users',
        }, {
          filed: "user",
          label: "金融资产",
          labelChange: "e",
          placeholder: '我是内容',
          type: "input",
          name:'usersaa',
        },
      ]
    };
  },
  watch: {
    btnBg (val) {
      this.btnLine (val)
    }
  },
  computed: {
    ...mapState (['btnBg'])
  },
  mounted () {
    let a = this.custStr.split (',')
    this.custList.map (item => {
      a.forEach (itemz => {
        item.chekbox = item.value === itemz;
      })
      console.log (item, '======')
    })
    let elTableLine = localStorage.getItem ('to')
    if (elTableLine) {
      let line = document.querySelector ('.el-tabs__active-bar')
      line.style.background = elTableLine
    }

  },
  methods: {
    a222 () {
      this.$alert ('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message ({
            type: 'info',
            message: `action: ${action}`
          });
        }
      });
    },
    btnLine (val) {
      switch (val) {
        case '1':
          let line = document.querySelector ('.el-tabs__active-bar')
          line.style.background = '#597EFE'
          break;
        case '2':
          let line2 = document.querySelector ('.el-tabs__active-bar')
          line2.style.background = '#CF1322'
          break;
        case '3':
          let line3 = document.querySelector ('.el-tabs__active-bar')
          line3.style.background = '#1890FF'
          break;
      }
    },
    handleClick (tab, event) {
    },
    query (event) {
      // let a ={}
      // for (let i = 0; i < this.fromItems; i++) {
      //   if(this.fromItems[i].labelChange){
      //     a= {...this.fromItems[i].labelChange}
      //   }
      // }
      let obj = {}

     this.arr.forEach ((item) => {
        obj[item.name] = [item]
      })
      console.log (obj ,'aaa')
      event.target.blur ()
      if (event.target.nodeName === 'SPAN') {
        event.target.parentNode.blur ()
      }

      this.$refs.form.$refs.form.validate (item => {
        if (item) {
          console.log (this.formModel)
        } else {
          console.log (2)
        }
      })
    },
    reset (event) {
      event.target.blur ()
      if (event.target.nodeName === 'SPAN') {
        event.target.parentNode.blur ()
      }
      for (const key in this.formModel) {
        this.formModel[key] = ''
      }
    },
    submitForm () {
      this.$refs.form.validate ((valid) => {
        if (valid) {
          console.log ("过了");
        } else {
          this.$nextTick (() => {
            let isError = document.getElementsByClassName ("is-error");
            isError[0].scrollIntoView ();
          });
        }
      });
    },
    onChange (file, files) {
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/mixin";
@import "../scss/variable";


.btns1 {
  .query {
    @include btn($btn1);
    @include fontc($fontc1)
  }

  .open {
    @include icon($btn1);
    font-size: 12px;
    padding-left: 15px;
  }
}

.action {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  line-height: 32px;
  margin-bottom: 10px;

  .results {
    background: #F3F4F5;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    width: 250px;
    border-radius: 4px;
    text-align: center;

    .el-icon-info:before {
      @include icon($btn1)
    }
  }

  .xq {
    background: white;
    @include icon($btn1);
    @include iconB($btn1)
  }

  .dc {
    @include btn1($btn3);
    @include fontc($fontc1)
  }
}

/deep/ .el-tabs__item {
  color: #666;
}

/deep/ .el-tabs__item.is-active {
  color: black;
  font-weight: bold;
}

// /deep/ .el-tabs__active-bar {
//  @include btn1($btn1);
//    //background: red;
//}
</style>
<style lang="scss">
.el-select-dropdown__item.selected {
  color: red;
}

.el-button--primary {
  color: red;
}
</style>
