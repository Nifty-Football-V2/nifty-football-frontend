import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Squad from './views/Squad.vue';
// import About from './views/About.vue';
// import Play from './views/Play.vue';
// import Marketplace from './views/Marketplace.vue';
// import Leaderboards from './views/Leaderboards.vue';
// import HeadToHead from './views/HeadToHead.vue';
import Team from './views/Team.vue';
import Card from './views/Card.vue';
import Buy from './views/Buy.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/buy',
            name: 'buy',
            component: Buy
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
        {
            path: '/squad',
            name: 'squad',
            component: Squad
        },
        {
            path: '/team',
            name: 'team',
            component: Team
        },
        {
            path: '/card/:tokenId',
            name: 'card',
            component: Card,
            props: true
        }
    ]
});
