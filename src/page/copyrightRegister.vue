<template>
  <div class="scroll">
    <scroll ref="scroll" class="scroll-content">
      <template-page>
        <img slot="header" width="100%" src="../assets/banner/copyrightRegister.png" alt="">
        <div class="main" slot="main">
          <h3 class="title">版权登记</h3>
          <h5 class="sub-title">保护对象：</h5>
          <ol style="list-style: none">
            <li>(一) 文字作品；</li>
            <li>(二) 口述作品；</li>
            <li>(三) 音乐、戏剧、曲艺、舞蹈、杂技艺术作品；</li>
            <li>(四) 美术、建筑作品；</li>
            <li>(五) 摄影作品；</li>
            <li>(六) 电影作品以类似摄制电影的方法创作的作品；</li>
            <li>(七) 工程设计图、产品设计图、地图、示意图等图形作品和模型作品；</li>
            <li>(八) 计算机软件；</li>
            <li>(九) 法律、行政法规规定的其他作品；</li>
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
