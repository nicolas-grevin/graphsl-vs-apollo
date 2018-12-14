const GET_PLANETS = `query getPlanets {
  getPlanets {
    id
    name
  }
}`

const GET_PLANET = `query getPlanet($id: Int!) {
  getPlanet(id: $id) {
    id
    name
  }
}`

const COUNT_PLANETS = `
{
  countPlanets
}
`

export {
  GET_PLANETS,
  GET_PLANET,
  COUNT_PLANETS
}
