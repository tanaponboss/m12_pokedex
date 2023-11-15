import { createRouter, createWebHistory } from 'vue-router'
import PokedexView from '../views/PokedexView.vue'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokedexView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokedex/:id',
      name: 'pokemon-details',
      props: true,
      component: PokemonDetailsView
    }
  ]
})

export default router