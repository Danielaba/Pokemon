import Vue from 'vue'
import VueRouter from 'vue-router'
import CharacterView from '../views/CharacterView.vue'
import ListCharacters from '../views/ListCharacters.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'ListCharacters',
    component: ListCharacters
  },
  {
    path: '/CharacterView/:id',
    name: 'CharacterView',
    component: CharacterView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
