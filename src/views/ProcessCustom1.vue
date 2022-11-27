<template>
<div>
  <h4>带悬浮进度</h4>
  <br>
  <process-custom :percent="20"/>
  <br>
  <h4>不带悬浮</h4>
  <br>
  <process-custom2  :percent="10" :itemColor="'red'" :bgColor="'black'" :width="50" :cols="13"/>
  <br>
  <qiu/>
</div>
</template>

<script>
import ProcessCustom from "../components/ProcessCustom";
import ProcessCustom2 from "../components/ProcessCustom2";
import qiu from '../components/qiu'
export default {
  name: "ProcessCustom1",
  components: {ProcessCustom, ProcessCustom2,qiu}
}
</script>

<style scoped>

</style>
