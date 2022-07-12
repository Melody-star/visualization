import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(router)
app.mount('#app')

import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
app.use(ElementPlus)

import vueSeamlessScroll from 'vue-seamless-scroll' // 循环滚动
app.use(vueSeamlessScroll)

import animated from "animate.css"
app.use(animated);

import axios from "axios"
import VueAxios from 'vue-axios'
app.use(VueAxios,axios);



