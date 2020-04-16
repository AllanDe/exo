import Vue from 'vue'
import VueRouter from 'vue-router'
import exercice1 from '../views/exercice1.vue'
import exercice2 from '../views/exercice2.vue'

import sol1 from '../views/solutionExo1.vue'
import sol2 from '../views/solutionExo2.vue'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Exercice1',
    component: exercice1,
    main:true,
  },
  {
    path: '/exo2',
    name: 'Exercice2',
    main:true,
    component: exercice2,
  },
  {
    path: '/sol1',
    name: 'sol1',
    component: sol1,
  },
  {
    path: '/sol2',
    name: 'sol2',
    component: sol2,
  },
]

const router = new VueRouter({
  routes
})

export default router
