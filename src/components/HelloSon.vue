<template>
  <div>
    <h2>son</h2>
    vuex数据:{{$store.state.sum}}
    vuex数据:{{$store.state.menu}}
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted () {
    this.$bus.$on('message', res => {
      console.log (res, 'oooooos')
    })
  },
  methods: {},
};
</script>
