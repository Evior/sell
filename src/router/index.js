import Vue from 'vue'
import Router from 'vue-router'
import hotgoods from '@/components/goods/hotgoods.vue';
import newgoods from '@/components/goods/newgoods.vue';
import dessert from '@/components/goods/dessert.vue';
import drinks from '@/components/goods/drinks.vue';
import soup from '@/components/goods/soup.vue';
import Vugetarian from '@/components/goods/Vugetarian.vue';
import discount from '@/components/goods/discount.vue';
import male from '@/components/goods/male.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newgoods',
      component: newgoods
    },{
      path: '/newgoods',
      name: 'newgoods',
      component: newgoods
    },
    {
      path: '/hotgoods',
      name: 'hotgoods',
      component: hotgoods
    },
    {
      path: '/discount',
      name: 'discount',
      component: discount
    },{
      path: '/male',
      name: 'male',
      component: male
    },{
      path: '/dessert',
      name: 'dessert',
      component: dessert
    },{
      path: '/drinks',
      name: 'drinks',
      component: drinks
    },{
      path: '/soup',
      name: 'soup',
      component: soup
    },{
      path: '/Vugetarian',
      name: 'Vugetarian',
      component: Vugetarian
    },
  ]
})
