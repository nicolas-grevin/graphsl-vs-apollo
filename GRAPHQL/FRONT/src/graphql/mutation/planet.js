export const CREATE_PLANET = `mutation createPlanet($planet: PlanetInput) {
 	createPlanet(planet: $planet) {
    id
    firstname
    lastname
    email
  }
}`

export const UPDATE_PLANET = `mutation updatePlanet($id: String!, $planet: PlanetInput) {
  updatePlanet(id: $id, planet: $planet) {
    id
    firstname
    email
    updatedAt
  }
}`

export const DELETE_PLANET = `mutation deletePlanet($id: String!) {
  deletePlanet(id: $id) {
    id
    firstname
    lastname
  }
}`

export default {
  CREATE_PLANET,
  UPDATE_PLANET,
  DELETE_PLANET
}
