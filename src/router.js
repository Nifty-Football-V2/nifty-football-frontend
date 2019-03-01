import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import About from './views/About.vue';
// import Account from './views/Account.vue';
// import Play from './views/Play.vue';
// import Marketplace from './views/Marketplace.vue';
// import Leaderboards from './views/Leaderboards.vue';
// import HeadToHead from './views/HeadToHead.vue';
// import Team from './views/Team.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: About
        // },
        // {
        //     path: '/play',
        //     name: 'play',
        //     component: Play
        // },
        // {
        //     path: '/headtohead',
        //     name: 'headtohead',
        //     component: HeadToHead
        // },
        // {
        //     path: '/marketplace',
        //     name: 'marketplace',
        //     component: Marketplace
        // },
        // {
        //     path: '/leaderboards',
        //     name: 'leaderboards',
        //     component: Leaderboards
        // },
        // {
        //     path: '/account',
        //     name: 'account',
        //     component: Account
        // },
        // {
        //     path: '/team',
        //     name: 'team',
        //     component: Team
        // }
    ]
});
