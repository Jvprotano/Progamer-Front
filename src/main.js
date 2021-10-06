import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ButtonPlugin } from 'bootstrap-vue'
import { BCarousel } from 'bootstrap-vue'
import Carousel3d from 'vue-carousel-3d'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import i18n from './i18n'
import VueResource from 'vue-resource'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.component('b-carousel', BCarousel)
Vue.use(VueperSlides,VueperSlide)
Vue.use(Carousel3d)
Vue.use(IconsPlugin)
Vue.use(ButtonPlugin)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')





