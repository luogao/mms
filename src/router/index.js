import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import OuterApply from '@/components/OuterApply'
import OuterSearch from '@/components/OuterSearch'
import InApply from '@/components/InApply'
import InSearch from '@/components/InSearch'
import GoodsSearch from '@/components/GoodsSearch'
import ProductApply from '@/components/ProductApply'
import ProductSearch from '@/components/ProductSearch'
import PurchaseApply from '@/components/PurchaseApply'
import PurchaseSearch from '@/components/PurchaseSearch'
import Retail from '@/components/Retail'
import Wholesale from '@/components/Wholesale'
import DataBackup from '@/components/DataBackup'
import DataRecovery from '@/components/DataRecovery'
import UserRole from '@/components/UserRole'
import UserChange from '@/components/UserChange'
import SystemMaintenance from '@/components/SystemMaintenance'
import SystemUpgrade from '@/components/SystemUpgrade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/outer_apply',
          name: 'OuterApply',
          component: OuterApply
        }, {
          path: '/outer_search',
          name: 'OuterSearch',
          component: OuterSearch
        }, {
          path: '/in_apply',
          name: 'InApply',
          component: InApply
        }, {
          path: '/in_search',
          name: 'InSearch',
          component: InSearch
        }, {
          path: '/goods_search',
          name: 'GoodsSearch',
          component: GoodsSearch
        }, {
          path: '/product_apply',
          name: 'ProductApply',
          component: ProductApply
        }, {
          path: '/product_search',
          name: 'ProductSearch',
          component: ProductSearch
        }, {
          path: '/purchase_apply',
          name: 'PurchaseApply',
          component: PurchaseApply
        }, {
          path: '/purchase_search',
          name: 'PurchaseSearch',
          component: PurchaseSearch
        }, {
          path: '/retail',
          name: 'Retail',
          component: Retail
        }, {
          path: '/wholesale',
          name: 'Wholesale',
          component: Wholesale
        }, {
          path: '/data_backup',
          name: 'DataBackup',
          component: DataBackup
        }, {
          path: '/data_recovery',
          name: 'DataRecovery',
          component: DataRecovery
        }, {
          path: '/user_role',
          name: 'UserRole',
          component: UserRole
        }, {
          path: '/user_change',
          name: 'UserChange',
          component: UserChange
        }, {
          path: '/system_maintenance',
          name: 'SystemMaintenance',
          component: SystemMaintenance
        }, {
          path: '/system_upgrade',
          name: 'SystemUpgrade',
          component: SystemUpgrade
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
