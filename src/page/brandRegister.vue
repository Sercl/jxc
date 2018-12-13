<template>
  <div class="scroll">
    <scroll @beforeScroll="blur" ref="scroll" class="scroll-content">
      <template-page>
        <div slot="header" style="position: relative;">
          <div class="flex-h header-search">
            <img @click="onSubmit()" src="../assets/icon/search.png" alt="">
            <div style="width: 82%;">
              <input ref="inputBrand" @keyup.enter="onSubmit()" v-model="name" placeholder="请输入商标名称" type="text">
            </div>
          </div>

          <img width="100%" src="../assets/banner/brandRegister.png" alt="">
        </div>

        <div class="main" slot="main">
          <h3 class="title">● 商标的价值是什么呢？</h3>
          <p>
            &#12288;&#12288;商标是企业的无形资产，商标的价值多少，没有一个非常标准的判定。商标在投资或经营过程中作为资产的价值，即商标资产所含资本量的大小。是指其资本价值，而不是荣誉上的或主观上的价值。有哪些元素决定商标的价值多少？
          </p>
          <h5 class="sub-title">1、商标占知识产权的重要位置</h5>
          <p>
            &#12288;&#12288;商标的价值量是没有固定值的，也随着发展而不断变化。例如，在我国最早将“海尔”作为商标注册的是舒城县的一家工厂(该商标至今有效)，使“海尔”成为中国驰名商标的是海尔集团公司。不同的商标在不同的消费群体中享有各自的盛誉，同样具有自已价值。<br/>
            例如，贵州茅台素有国酒之称，用于宴请国宾、酬谢贵客，而寻常百姓杯中的“红星”二锅头则是大众名牌。同一商标在不同的状态下价值不同。<br/>
            例如，联想集团公司的“联想”商标从创立、发展到居国内计算机业第一位的过程中，“联想”商标的价值在不断变化，不同的阶段值量不等。
          </p>
          <h5 class="sub-title">2、商品声誉是决定商标价值的首位。</h5>
          <p>
            &#12288;&#12288;最初，商标的功能是表示商品的来源，区别不同的生产者。 在市场竞争的环境中，商标表示的是商品的质量，彰示的是商品的声誉。从消费者的角度来说，是想通过识别商标来选择厂商。从商标使用者的利益来说，是想让消费者通过识别商标来购买自已的产品。影响商标价值的因素很多，且不同的因素影响力不等，但商品的声誉是第一位的。
          </p>
          <h5 class="sub-title">3、企业运营影响商标价值。</h5>
          <p>
            &#12288;&#12288;商品的声誉来自生产它的企业，因此直接影响和最终决定商标价值的是企业的综合实力。例如，经历了320年历史变迁的“同仁堂”，始终传承“以诚为本”的商业道德，选真材实料，精工细制。消费者信任“同仁堂”，企业在积累信任的过程中生存发展。<br/>
            &#12288;&#12288;企业家必须把企业、商品、商标联系在一起向消费者进行推介，商标在现代企业管理中属于企业策划的范畴。商标在赢得消费者信任的同时，企业得到的是利润。商标是知产权重要成部分，是企业的无形资产。商标注册和运营是一门学问，企业应当给予重视。从商标起名—商标设计—商标注册—商标运营—商标保护等多个步骤，都必须高度重视和意识。</p>
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
      return {name: ''}
    },
    components: {TemplatePage,Scroll},
    mounted() {
      this.$refs.scroll.refresh()
    },
    methods: {
      blur(){
        this.$refs.inputBrand.blur()
      },
      onSubmit() {
        if(this.name===''){
          this.$wu.showToast('请输入商标名称')
          return
        }
        this.$api.caseSearch({case_name:this.name}).then((res)=>{
          if(res.code === 200) {
            if(res.result.length){
              this.$router.push({path:'/case-Details',query:{guid:res.result}})
            }else{
              this.$wu.showToast('无搜索结果')
            }
          }else{
            this.$wu.showToast(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/commonPage.styl"
  .title
    text-align left
  .header-search
    width 88%
    position absolute
    left 0
    right 0
    top 54%
    margin auto
    border-radius 25px
    background-color #FFF
    img
      margin 8px
      width 20px
      height 20px
    input
      width 100%
      height 95%
      font-size 1.17em
      border 0
      outline none
      cursor pointer
</style>
