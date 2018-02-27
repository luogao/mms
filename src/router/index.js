import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Login from '@/page/Login'

import { DataBackup, DataRecovery } from '@/page/data'
import { UserRole, UserChange } from '@/page/user'
import { SystemMaintenance, SystemUpgrade } from '@/page/system'
import { Retail, Wholesale } from '@/page/sale'
import { ProductApply, ProductSearch } from '@/page/product'
import { PurchaseApply, PurchaseSearch } from '@/page/purchase'
import { OuterApply, OuterSearch, InApply, InSearch, GoodsSearch } from '@/page/goods'

Vue.use(Router)

export default new Router({
    base: '/mms/',
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
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
        }]
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }]
})