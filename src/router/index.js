import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewEnergyCar from '../components/NewEnergyCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/car',
      name: 'NewEnergyCar',
      component: NewEnergyCar
    }
  ]
})
