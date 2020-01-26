import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter)
import Layout from '@/components/layout.vue'
export default new VueRouter ({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index')
        },
        {
          path: '/404',
          name: '404',
          component: () => import('@/views/404')
        },
      ]
    },
    {
      path: '*',
      redirect: '/404',
      component: () => import('@/views/404')
    }
  ],
  scrollBehavior: () => ({
    y: 0
  })
})
