import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  },
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/info',
    name: 'Shop',
    meta: { title: '店铺管理', icon: 'shop' },
    children: [
      {
        path: 'info',
        name: 'ShopInfo',
        component: () => import('@/views/table/index'),
        meta: { title: '店铺信息' }
      },
      {
        path: 'paymode',
        name: 'Paymode',
        component: () => import('@/views/tree/index'),
        meta: { title: '支付方式' }
      },
      {
        path: 'sales',
        name: 'Sales',
        component: () => import('@/views/table/index'),
        meta: { title: '公告促销' }
      },
      {
        path: 'distribution',
        name: 'Distribution',
        component: () => import('@/views/tree/index'),
        meta: { title: '配送信息' }
      },
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('@/views/table/index'),
        meta: { title: '会员反馈' }
      },
      {
        path: 'members',
        name: 'Members',
        component: () => import('@/views/table/index'),
        meta: { title: '会员列表' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/manager',
    name: 'Order',
    meta: { title: '店铺订单', icon: 'order' },
    children: [
      {
        path: 'manager',
        name: 'OrderManager',
        component: () => import('@/views/table/index'),
        meta: { title: '订单管理' }
      },
      {
        path: 'addOrder',
        name: 'AddOrder',
        component: () => import('@/views/tree/index'),
        meta: { title: '门店加单(会员)' }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/tree/index'),
        meta: { title: '购物车' }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/list',
    name: 'Goods',
    meta: { title: '商品管理', icon: 'goods' },
    children: [
      {
        path: 'platformGoodsList',
        name: 'PlatformGoodsList',
        component: () => import('@/views/table/index'),
        meta: { title: '平台商品列表(SPU)' }
      },
      {
        path: 'shopGoodsList',
        name: 'shopGoodsList',
        component: () => import('@/views/tree/index'),
        meta: { title: '店铺所有商品列表' }
      },
      {
        path: 'goodsSort',
        name: 'GoodsSort',
        component: () => import('@/views/tree/index'),
        meta: { title: '商品分类' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'nested',
    meta: {
      title: 'nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'menu1',
        meta: { title: 'menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'menu1-1',
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'menu1-2',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'menu1-2-1',
                meta: { title: 'menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'menu1-2-2',
                meta: { title: 'menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'menu1-3',
            meta: { title: 'menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

