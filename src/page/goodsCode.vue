<template>
  <div class="scroll">
      <scroll ref="scroll" class="scroll-content">
        <template-page>
          <img slot="header" width="100%" src="../assets/banner/goodsCode.png" alt="">
          <div class="main" slot="main">
            <h3 class="title">商品条码</h3>
            <h5 class="sub-title">一、商品条码概念：</h5>
            <p>
              商品条码是由国际物品编码协会（GPI）规定的，用于表示零售商品、非零售商品、物流单元、参与方位置等代码的条码标识。具体地说，条码是由一组规则排列的条、空组合及其对应的供人识别字符组成的标记。商品条码中，其条、空组合部分称为条码符号，其对应的供人识别字符也就是该条码符号所表示的商品标识代码。条码符号具有操作简单、信息采集速度快、信息采集量大、可靠性高、成本低廉等特点。
            </p>
            <h5 class="sub-title">二、作用与意义：</h5>
            <p>
              商品条形码的诞生极大地方便了商品流通，现代社会已离不开商品条形码。据统计我国已有50万种产品使用了国际通用的商品条形码。我国加入世贸组织后，企业在国际舞台上必将赢得更多的活动空间。要与国际惯例接轨，适应国际经贸的需要，企业更不能慢待商品条形码。
            </p>
            <p>
              商品条码是实现商业现代化的基础，是商品进入超级市场、POS扫描商店的入场券。在扫描商店，当顾客采购商品完毕在收银台前付款时，收银员只要拿着带有条码的商品在装有激光扫描器的台上轻轻掠过，就把条码下方的数字快速输入电子计算机，通过查询和数据处理，机器可立即识别出商品制造厂商、名称、价格等商品信息并打印出购物清单。这样不仅可以实现售货、仓储和订货的自动化管理，而且通过产、供、销信息系统，使销售信息及时为生产厂商所掌握。世界上POS店正以惊人的速度发展。事实上，条码已成为商品进入超市的必备条件，商品条码化是企业提高市场竞争力，扩大外贸出口的必由之路，是实现生产流通环节自动化的前提条件，同时也是制造商适时调整产品结构的技术保障。我国许多城市已有文件规定，所有无条码商品不得进入超市。
            </p>
          </div>
        </template-page>
      </scroll>

    </div>
</template>

<script type="text/ecmascript-6">
  import TemplatePage from 'components/commonPage'
  import Scroll from 'base/scroll'
  import PageHeader from 'components/pageHeader'
  export default {
    name: "",
    data() {
      return {}
    },
    components: {PageHeader, TemplatePage,Scroll},
    mounted() {
      this.$refs.scroll.refresh()
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/commonPage.styl"

</style>
