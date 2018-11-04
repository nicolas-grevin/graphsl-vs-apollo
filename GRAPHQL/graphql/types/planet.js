import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import AstronautType from './astronaut';

export default new GraphQLObjectType({
  name: 'PlanetType',
  description: 'planet',
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "planet's ID",
        resolve(planet) {
          return planet.id;
        },
      },
      name: {
        type: GraphQLString,
        description: "planet's name",
        resolve(planet) {
          return planet.name;
        },
      },
      astronauts : {
        type: new GraphQLList(AstronautType),
        description: "planet's astronauts",
        resolve(planet) {
          return [];
        }
      },
      createdAt: {
        type: GraphQLString,
        description: "planet's created at",
        resolve(planet) {
          return planet.createdAt;
        },
      },
      updatedAt: {
        type: GraphQLString,
        description: "planet's email",
        resolve(planet) {
          return planet.updatedAt;
        },
      },
    };
  },
});
