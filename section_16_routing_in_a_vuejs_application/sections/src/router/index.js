import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Header from '../components/Header.vue';

const User = resolve => {
  require.ensure(['../components/user/User.vue'], () => {
      resolve(require('../components/user/User.vue'));
  })
};
const UserStart = resolve => {
    require.ensure(['../components/user/UserStart.vue'], () => {
        resolve(require('../components/user/UserStart.vue'));
    })
};
const UserEdit = resolve => {
    require.ensure(['../components/user/UserEdit.vue'], () => {
        resolve(require('../components/user/UserEdit.vue'));
    })
};
const UserDetail = resolve => {
    require.ensure(['../components/user/UserDetail.vue'], () => {
        resolve(require('../components/user/UserDetail.vue'));
    })
};

/* import User from '../components/user/User.vue';
import UserStart from '../components/user/UserStart.vue';
import UserDetail from '../components/user/UserDetail.vue';
import UserEdit from '../components/user/UserEdit.vue'; */

Vue.use(VueRouter);

const routes = [
    { path: '/', components: {
        default: Home,
            'header-top': Header
        }},
    { path: '/user', components: {
        default: User,
            'header-bottom': Header,
        },
        props: true, children: [
            { path: '', component: UserStart},
            { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('inside route setup');
                    next();
                }},
            { path: ':id/edit', component: UserEdit, name: 'userEdit'},
        ] },
    { path: '/redirect-me', redirect: '/user'},
    { path: '*', redirect: '/'}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            return savedPosition;
        }
        if(to.hash){
            return { selector: to.hash }
        }
        return {x: 0, y: 0};
    },
});

router.beforeEach((to,from, next) =>{
    console.log('global beforeEach');
    next();
});

export default router;
