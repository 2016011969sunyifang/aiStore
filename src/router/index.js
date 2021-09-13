import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/home'),
    redirect: '/index',
    children: [{
        path: '/index',
        name: 'index',
        component: () => import('../views/index'),
        meta: {
            pageTitle: '商城首页'
        }
    }, ]
},{
    path: '/goodList',
    name: 'goodList',
    component: () => import('../views/index/goodList'),
    meta: {
        pageTitle: '商品列表'
    }
},]

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    console.log(to);
    if (to.meta?.pageTitle) {
      document.title = to.meta.pageTitle
    }
    next()
  })
export default router