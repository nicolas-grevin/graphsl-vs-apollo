import Vue from 'vue'
import Vuex from 'vuex'

import astronauts from './modules/astronauts'
import planets from './modules/planets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    astronauts,
    planets
  },
})

