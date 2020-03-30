import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/element-variables.scss';
import 'normalize.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
