import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import hombre from '../components/Hombre.vue'
import mujer from '../components/Mujer.vue'
import joyas from '../components/Joyas.vue'
import electronica from '../components/Electronica.vue'
import producto from '../components/ProductoUnico.vue'
import carrito from '../components/Carrito.vue'
import inicio_sesion from '../components/Inicio-sesion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/hombre',
      name: 'hombre',
      component: hombre
    },
    {
      path: '/mujer',
      name: 'mujer',
      component: mujer
    },
    {
      path: '/joyas',
      name: 'joyas',
      component: joyas
    },
    {
      path: '/electronica',
      name: 'electronica',
      component: electronica
    },
    {
      path: '/producto/:id?',
      name: 'producto',
      component: producto
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: carrito
    },
    {
      path: '/inicio-sesion',
      name: 'inicio-sesion',
      component: inicio_sesion
    },
  ]
})

export default router
