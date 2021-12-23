import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/filter'
import serve from './api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import './assets/iconfont/iconfont.css';
import successNotify from './utils/successControal.ts';


Vue.use(Vant);
Vue.use(Lazyload);
Vue.prototype.$api = serve;
Vue.prototype.$success = successNotify;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

