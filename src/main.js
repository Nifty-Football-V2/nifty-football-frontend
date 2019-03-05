import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import messages from './messages';
import BootstrapVue from 'bootstrap-vue';
import Snotify, {SnotifyPosition} from 'vue-snotify';
import Vue2Filters from 'vue2-filters';

Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(Vue2Filters);

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
