<template>
  <div class="foot flex-h">
    <div style="width: 10%"></div>
    <div class="logo"><img src="../assets/icon/logo.png" alt=""></div>
    <div class="foot-text">
      <div>
        公司名称：北京金信诚国际知识产权代理有限公司<br/>
        公司地址：北京市西城区马连道6号华睦大厦1108室<br/>
        联系电话：400-6659378 010-65420923
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name:'footers',
    data() {
      return {}
    },
    component: {},
  }
</script>

<style scoped lang="stylus">
  .foot
    background-color #3c3c3c
    .logo
      height 94px
      width 20%
      background-color #ffffff
    .logo >img
      width 50px
      padding 20px 14px 0px 13px
    .foot-text
      width 100%
    .foot-text >div
      margin 8px 12px 0 12px
      text-align left
      color #ffffff
      font-size 12px
</style>