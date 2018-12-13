import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const businessItem = [
  {
    path: '/',
    component: ()=>import('../page/home/index'),
    meta: {
      title: '金信诚国际'
    }
  },
  {
    path: '/telephone',
    component: ()=>import('../page/telephone'),
    meta: {
      title: '400电话'
    }
  },
  {
    path: '/brand-register',
    component: ()=>import('../page/brandRegister'),
    meta: {
      title: '商标注册'
    }
  },
  {
    path: '/brand-objection',
    component: ()=>import('../page/brandObjection'),
    meta: {
      title: '商标异议'
    }
  },
  {
    path: '/copyright-register',
    component: ()=>import('../page/copyrightRegister'),
    meta: {
      title: '版权登记'
    }
  },
  {
    path: '/brand-design',
    component: ()=>import('../page/brandDesign'),
    meta: {
      title: '商标设计'
    }
  },
  {
    path: '/goods-code',
    component: ()=>import('../page/goodsCode'),
    meta: {
      title: '商品条码'
    }
  },
  {
    path: '/invalid-declare',
    component: ()=>import('../page/invalidDeclare'),
    meta: {
      title: '无效宣告'
    }
  },
  {
    path: '/reject-review',
    component: ()=>import('../page/rejectReview'),
    meta: {
      title: '驳回复审'
    }
  },
  {
    path: '/case-details',
    component: ()=>import('../page/caseDetails'),
    meta: {
      title: '成功案例'
    }
  }
]
export default new Router({
  routes: [
    ...businessItem
  ]
})
