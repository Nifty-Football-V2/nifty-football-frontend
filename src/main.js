import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import messages from './messages';
import BootstrapVue from 'bootstrap-vue';
import Snotify, { SnotifyPosition } from 'vue-snotify';
import Vue2Filters from 'vue2-filters';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTelegram, faTwitter, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(Vue2Filters);

library.add(faDiscord, faTelegram, faTwitter, faInstagram, faMedium);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.rightCenter,
        titleMaxLength: 150,
        bodyMaxLength: 300,
    },
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
    beforeCreate () {
        Vue.$snotify = this.$snotify;
    },
    render: h => h(App),
}).$mount('#app');
