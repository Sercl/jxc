<template>
  <div class="scroll">
    <scroll ref="scroll" class="scroll-content">
      <template-page>
        <img slot="header" width="100%" src="../assets/banner/brandObjection.png" alt="">
        <div class="main" slot="main">
          <h3 class="title">商标异议</h3>
          <h5 class="sub-title">商标异议的都作用：</h5>
          <p>
            商标异议是指在先权利人、利害关系人认为商标局初步审定予以公告的商标不具有合法性，在公告之日起3个月内向商标局提出不应给予以注册的意见。
          </p>
          <p>
            商标异议程序的设置，旨在加强社会公众对商标审查工作的监督，减少审查工作的失误，强化商标意识，给予注册在先的商标权人及其他利害关系人一次保护自身权益的机会，杜绝权利冲突后患的发生。异议人可以是注册商标权人，商标注册申请在先的申请人等利害关系人，也可以是任何其他公民或法人。
          </p>
          <h5 class="sub-title">异议的内容，主要有两种：</h5>
          <p>
            一是与已注册的商标相同或近似;
          </p>
          <p>
            二是认为该商标违反禁用条款。
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
