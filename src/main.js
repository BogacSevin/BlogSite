import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


Vue.use(VueRouter);
Vue.use(Vuetify, {
   theme: {
      primary: '#7957d5',
   },
});


new Vue({
  
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
