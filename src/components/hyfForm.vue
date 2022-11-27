<!--
  目前支持：input，select，单选日期，日期范围,多选 待完善
  labelWidth: 表单名宽度
  formModel: 查询所需字段，需要与fromItems中的filed名称一样
  elRow: 自适应
  itemStyle: 内边距
  footer:  表单中自适应的插槽，用于放： 查询，重置等
  footer-btn: 表单外插槽另起一行，用于放： 查询，重置等
-->
<template>
  <div>
    <el-form ref="form" label-width="150px" :model="formModel">
      <el-row :gutter="30">
        <span>
          <el-col v-bind="elRow" v-for="(item, index) in fromItems" :key="item.label">
            <el-form-item :itemStyle="itemStyle" :rules="item.rules" :prop="item.filed">
              <template slot="label"> <span>{{ item.label }}</span>
                <span v-if="item.labelSelect">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <span style="color: red">
                                {{
                                selectDefault (changeLabel[index].labelChange ? changeLabel[index].labelChange : 'e')
                              }}
                            </span>
                        </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item v-for="(val,indexz) in getLabelData(item.labelSelect.list)"
                                                  :key="indexz" @click.native="a1(index,val,item)">
                                          {{ val.label }}
                                 </el-dropdown-item>
                             </el-dropdown-menu>
                    </el-dropdown>
                </span>

              </template>
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder" :clearable="item.clear ? item.clear : true"
                          :disabled="item.disabled ? item.disabled : false"
                          v-model="formModel[item.filed]"/>

              </template>
              <template v-else-if="item.type === 'select'">
              <el-select v-model="formModel[item.filed]" :placeholder="item.placeholder"
                         :disabled="item.disabled ? item.disabled : false"
                         :popper-append-to-body="false"
                         :clearable="item.clear ? item.clear : true" style="width: 100%;">
                <el-option v-for="item in item.options" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
              </template>
              <template v-else-if="item.type === 'multiple'">
              <el-select v-model="formModel[item.filed]" :placeholder="item.placeholder" multiple
                         :disabled="item.disabled ? item.disabled : false"
                         :clearable="item.clear ? item.clear : true" collapse-tags style="width: 100%;">
                <el-option v-for="item in item.options" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
              </template>
              <template v-else-if="item.type === 'time'">
                   <el-date-picker :placeholder="item.placeholder" :clearable="item.clear ? item.clear : true"
                                   v-model="formModel[item.filed]" :disabled="item.disabled ? item.disabled : false"
                                   style="width: 100%;"
                                   :picker-options="pickerOptions"/>
              </template>
              <template v-else-if="item.type === 'daterange'">
                   <el-date-picker :placeholder="item.placeholder" :clearable="item.clear ? item.clear : true"
                                   v-model="formModel[item.filed]" :disabled="item.disabled ? item.disabled : false"
                                   style="width: 100%;" type="daterange" range-separator="至"
                                   :start-placeholder="item.start" :end-placeholder="item.end"
                                   :picker-options="pickerOptions1"/>
              </template>
            </el-form-item>
          </el-col>
        </span>
      </el-row>
    </el-form>
    <!--  表单外插槽另起一行，用于放： 查询，重置等  -->
    <div class="footer-btn">
      <slot name="footer-btn"/>
    </div>
  </div>
</template>

<script>
const labelItem = [
  {value: 'b', label: '无值'},
  {value: 'c', label: '包含'},
  {value: 'd', label: '有值'},
  {value: 'e', label: '等于'},
  {value: 'g', label: '大于'},
  {value: 'h', label: '大于或等于'},
  {value: 'k', label: '不包含'},
  {value: 'i', label: '小于'},
  {value: 'm', label: '小于或等于'},
  {value: 'n', label: '不等于'},
  {value: 's', label: '起始字符'},
  {value: 'x', label: '属于'},
  {value: 'z', label: '不属于'},
]
export default {
  name: "hyfForm",

  props: {
    fromItems: {
      type: Array,
      required: true
    },
    formModel: {
      type: Object,
    },
    itemStyle: {
      type: Object,
      default: () => ({padding: "10px 30px"})
    },
    elRow: {
      type: Object,
      default: () => ({
        xl: 8, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
  },
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime () > Date.now ();
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit ('pick', new Date ());
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date ();
            date.setTime (date.getTime () - 3600 * 1000 * 24);
            picker.$emit ('pick', date);
          }
        }, {
          text: '过去7天',
          onClick (picker) {
            const date = new Date ();
            date.setTime (date.getTime () - 3600 * 1000 * 24 * 7);
            picker.$emit ('pick', date);
          }
        },
          {
            text: '过去30天',
            onClick (picker) {
              const start = new Date ();
              start.setMonth (new Date ().getMonth () - 1)
              picker.$emit ('pick', start);
            }
          },
          {
            text: '过去1年',
            onClick (picker) {
              const start = new Date ();
              start.setFullYear (start.getFullYear () - 1)
              picker.$emit ('pick', start);
            }
          }]
      },
      pickerOptions1: {
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              const end = new Date ();
              const start = new Date ();
              picker.$emit ('pick', [start, end]);
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const end = new Date ();
              const start = new Date ();
              start.setTime (start.getTime () - 3600 * 1000 * 24);
              end.setTime (end.getTime () - 3600 * 1000 * 24);
              picker.$emit ('pick', [start, end])
            }
          },

          {
            text: '过去7天',
            onClick (picker) {
              const end = new Date ();
              const start = new Date ();
              start.setTime (start.getTime () - 3600 * 1000 * 24 * 7);
              picker.$emit ('pick', [start, end]);
            }
          }, {
            text: '过去30天',
            onClick (picker) {
              const end = new Date ();
              const start = new Date ();
              start.setMonth (new Date ().getMonth () - 1)
              picker.$emit ('pick', [start, end]);
            }
          }, {
            text: '过去1年',
            onClick (picker) {
              const end = new Date ();
              const start = new Date ();
              start.setFullYear (start.getFullYear () - 1)
              picker.$emit ('pick', [start, end]);
            }
          }]
      },
      labelItem,
      changeLabel: [
        {labelChange:''},
        {labelChange:''},
      ],
      arr: this.fromItems
    }
  },

  mounted () {
    this.a2 ( )
  },
  computed: {
    getLabelData () {
      return val => {
        if (!val) return []
        let tempArr = []
        let valArr = val.split (',')
        for (let i = 0; i < this.labelItem.length; i++) {
          const item = this.labelItem[i]
          if (valArr.indexOf (item.value) !== -1) {
            tempArr.push (item)
          }
        }
        return tempArr
      }
    },
    selectDefault () {
      return val => {
        for (let i = 0; i < this.labelItem.length; i++) {
          const item = this.labelItem[i]
          if (item.value === val) {
            return item.label
          }
        }
      }
    }
  },
  methods: {
    a2 (arr) {
      let arr1 = []
      this.fromItems.forEach (item => {
        if(item.labelChange){
          arr1.push ({
            labelChange: item.labelChange
          })
        }
        this.changeLabel = [...arr1]
      })
    },
    a1 (index, val) {
      this.changeLabel[index].labelChange = val.value
      // this.changeLabel = [...this.changeLabel]
      // this.$emit('labelSelect', this.changeLabel)
    }
  }
}
</script>
<style lang="scss">
/deep/ .el-select-dropdown__item.selected {

  color: red;
}
</style>
