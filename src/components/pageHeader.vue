<template>
  <div>
    <div class="flex-h common-header">
      <div @click="onBack()" class="header-back">
        < 返回
      </div>
      <div class="header-title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "pageHeader",
    data() {
      return {title: ''}
    },
    components: {},
    created(){
    },
    methods: {
      onBack(){
        this.$router.go(-1)
      }
    },

    watch: {
      $route() {
        this.title=document.title
      }
    }
  }
</script>

<style scoped lang="stylus">
  .common-header
    padding 0 15px
    height 50px
    background-color #389ffe
    color #FFFFFF
    align-items center
    .header-title
      font-size: 20px;
      width: 100%;
      text-align: center;
      margin-left: -40px;
    .header-back
      white-space:nowrap;
</style>
