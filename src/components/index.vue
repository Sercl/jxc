<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content">
      <div v-if="bannerList.length" class="slider-wrapper">
        <slider>
          <div v-for="item in bannerList" :key="item">
            <img class="needsclick" @load="loadImage" :src="item" alt="">
          </div>
        </slider>
      </div>
      <div class="recommend-list">
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
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from './base/slider/slider'
  import Scroll from './base/scroll/scroll'
  export default {
    data() {
      return {
        bannerList: [
          require('../assets/banner.png'),
          require('../assets/banner.png'),
          require('../assets/banner.png'),
          require('../assets/banner.png')
        ]
      }
    },
    components: {
      Slider,Scroll
    },
    created() {

    },
    methods: {
      loadImage() {
        //是否第一次调用，避免多次调用浪费资源。只要有一个图片加载即可撑开高度
        if (!this.checkLoaded) {
          //当图片加载成功时候调用组件内部的refresh重新计算高度
          this.$refs.scroll.refresh()
          this.checkLoaded = true

        }
      }
    }
  }
</script>

<style scoped lang="stylus">

  .label
    background-color: #3c9efd
    border-radius: 5px
    position: fixed
    top: 34%
    left: 7%
    right: 7%
    height: 110px
    .label2
      height 80%
      background-color: #ffffff
      border-radius: 5px
      padding  0 7px 0 7px
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

      .label3 >div
        text-align center
        line-height 27px
        height 28px
        width 155px
        margin-top 4px
        background-color #2f9bfe
        border-radius: 5px
      .label3 >div >span
        font-family:'YouYuan';
        font-size 17px
        color: #ffffff
  .recommend
    position: fixed
    width: 100%
    top: 0px
    margin-left: -8px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>