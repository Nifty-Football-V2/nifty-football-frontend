import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Squad from './views/Squad.vue';
import Rankings from './views/Rankings.vue';
import Team from './views/Team.vue';
import Buy from './views/Buy.vue';
import About from './views/About.vue';
import Activity from './views/Activity.vue';
import League from "./views/League";
import Terms from "./views/Terms";

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/buy',
            name: 'buy',
            component: Buy,
            meta: {
                web3Required: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/terms',
            name: 'terms',
            component: Terms,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/activity',
            name: 'activity',
            component: Activity,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/rankings',
            name: 'rankings',
            component: Rankings,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/squad',
            name: 'squad',
            component: Squad,
            meta: {
                web3Required: true
            }
        },
        {
            path: '/league',
            name: 'league',
            component: League,
            meta: {
                web3Required: false
            }
        },
        {
            path: '/team',
            name: 'team',
            component: Team,
            meta: {
                web3Required: true
            }
        },
        {
            path: '/team/:account',
            name: 'team-share',
            component: Team,
            props: true,
            meta: {
                web3Required: false
            }
        },
        // {
        //     path: '/card/:tokenId',
        //     name: 'card',
        //     component: DeeplinkCard,
        //     props: true,
        //     meta: {
        //         web3Required: false
        //     }
        // }
    ]
});
