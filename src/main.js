import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import messages from './messages';
import BootstrapVue from 'bootstrap-vue';
import Snotify, {SnotifyPosition} from 'vue-snotify';

Vue.use(BootstrapVue);
Vue.use(VueI18n);

Vue.use(Snotify, {
    toast: {
        position: SnotifyPosition.leftTop,
        titleMaxLength: 150,
        bodyMaxLength: 300,
    },
});

const i18n = new VueI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages,
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    beforeCreate() {
        Vue.$snotify = this.$snotify;
    },
    render: h => h(App),
}).$mount('#app');
