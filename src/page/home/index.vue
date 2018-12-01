<template>
  <div style="top:0" class="scroll">
    <scroll ref="scroll"  class="scroll-content">
      <div>
        <div ref="banner" v-if="bannerList.length" class="slider-wrapper">
          <slider>
            <div v-for="item in bannerList" :key="item">
              <img class="needsclick" @load="loadImage()" :src="item" alt="">
            </div>
          </slider>
        </div>
        <div>
          <div class="label">
            <div class="label2">
              <div class="label3">
                <div><span>免费查询</span></div>
                <div><span style="font-family: Microsoft YaHei">400-6659378</span></div>
              </div>
              <div class="text-h">
                <div class="text-1">
                  |
                </div>
                <div class="text-2">
                  |
                </div>
              </div>
              <div class="label3">
                <div><span>加急申请</span></div>
                <div><span>当天申报</span></div>
              </div>
            </div>
          </div>
        </div>
        <!--输入框-->
        <div>
          <div class="input">
            <div class="w">
              <input class="iname" type="text" placeholder="请输入查询的商标名称" v-model="name">
            </div>
            <div class="flex-h w">
              <input class="itel" type="number" placeholder="请输入您的手机号" v-model="mobile">
              <div @click="onSubmit()" class="item-text">
                <div class="span">查询</div>
              </div>
            </div>
          </div>
        </div>
        <item-menu>
        </item-menu>
        <div ref="xbanner" v-if="xbannerList.length" class="slider-wrapper">
          <div style="height: 10px; background-color: #f2f3f9"></div>
          <slider>
            <div v-for="item in xbannerList" :key="item">
              <img class="needsclick" @load="loadImage()" :src="item" alt="">
            </div>
          </slider>
          <div style="height: 10px; background-color: #f2f3f9"></div>
        </div>
        <case></case>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider'
  import Scroll from 'base/scroll'
  import itemMenu from './component/menuItem'
  import Case from './component/case'

  export default {
    data() {
      return {
        bannerList: [
          require('../../assets/banner.png'),
          require('../../assets/banner.png'),
          require('../../assets/banner.png'),
          require('../../assets/banner.png')
        ],
        xbannerList: [
          require('../../assets/xbanner.png'),
          require('../../assets/xbanner.png'),
          require('../../assets/xbanner.png')
        ],
        name: '',
        mobile: '',
        num: 0
      }
    },
    components: {
      Slider, Scroll, itemMenu, Case
    },
    created() {

    },
    mounted() {
      this.$refs.scroll.refresh()
    },
    methods: {
      loadImage() {
        this.num += 1
        if (this.num === 5) {
          this.$refs.scroll.refresh()
        }
      },
      onSubmit() {
        if(this.name==='' || this.mobile===''){
          this.$wu.showToast('商标名称和手机号不能为空');
          return
        }
        this.$api.caseSearch({case_name:this.name,mobile:this.mobile}).then((res)=>{
          if(res.code === 200) {
            if(res.result.length){
              this.$router.push({path:'/caseDetails',query:{guid:res.result}})
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

<style scoped lang="stylus">

  .input
    display flex
    flex-direction row
    justify-content center
    space-around
    width 80%
    margin: 0 20px 0 20px
    .w
      width 50%
    .item-text
      display: flex;
      align-items: center;
      font-family 'YouYuan'
      color snow
      justify-content center
      background-color #ff9a00
      width 30%
      height 127%
      .span
        font-size 8px
    .iname
      width 100%
      height 100%
      font-size 8px
    .itel
      width 70%
      height 100%
      font-size 8px

  .label
    background-color: #3c9efd
    border-radius: 5px
    margin: 20px;
    height: 110px
    .label2
      height 80%
      background-color: #ffffff
      border-radius: 5px
      padding 0 7px 0 7px
      box-shadow: 2px 2px 19px #888888
      display flex
      flex-direction row
      justify-content space-around
      align-items center
      .text-h
        color #dddddd
        font-size 17px
      .text-2
        margin-top 15px

      .label3 > div
        display flex
        justify-content center
        align-items center
        height 28px
        width 130px
        margin-top 4px
        background-color #2f9bfe
        border-radius: 5px
      .label3 > div > span
        font-family: 'YouYuan';
        font-size 17px
        color: #ffffff
</style>