import Vue from 'vue'
import M from 'materialize-css'

Vue.use(M)
Vue.use(require('vue-moment'));

import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 2,
  error: 'https://banner2.kisspng.com/20180320/rue/kisspng-error-computer-icons-orange-error-icon-5ab143d3089ac7.8478409115215666750353.jpg',
  attempt: 1
})