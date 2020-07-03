import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../Layout/AppMain'
import Login from '../views/Login'
import { localStorageKeys, localStorageUtils } from '../utils/localstorage'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'AppMain',
    redirect: '/page1',
    component: AppMain,
    children: [
      {
        path: '/page1',
        name: 'Page1',
        component: () => import('../views/Page1')
      },
      {
        path: '/page2',
        name: 'Page2',
        component: () => import('../views/Page2')
      },
      {
        path: '/page3',
        name: 'Page3',
        component: () => import('../views/Page3')
      },
      {
        path: '/page4',
        name: 'Page4',
        component: () => import('../views/Page4')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorageUtils.get(localStorageKeys.token)
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      //Todo handle permission
      next()
    }
  } else {
    if (to.path !== '/login') {
      next({
        name: 'Login',
        params: {
          redirect: to.path
        }
      })
    } else {
      next()
    }
  }
})

export default router
