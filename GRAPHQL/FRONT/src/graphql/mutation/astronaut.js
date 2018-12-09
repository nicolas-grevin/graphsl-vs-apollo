export const CREATE_ASTRONAUT = `mutation createAstronaut($astronaut: AstronautInput) {
 	createAstronaut(astronaut: $astronaut) {
    id
    firstname
    lastname
    email
  }
}`

export const UPDATE_ASTRONAUT = `mutation updateAstronaut($id: String!, $astronaut: AstronautInput) {
  updateAstronaut(id: $id, astronaut: $astronaut) {
    id
    firstname
    email
    updatedAt
  }
}`

export const DELETE_ASTRONAUT = `mutation deleteAstronaut($id: String!) {
  deleteAstronaut(id: $id) {
    id
    firstname
    lastname
  }
}`

export default {
  CREATE_ASTRONAUT,
  UPDATE_ASTRONAUT
}
