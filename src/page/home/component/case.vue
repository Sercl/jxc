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
          <div v-for="items in caseList" :key="items">
            <div class="content-title">{{items.name}}</div>
            <div class="flex-z">
              <div @click="_toCaseDetails(item.case_guid)" class="case-item" style="white-space:nowrap;font-size: 12px;-webkit-transform: scale(0.8);" v-for="item in items.list" :key="item">
                <img class="icon-img" src="../../../assets/yd.png" width="4" height="4">
                <span class="span text-way">{{item.case_title.substr(0,8)}}</span>
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
          <div v-for="(item,index) in why" :key="item" class="flex-h" style="align-items: center;">
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
        <div class="flex-z">
          <div class="flex-h customer" v-for="items in caseLogo" :key="items">
            <div v-for="item in items" :key="item">
              <img width="40px" height="40px" :src="item" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
    <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VFooter from 'components/pageFooter'
  export default {
    name: "",
    data() {
      return {
        caseList: [
          {
            name:'复审成功案件',list:[]
          },
          {
            name:'异议成功案件',list:[]
          },
          {
            name:'无效成功案件',list:[]
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
          [require('../../../assets/icon/kh/8.png'),
            require('../../../assets/icon/kh/9.png'),
            require('../../../assets/icon/kh/10.png'),
            require('../../../assets/icon/kh/11.png'),
            require('../../../assets/icon/kh/12.png'),
            require('../../../assets/icon/kh/13.png'),
            require('../../../assets/icon/kh/14.png')],
        ],
        why: []
      }
    },
    components: {VFooter},
    created(){
      this._getCaseList()
      this._getWhy()
    },
    methods: {
      _getCaseList(){
        this.$api.caseList({curr_page:1,page_num:15}).then(res=>{
          if(res.code===200){
            let list = res.result
            for(let i in list){
              switch (list[i].case_category) {
                case 1:{
                  this.caseList[0].list.push(list[i])
                }break
                case 2:{
                  this.caseList[1].list.push(list[i])
                }break
                case 3:{
                  this.caseList[2].list.push(list[i])
                }break
              }
            }
          }else{
            console.log(res.msg)
          }
        })
      },
      _getWhy(){
        this.$api.whyus().then(res=>{
          if (res.code===200){
            this.why=res.result
          }
        })
      },
      _toCaseDetails(guid){
        this.$router.push({path: '/case-Details', query: {guid:guid}})
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
  .customer >div
    margin-right 5px
    margin-top 5px
  .foot
    background-color #3c3c3c
    .logo
      height 94px
      width 20%
      background-color #ffffff
    .logo >img
      width 50px
      padding 20px 14px 0px 13px
    .foot-text
      width 100%
    .foot-text >div
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
</style>