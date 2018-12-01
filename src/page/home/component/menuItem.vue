<template>
  <div>
    <div class="flex-z items">
      <div class="flex-h items-list" v-for="items in item" :key="items">
        <div @click="toPage(item.route)" class="flex-z items-item" v-for="(item) in items"
             :key="item">
          <img width="30px" height="30px" :src=item.img>
          <span style="margin-top: 10px">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        item: [
          [
            {
              route: 'brand-register',
              img: require('../../../assets/icon/sbzc.png'),
              name: '商标注册'
            },
            {
              route: 'brand-design',
              img: require('../../../assets/icon/sbsj.png'),
              name: '商标设计'
            },
            {
              route: 'reject-review',
              img: require('../../../assets/icon/bhfs.png'),
              name: '驳回复审'
            },
            {
              route: 'brand-objection',
              img: require('../../../assets/icon/sbyy.png'),
              name: '商标异议'
            }
          ],
          [
            {
              route: 'invalid-declare',
              img: require('../../../assets/icon/wxxg.png'),
              name: '无效宣告'
            },
            {
              route: 'copyright-register',
              img: require('../../../assets/icon/bqdj.png'),
              name: '版权登记'
            },
            {
              route: 'goods-code',
              img: require('../../../assets/icon/sptm.png'),
              name: '商品条码'
            },
            {
              route: 'telephone',
              img: require('../../../assets/icon/400.png'),
              name: '400 电话'
            }
          ]
        ]
      }
    },
    component: {},
    methods: {
      toPage(route) {
        this.$router.push({path: '/' + route})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .items
    margin 20px 20px 0 20px
    font-family 'YouYuan'

  .items-item
    align-items center

  .items-list
    justify-content space-around
    margin-bottom 20px;
</style>