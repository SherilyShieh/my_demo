import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store/index'


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    next();
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve');
    next();
})

router.afterEach((to, from) => {
    console.log('afterEach');
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')