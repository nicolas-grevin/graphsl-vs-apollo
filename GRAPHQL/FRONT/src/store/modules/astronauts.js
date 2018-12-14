import Vue from 'vue'

import { GET_ASTRONAUTS, GET_ASTRONAUT, COUNT_ASTRONAUTS } from '../../graphql/query/astronaut'
import { CREATE_ASTRONAUT, UPDATE_ASTRONAUT, DELETE_ASTRONAUT } from '../../graphql/mutation/astronaut'

import Action from '../../components/Table/Action'

const state = {
  astronauts: [],
  astronautKeys: [],
  astronaut: {},
  numberAstronauts: 0
}

const getters = {
  async GET_ASTRONAUTS (state) {
    return await state.astronauts
  },
  GET_ASTRONAUT_KEYS (state) {
    return state.astronautKeys
  },
  GET_ASTRONAUT: state => state.astronaut,
  GET_NUMBER_ASTRONAUT: state => state.numberAstronauts
}

const actions = {
  UPDATE_ASTRONAUTS (state, astronauts) {
    astronauts.map(astronaut =>
      astronaut.actions = new Action ({
        name: 'astronautItem',
        params: {
          id: astronaut.id
        }
      }, {
        name: 'astronautEdit',
        params: {
          id: astronaut.id
        }
      }, {
        name: 'astronautDelete',
        params: {
          id: astronaut.id
        }
      })
    )
    state.astronauts = astronauts;
  },
  UPDATE_ASTRONAUT_KEYS (state, astronauts) {
    state.astronautKeys = Object.keys(astronauts[0])
  },
  UPDATE_ASTRONAUT (state, astronaut) {
    state.astronaut = astronaut
  },
  UPDATE_NUMBER_ASTRONAUTS (state, numberAstronauts) {
    state.numberAstronauts = numberAstronauts;
  }
}

const mutations = {
  async FETCH_ASTRONAUTS ({ commit }, variables) {
    const astronauts = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: GET_ASTRONAUTS, variables }) )
    commit('UPDATE_ASTRONAUTS', astronauts.body.data.getAstronauts)
    commit('UPDATE_ASTRONAUT_KEYS', astronauts.body.data.getAstronauts)
  },
  async FETCH_ASTRONAUT ({ commit }, variables) {
    const astronaut = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: GET_ASTRONAUT, variables }));
    commit('UPDATE_ASTRONAUT', astronaut.body.data.getAstronaut)
  },
  async CREATE_ASTRONAUT ({ commit }, variables) {
    const astronaut = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: CREATE_ASTRONAUT, variables }))
    commit('UPDATE_ASTRONAUT', astronaut.body.data.createAstronaut)
  },
  async UPDATE_ASTRONAUT ({ commit }, variables) {
    const astronaut = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: UPDATE_ASTRONAUT, variables }))
    commit('UPDATE_ASTRONAUT', astronaut.body.data.updateAstronaut)
  },
  async DELETE_ASTRONAUT ({ commit }, variables) {
    const astronaut = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: DELETE_ASTRONAUT, variables }))
    commit('UPDATE_ASTRONAUT', astronaut.body.data.deleteAstronaut)
  },
  async COUNT_ASTRONAUTS ({ commit }) {
    const numberAstronauts = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: COUNT_ASTRONAUTS }))
    commit('UPDATE_NUMBER_ASTRONAUTS', numberAstronauts.body.data.countAstronauts)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
