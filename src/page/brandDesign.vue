<template>
  <div class="scroll">
    <scroll ref="scroll" class="scroll-content">
      <template-page>
        <img slot="header" width="100%" src="../assets/banner/brandDesign.png" alt="">
        <div class="main" slot="main">
          <h3 class="title">商标设计</h3>
          <div class="content flex-z">
            <div class="content-tle">
              <div>仅官方可见，请放心填写</div>
              <div class="flex-h content-input">
                <input v-model="mobile" type="Number" placeholder="手机号码（用于专业顾问与您联系）">
              </div>
            </div>
            <div>
              <input style="height: 30px;" v-model="name" type="text" placeholder="您的称呼">
            </div>
            <div @click="onSubmit()" class="content-button">预约咨询</div>
          </div>
        </div>
      </template-page>
    </scroll>
    <div class="footers">
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
      return {
        name: '',
        mobile: ''
      }
    },
    components: {TemplatePage,Scroll,vFooter},
    mounted() {
      this.$refs.scroll.refresh()
    },
    methods: {
      onSubmit(){
        if(this.name==='' || this.mobile===''){
          this.$wu.showToast('手机号和称呼不能为空')
          return
        }
        this.$api.userSubscribe({user_name: this.name,user_mobile: this.mobile}).then((res)=>{
          if(res.code === 200) {
            this.$wu.showToast(res.msg)
          }else{
            this.$wu.showToast(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  ol
    margin 0 0 30px -24px
    font-size 12px
  li
    margin-top 10px
  .main
    padding 0 30px 0 30px
  .title
    color #3c9efd
    text-align center
  .sub-title
    color #389ffe
  .content
    text-align center
    font-size 12px
    margin-top -20px
    input
      height 25px
      width 98.5%
    .content-tle >div
      /*align-items: center*/
      background-color #389ffe
      color #FFF
    .content-button
      border-radius 20px
      background-color #389ffe
      color #FFF
      font-size 16px
      margin 18px 18% 18px 18%
      height 33px
      line-height 31px
    .content-input >div
      font-size 20px
      margin 0 0 -5px -9px
      color red
      background-color #FFF
  .content >div
    margin-top 18px
  .footers
    position absolute
    bottom 0
</style>