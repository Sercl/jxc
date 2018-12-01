<template>
  <div class="scroll">
    <scroll ref="scroll" class="scroll-content">
      <template-page>
        <img slot="header" width="100%" src="../assets/400.png" alt="">
        <div class="main" slot="main">
          <h3 class="title">400电话</h3>
          <h5 class="sub-title">400电话的用途及优势有哪些？</h5>
          <ol>
            <li>全国统一400电话接入号，全面展现现代企业形象；</li>
            <li>400电话申请业务免开户、月租、选号费；</li>
            <li>企业搬迁，换人无需换电话号，更改呼叫号码即时生效；</li>
            <li>在我公司办理400电话可免费绑定20部电话，永不占线；</li>
            <li>外地客户拨打我公司办理的400电话免长途费；</li>
            <li>智能路由，按区域和时间段有选择性设置被叫电话；</li>
            <li>话务的来路与分析，让您轻松掌握全国销售布控；</li>
            <li>400电话可实现语音导航，让您的企业话务效率达到最高峰；</li>
          </ol>
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