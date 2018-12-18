import Vue from 'vue'

import { GET_PLANETS, GET_PLANET, COUNT_PLANETS } from '../../graphql/query/planets'

import Action from '../../components/Table/Action'

const state = {
  planets: [],
  planet: {},
  numberPlanets: 0
}

const getters = {
  getPlanets: state => state.planets,
  getPlanet: state => state.planet,
  GET_NUMBER_PLANET: state => state.numberPlanets
}

const actions = {
  // UPDATE_PLANETS (state, planets) {
  //   planets.map(planet =>
  //     planet.actions = new Action ({
  //       name: 'planetItem',
  //       params: {
  //         id: planet.id
  //       }
  //     })
  //   )
  //   state.planets = planets
  // },
  // UPDATE_PLANET_KEYS (state, planets) {
  //   state.planetKeys = Object.keys(planets[0])
  // },
  // UPDATE_PLANET (state, planet) {
  //   state.astronaut = planet
  // },
  // UPDATE_NUMBER_ASTRONAUTS (state, numberPlanets) {
  //   state.numberPlanets = numberPlanets;
  // }
}

const mutations = {
  // async FETCH_PLANETS ({ commit }, variables) {
  //   const planets = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: GET_PLANETS, variables }))
  //   commit('UPDATE_PLANETS', planets.body.data.getPlanets);
  //   commit('UPDATE_PLANET_KEYS', planets.body.data.getPlanets);
  // },
  // async FETCH_PLANET ({ comit }, variables) {
  //   const planet = await  Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify(({ query: GET_PLANET, variables })))
  //   comit('UPDATE8PLANET', planet.body.data.getPlanet)
  // },
  // async CREATE_PLANET ({ commit }, variables) {
  //   const planet = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: CREATE_PLANET, variables }))
  //   commit('UPDATE_PLANET', planet.body.data.createPlanet)
  // },
  // async UPDATE_ASTRONAUT ({ commit }, variables) {
  //   const planet = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: UPDATE_PLANET, variables }))
  //   commit('UPDATE_PLANET', planet.body.data.updatePLanet)
  // },
  // async DELETE_ASTRONAUT ({ commit }, variables) {
  //   const planet = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: DELETE_PLANET, variables }))
  //   commit('UPDATE_PLANET', planet.body.data.deletePLanet)
  // },
  // async COUNT_ASTRONAUTS ({ commit }) {
  //   const numberPlanets = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: COUNT_PLANETS }))
  //   commit('UPDATE_NUMBER_PLANETS', numberPlanets.body.data.countPLanets)
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
