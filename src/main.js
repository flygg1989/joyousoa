import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

Vue.prototype.$ajax = ajax

new Vue({
	router,
	store,
}).$mount('#app')