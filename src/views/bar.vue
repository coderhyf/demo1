<template>
  <el-date-picker
    v-model="value1"
    type="daterange"
    start-placeholder="开始日期"
    range-separator="至"
    end-placeholder="结束日期"
    value-format="yyyy-MM-dd"
    :picker-options="pickerOptions1"
  ></el-date-picker>
</template>
<script>
export default {
  name: "",
  data() {
    return {
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
};
</script>
