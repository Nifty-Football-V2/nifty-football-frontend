import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import messages from './messages';
import BootstrapVue from 'bootstrap-vue';
import Snotify, {SnotifyPosition} from 'vue-snotify';
import Vue2Filters from 'vue2-filters';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTelegram, faTwitter, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAnalytics from 'vue-analytics';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    // set observer to true
    observer: true,
    loading: './public/tiger.png',
    lazyComponent: true
});

Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(Vue2Filters);

library.add(faDiscord, faTelegram, faTwitter, faInstagram, faMedium, faFutbol);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.rightCenter,
        titleMaxLength: 150,
        bodyMaxLength: 300,
    },
});

Vue.filter('toHumanState', function (state) {
    if (!state) return '';
    switch (state) {
        case 0:
            return 'Not started';
        case 1:
            return 'Open';
        case 2:
            return 'Home Win';
        case 3:
            return 'Away Win';
        case 4:
            return 'Draw';
        case 5:
            return 'Cancelled';
    }
});

Vue.use(VueAnalytics, {
    id: 'UA-135557019-1',
    router,
    autoTracking: {
        exception: true
    },
    batch: {
        enabled: true // default 2 every 500ms
    },
    debug: {
        // set to false to disable GA - locally NODE_ENV set to `development`
        sendHitTask: _.get(process.env, 'NODE_ENV', 'production') === 'production'
    }
});

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    mixins: [Vue2Filters.mixin],
    beforeCreate() {
        Vue.$snotify = this.$snotify;
    },
    render: h => h(App),
}).$mount('#app');
