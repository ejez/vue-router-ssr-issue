import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Apropos from '../components/Apropos.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/à-propos', component: Apropos }
    ]
  });
}