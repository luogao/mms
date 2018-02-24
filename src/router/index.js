import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import OuterApply from '@/components/OuterApply'
import OuterSearch from '@/components/OuterSearch'

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
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
