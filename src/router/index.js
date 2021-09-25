import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
        meta: {
            authRequired: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {

    const isLogged = store.state.user.loggedIn;
    const authRequired = to.matched.some(record => record.meta.authRequired);

    if (authRequired && !isLogged){
        next({ name: 'Login' })
    } else if ((!authRequired && isLogged) && (to.name === 'Login' || to.name === 'Register')){
        next({ name: 'Admin' })
    } else {
        next()
    }
})

export default router
