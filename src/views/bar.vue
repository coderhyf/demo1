<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="date"
      value-format="yyyy-MM-dd"
      @change="changeMonth"
      :picker-options="pickerOptions"
    ></el-date-picker>
    <el-button @click="baidu">百度</el-button>
 
    <!-- <iframe :src="src" width="100%" height="200px" ref="iframe"></iframe> -->
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: "",
  data() {
    return {
      a:NaN,
      pickerOptions: {
				disabledDate(time) {
					let curDate = moment('2024-01-31').valueOf();
          // console.log(curDate,'=====curDate');
					let three = 730 * 24 * 3600 * 1000;
					let threeMonths = curDate - three;
					return (
						time.getTime() > Date.now() - 8.64e6 ||
						time.getTime() < threeMonths
					);
				}
			},
      iframeWin: {},
      src:'',
      value1: "", // 日
      pickerMinDate: null,
      day31: 31 * 24 * 3600 * 1000,
      disabledDate: (time) => {
        // 设置一个月的时间戳
        let secondNum = 30 * 24 * 60 * 60 * 1000;
        // 获取选中时间
        let timeOptionRange = this.timeOptionRange;
        if (timeOptionRange) {
          return (
            time.getTime() > timeOptionRange.getTime() + secondNum ||
            time.getTime() < timeOptionRange.getTime() - secondNum
          );
        }
      },
      // 日期使用
      // pickerOptions1: {
      //   onPick: ({ maxDate, minDate }) => {
      //     console.log(minDate, '===ss');
      //     if (minDate && this.pickerMinDate) {
      //       this.pickerMinDate = null;
      //     } else if (minDate) {
      //       this.pickerMinDate = minDate.getTime();
      //     }
      //   },
      //   disabledDate: (time) => {
      //     if (this.pickerMinDate) {
      //       return (
      //         time.getTime() > this.pickerMinDate + this.day31 ||
      //         time.getTime() < this.pickerMinDate - this.day31
      //       );
      //     }
      //     return false;
      //   },
      // },
    };
  },
  mounted() {
    if( typeof this.a === 'number'){
      console.log('11');
    }else {
      console.log('2');
    }
  },
  methods: {

    baidu(){
      this.src = 'https://blog.csdn.net/u010227042/article/details/119839361?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-119839361-blog-88070050.235%5Ev40%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-119839361-blog-88070050.235%5Ev40%5Epc_relevant_anti_vip&utm_relevant_index=5'
      this.iframeWin.postMessage({
        cmd: 'getFormJson',
        params: {}
      }, '*')
    },
    changeMonth(value) {
      let date = new Date(value);
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let year = date.getFullYear();
      let startTime = year + "" + month + "01";
      let day = new Date(year, month, 0);
      let endTime = year + "" + month + "" + day.getDate();
      console.log(startTime, "startTime");
      console.log(endTime, "endTime ");
    },
  },
};
</script>
