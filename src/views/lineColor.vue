<template>
  <div>
    <div>
      <span>只能选择今天往后365天内的数据：</span>
      <el-date-picker
        v-model="SNData.date"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="changeTime"
      ></el-date-picker>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueDate: "",
      pickDate: "", //存储日期
      SNData: {
        date: "",
        enddate: "",
        model: "",
      },
      selectDate: "",
      createStartDate: "",
      createEndDate: "",
    };
  },
  methods: {
    changeTime() {
      if (this.SNData.date) {
        const numDays =
          (new Date(this.SNData.date[1]).getTime() - new Date(this.SNData.date[0]).getTime()) / (24 * 3600 * 1000);
        if (numDays > 31) {
          this.$message.error("日期范围超市");
          this.SNData.date = null;
          this.createStartDate = "";
          this.createEndDate = "";
        }
      } else {
        this.createStartDate = "";
        this.createEndDate = "";
      }
    },
  },
};
</script>
