<template>
  <div class="scroll">
    <scroll ref="scroll" class="scroll-content">
      <template-page>
        <img slot="header" width="100%" src="../assets/banner/invalidDeclare.png" alt="">
        <div class="main" slot="main">
          <h3 class="title">无效宣告</h3>
          <p>
            商标无效宣告是指商标注册后，如果存在不符合商标注册条件的情形，由商标局依职权宣告无效，或者经权利人向商标评审委员会请求，由商标评审委员会裁定是否宣告无效的制度。
          </p>
          <h5 class="sub-title">法条依据：</h5>
          <p>
            《商标法》第四十四条：已经注册的商标，违反本法第十条、第十一条、第十二条规定的，或者是以欺骗手段或者其他不正当手段取得注册的，由商标局宣告该注册商标无效；其他单位或者个人可以请求商标评审委员会宣告该注册商标无效。
          </p>
          <p>
            第四十五条：已经注册的商标，违反本法第十三条第二款和第三款、第十五条、第十六条第一款、第三十条、第三十一条、第三十二条规定的，自商标注册之日起五年内，在先权利人或者利害关系人可以请求商标评审委员会宣告该注册商标无效。对恶意注册的，驰名商标所有人不受五年的时间限制。
          </p>
          <h5 class="sub-title">注册商标无效情形：</h5>
          <p>1.商标局宣告注册商标无效（主动）<br/>
            已经注册的商标，违反《商标法》第十条、第十一条的禁止性规定，由商标局主动宣告无效。
          </p>
          <p>
            2.商标评审委员会宣告注册商标无效（被动）<br/>
            任何单位和个人认为注册商标违反违反《商标法》第十条、第十一条的禁止性规定可以向商标评审委员会提出无效申请；或者在先权利人、利害关系人认为该注册商标损害其在先权利，可以自商标注册之日起五年内，请求商标评审委员会宣告该注册商标无效。对恶意注册的，驰名商标所有人不受五年的时间限制。
          </p>
        </div>
      </template-page>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import TemplatePage from '../components/commonPage'
  import Scroll from '../components/base/scroll'
  export default {
    name: "",
    data() {
      return {}
    },
    components: {TemplatePage,Scroll},
    mounted() {
      this.$refs.scroll.refresh()
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/commonPage.styl"
</style>
