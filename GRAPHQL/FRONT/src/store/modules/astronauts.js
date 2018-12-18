import Vue from 'vue'

import { GET_ASTRONAUTS, GET_ASTRONAUT, COUNT_ASTRONAUTS } from '../../graphql/query/astronaut'
import { CREATE_ASTRONAUT, UPDATE_ASTRONAUT, DELETE_ASTRONAUT } from '../../graphql/mutation/astronaut'

const GRAPHQL_URL = process.env.VUE_APP_GRAPHQL_URL;

const state = {
  astronauts: [],
  astronaut: {},
  numberAstronauts : 0
}

const getters = {
  getAstronauts: ({ astronauts }) => {
    return astronauts
  },
  getAstronaut: ({ astronaut }) => {
    return astronaut
  },
  getNumberAstronauts: ({ numberAstronauts }) => {
    return numberAstronauts
  }
}

const mutations = {
  FETCH_ASTRONAUTS: (state, astronauts) => {
    state.astronauts = astronauts
  },
  FETCH_ASTRONAUT: (state, astronaut) => {
    state.astronaut = astronaut
  },
  CREATE_ASTRONAUT: (state, astronaut) => {
    state.astronaut = astronaut
  },
  UPDATE_ASTRONAUT: (state, astronaut) => {
    state.astronaut = astronaut
  },
  REMOVE_ASTRONAUT: (state, astronautId) => {
    state.astronaut = {}
  },
  COUNT_ASTRONAUTS: (state, numberAstronauts) => {
    state.numberAstronauts = numberAstronauts
  }
}

const actions = {
  fetchAstronauts: async ({ commit }, variables) => {
    try {
      const astronauts = await Vue.http.post(GRAPHQL_URL, JSON.stringify({ query: GET_ASTRONAUTS, variables: variables }) )
      commit('FETCH_ASTRONAUTS', astronauts.body.data.getAstronauts)
    } catch (e) {
      console.error(e)
    }
  },
  fetchAstronaut: async ({ commit }, astronautId) => {
    try {
      const astronaut = await Vue.http.post(GRAPHQL_URL, JSON.stringify({ query: GET_ASTRONAUT, variables: { id: astronautId } }))
      commit('UPDATE_ASTRONAUT', astronaut.body.data.getAstronaut)
    } catch (e) {
      console.error(e)
    }
  },
  createAstronaut: async ({ commit }, astronaut) => {
    try {
      const astronauCreated = await Vue.http.post(GRAPHQL_URL, JSON.stringify({ query: CREATE_ASTRONAUT, variables: { astronaut } }))
      commit('CREATE_ASTRONAUT', astronauCreated.body.data.createAstronaut)
    } catch (e) {
      console.error(e)
    }
  },
  updateAstronaut: async ({ commit }, astronaut) => {
    try {
    const astronautUpdated = await Vue.http.post(GRAPHQL_URL, JSON.stringify({ query: UPDATE_ASTRONAUT, variables: { astronaut } }))
    commit('UPDATE_ASTRONAUT', astronautUpdated.body.data.updateAstronaut)
    } catch (e) {
      console.error(e)
    }
  },
  removeAstronaut: async ({ commit }, astronautId) => {
    try {
      await Vue.http.post(GRAPHQL_URL, JSON.stringify({ query: DELETE_ASTRONAUT, variables: { astronautId } }))
      commit('REMOVE_ASTRONAUT', astronautId)
    } catch (e) {
      console.error(e)
    }
  },
  countAstronauts: async ({ commit}) => {
    const numberAstronauts = await Vue.http.post(GRAPHQL_URL, JSON.stringify({ query: COUNT_ASTRONAUTS }))
    commit('COUNT_ASTRONAUTS', numberAstronauts.body.data.countAstronauts)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
