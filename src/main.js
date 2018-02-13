import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-cms/index.css'
import App from './App.vue'

import axios from 'axios'
import Qs from 'qs'

import './js/common.js'

import routes from './routes'

axios.defaults.withCredentials=true;
Vue.prototype.$ajax = axios

global.Qs = Qs;

Vue.use(ElementUI)
Vue.use(VueRouter)


const router = new VueRouter({
    routes
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
