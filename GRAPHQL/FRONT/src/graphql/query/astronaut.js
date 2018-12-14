// import { parse } from 'graphql/language/parser';

export const GET_ASTRONAUTS = `query getAstronauts($limit: Int, $offset: Int) {
  getAstronauts (limit: $limit, offset: $offset) { 
    id
    firstname
    lastname
    email
    planet {
      name
    }
  }
}`

export const GET_ASTRONAUT = `query getAstronaut($id: ID!) {
  getAstronaut(id: $id) {
    id
    lastname
    firstname
    email
    rewards {
      name
      point
    }
    planet {
      id
    }
  }
}
`


export const COUNT_ASTRONAUTS = `
{
  countAstronauts
}
`

export default {
  GET_ASTRONAUTS,
  GET_ASTRONAUT,
  COUNT_ASTRONAUTS
}
