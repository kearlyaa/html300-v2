import Vue from 'vue';
import App from './App.vue';
//import router from './router';
import Home from './Home.vue';
import Top3 from './top3.vue';
import ImagePage from './imagepage.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const 

  routes= [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/image',
      name: 'imagepage',
      component: ImagePage,
    },
    {
      path: '/top3',
      name: 'Top3',
      component: Top3,
    },
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');