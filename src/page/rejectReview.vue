<template>
  <div class="scroll">
    <scroll ref="scroll" class="scroll-content">
      <template-page>
        <img slot="header" width="100%" src="../assets/banner/rejectReview.png" alt="">
        <div class="main" slot="main">
          <h3 class="title">商标驳回复审</h3>
          <h5 class="sub-title">商标驳回分为：绝对驳回和相对驳回</h5>
          <p>
            绝对驳回是指该商标申请违反了《商标法》第十条规定，即不得作为商标注册的标志不能注册为商标使用。如:"中国"、"英国"、"上海"、"中南海"、"国徽"、"遵义会议"、"八一"、"中正"、"找死"、"王八蛋"等；
          </p>
          <p>
            相对驳回是指申请商标与在先申请或在先注册的商标在整体上或者部分上存在近似。
          </p>
        </div>
      </template-page>
    </scroll>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import TemplatePage from '../components/commonPage'
  import Scroll from '../components/base/scroll'
  import vFooter from '../components/pageFooter'
  export default {
    name: "",
    data() {
      return {}
    },
    components: {TemplatePage,Scroll,vFooter},
    mounted() {
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/commonPage.styl"
</style>
