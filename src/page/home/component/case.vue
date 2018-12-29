<template>
  <div>
    <div style="margin: 25px">
      <div style="margin-top:10px">
        <div class="flex-h" style="align-items: flex-end;justify-content: space-between">
          <div class="flex-h item-title">
            <img class="img" src="../../../assets/icon/cgal.png">
            <div class="title">成功案例</div>
            <div class="title2">分享</div>
          </div>
          <div class="title3">More >></div>
        </div>
        <div style="margin-top:10px" class="flex-h case-list">
          <div v-for="(items, index) in caseList" :key="index">
            <div class="content-title">{{items.name}}</div>
            <div class="flex-z">
              <div class="case-item"
                   style="white-space:nowrap;font-size: 12px;-webkit-transform: scale(0.8);"
                   v-for="(value, num) in items.list" :key="num">
                <img class="icon-img" src="../../../assets/yd.png" width="4" height="4">
                <span class="span text-way" @click="_toCaseDetails(value.case_guid)">{{value.case_title.substr(0,8)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top:25px">
        <div class="flex-h item-title">
          <img class="img" src="../../../assets/icon/wsm.png">
          <div class="title">为什么</div>
          <div class="title2">选择我们</div>
        </div>
        <div class="flex-z">
          <div v-for="(item,index) in why" :key="index" class="flex-h"
               style="align-items: center;">
            <div class="icon-way">{{index+1}}</div>
            <div class="text-way">{{item}}</div>
          </div>
        </div>
      </div>
      <div style="margin-top:25px">
        <div class="flex-h item-title">
          <img class="img" src="../../../assets/icon/cgkh.png">
          <div class="title">成功客户</div>
          <div class="title2">群体</div>
        </div>
        <!--<div class="flex-z">-->
        <!--<div class="auto-move">-->
        <!--<div class="flex-h customer" v-for="(item,index) in caseLogo" :key="index">-->
        <!--<div v-for="(value,ind) in item" :key="ind">-->
        <!--<img width="40px" height="40px" :src="value" alt="">-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <!--</div>-->
      </div>
    </div>
    <div style="margin: 25px;padding:0px" class="sucdata">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in caseLogo" :key="index"
                      class="swiper-slide red-slide swiper-slide-prev">
          <div style="display: flex; flex-wrap: nowrap;justify-content: flex-start;">
            <div v-for="(value,ind) in slide" :key="ind"
                 style="width: 50px;margin: 6px 0 6px 12px;">
              <img width="40px" height="40px" :src="value" alt="">
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in caseLogoData" :key="index"
                      class="swiper-slide red-slide swiper-slide-prev">
          <div style="display: flex; flex-wrap: nowrap;justify-content: flex-start;">
            <div v-for="(value,ind) in slide" :key="ind"
                 style="width: 50px;margin: 6px 0 6px 12px;">
              <img width="40px" height="40px" :src="value" alt="">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <v-footer></v-footer>
    <div></div>

  </div>
</template>

<script type="text/ecmascript-6">
  import VFooter from 'components/pageFooter'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "Case",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 1,
          speed: 20000,
          freeMode: true,
          autoplayDisableOnInteraction: false
        },
        caseList: [
          {
            name: '复审成功案件', list: []
          },
          {
            name: '异议成功案件', list: []
          },
          {
            name: '无效成功案件', list: []
          }
        ],
        caseLogo: [
          [require('../../../assets/icon/kh/1.png'),
            require('../../../assets/icon/kh/2.png'),
            require('../../../assets/icon/kh/3.png'),
            require('../../../assets/icon/kh/4.png'),
            require('../../../assets/icon/kh/5.png'),
            require('../../../assets/icon/kh/6.png'),
            require('../../../assets/icon/kh/7.png')],
        ],
        caseLogoData: [
          [require('../../../assets/icon/kh/8.png'),
            require('../../../assets/icon/kh/9.png'),
            require('../../../assets/icon/kh/10.png'),
            require('../../../assets/icon/kh/11.png'),
            require('../../../assets/icon/kh/12.png'),
            require('../../../assets/icon/kh/13.png'),
            require('../../../assets/icon/kh/14.png')]
        ],
        why: []
      }
    },
    components: {VFooter, swiper, swiperSlide},
    created() {
      this._getCaseList()
      this._getWhy()
    },
    methods: {
      _getCaseList() {
        this.$api.caseList({curr_page: 1, page_num: 15}).then(res => {
          if (res.code === 200) {
            let list = res.result
            for (let i in list) {
              switch (list[i].case_category) {
                case 1: {
                  if (this.caseList[0].list.length < 4) {
                    this.caseList[0].list.push(list[i])
                  }
                  break
                }
                case 2: {
                  if (this.caseList[1].list.length < 4) {
                    this.caseList[1].list.push(list[i])
                  }
                  break
                }
                case 3: {
                  if (this.caseList[2].list.length < 4) {
                    this.caseList[2].list.push(list[i])
                  }
                  break
                }
              }
            }
          } else {
            console.log(res.msg)
          }
          console.log(this.caseList)
        })
      },
      _getWhy() {
        this.$api.whyus().then(res => {
          if (res.code === 200) {
            this.why = res.result
          }
        })
      },
      _toCaseDetails(guid) {
        this.$router.push({path: '/case-Details', query: {guid: guid}})
      }
    }

  }
</script>

<style scoped lang="stylus">

  .item-title
    align-items flex-end

  .icon-img
    margin 0 5px 3px 4px

  .case-item
    margin-right 5px

  .title
    font-size 20px
    color #2f9bfe
    margin-right 5px

  .title2
    font-size 18px
    color #b1b1b1

  .title3
    font-size: 14px
    color #b1b1b1

  .content-title
    color #2f9bfe
    font-size 15px
    text-align center

  .img
    margin 0 5px 5px 0
    width 15px
    height 15px

  .case-list
    justify-content space-around

  .customer
    justify-content space-around

  .customer > div
    margin-right 5px
    margin-top 5px

  .foot
    background-color #3c3c3c

    .logo
      height 94px
      width 20%
      background-color #ffffff

    .logo > img
      width 50px
      padding 20px 14px 0px 13px

    .foot-text
      width 100%

    .foot-text > div
      margin 8px 12px 0 12px
      text-align left
      color #ffffff
      font-size 12px

  .text-way
    margin-top 10px
    font-size 12px
    color #bcbcbc

  .icon-way
    width 40px
    text-align center
    color #ffffff
    font-size 12px
    background-color #389ffe
    border-radius: 20px
    margin-right 5px

  .sucdata /deep/ .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  //设置/deep/  就可以无需去掉scoped
  .swiper-wrapper {
    transition-timing-function: linear !important;
  }

  .auto-move
    width 400%
    position absolute
    -webkit-animation 30s move infinite linear

  @-webkit-keyframes move
    0%
      left: 0
    100%
      left: -500px

  @keyframes move
    0%
      left: 0
    100%
      left: -500px
</style>
