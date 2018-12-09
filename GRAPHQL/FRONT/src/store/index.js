import Vue from 'vue'
import Vuex from 'vuex'

import { GET_ASTRONAUTS, GET_ASTRONAUT, COUNT_ASTRONAUTS } from '../graphql/query/astronaut'
import { CREATE_ASTRONAUT, UPDATE_ASTRONAUT, DELETE_ASTRONAUT } from '../graphql/mutation/astronaut'
import { GET_PLANETS, GET_PLANET } from '../graphql/query/planets'

import Action from '../components/Table/Action'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    astronauts: [],
    astronautKeys: [],
    astronaut: {},
    numberAstronauts: 0,
    planets: [],
    planetKeys: []
  },
  getters: {
    async GET_ASTRONAUTS (state) {
      return await state.astronauts
    },
    GET_ASTRONAUT_KEYS (state) {
      return state.astronautKeys
    },
    GET_ASTRONAUT: state => state.astronaut,
    GET_NUMBER_ASTRONAUT: state => state.numberAstronauts,
    GET_PLANETS: state => state.planets,
    GET_PLANET_KEYS (state) {
      return state.planetKeys
    },
    GET_PLANET: state => state.planet
  },
  mutations: {
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
      console.log(astronauts)
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
    },
    UPDATE_PLANETS (state, planets) {
      planets.map(planet =>
        planet.actions = new Action ({
          name: 'planetItem',
          params: {
            id: planet.id
          }
        })
      )
      state.planets = planets
    },
    UPDATE_PLANET_KEYS (state, planets) {
      state.planetKeys = Object.keys(planets[0])
    },
    UPDATE_PLANET (state, planet) {
      state.astronaut = planet
    },
  },
  actions: {
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
    },
    async FETCH_PLANETS ({ commit }, variables) {
      const planets = await Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify({ query: GET_PLANETS, variables }))
      commit('UPDATE_PLANETS', planets.body.data.getPlanets);
      commit('UPDATE_PLANET_KEYS', planets.body.data.getPlanets);
    },
    async FETCH_PLANET ({ comit }, variables) {
      const planet = await  Vue.http.post(process.env.VUE_APP_GRAPHQL_URL, JSON.stringify(({ query: GET_PLANET, variables })))
      comit('UPDATE8PLANET', planet.body.data.getPlanet)
    }
  }
})

