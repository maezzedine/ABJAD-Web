import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMermaid from 'vue-mermaid';
import VueAnalytics from 'vue-analytics';
 
Vue.use(VueMermaid);
Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_ID,
    router
})

Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
