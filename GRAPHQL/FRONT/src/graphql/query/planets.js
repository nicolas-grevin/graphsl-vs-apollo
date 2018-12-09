export const GET_PLANETS = `query getPlanets {
  getPlanets {
    id
    name
  }
}`

export const GET_PLANET = `query getPlanet($id: Int!) {
  getPlanet(id: $id) {
    id
    name
  }
}`

export default {
  GET_PLANETS,
  GET_PLANET
}
