import Vue from 'vue'
import Vuex from 'vuex'
import characters from './modules/characters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    characters
  }
})
