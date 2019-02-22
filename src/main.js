import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import messages from './messages';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const i18n = new VueI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages,
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
