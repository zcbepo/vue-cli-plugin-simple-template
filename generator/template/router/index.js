import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Layout from '../layout/index'
import NotFound from '../views/error/NotFound'
import storage from '../utils/storage'

Vue.use(VueRouter)

export const mainRoutes = [
    {
        path: '/',
        name: 'menu1',
        redirect: '/menu1/page1',
        component: Layout,
        meta: {
            title: 'menu1',
        },
        children: [
            {
                path: '/menu1/page1',
                name: 'page1',
                component: () => import('../views/Page1'),
                meta: {
                    title: 'page1'
                }
            }
        ]
    },
    {
        path: '/menu2',
        name: 'menu2',
        redirect: '/menu2/page2',
        component: Layout,
        meta: {
            title: 'menu2'
        },
        children: [
            {
                path: '/menu2/page2',
                name: 'page2',
                component: () => import('../views/Page2'),
                meta: {
                    title: 'page2'
                }
            }
        ]
    },
]

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'login'
        }
    },
    ...mainRoutes,
    {
        path: '*',
        name: '404',
        component: NotFound,
        meta: {
            title: 'NotFound'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

router.beforeEach((to, from, next) => {
    const token = storage.get(storage.keys.TOKEN)
    if (!token && to.path !== '/login') {
        next({path: '/login'})
    } else {
        next()
    }
    document.title = to.meta.title || "simple-template"
})

export default router