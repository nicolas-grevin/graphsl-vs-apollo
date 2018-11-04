import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

import PlanetType from './planet';

export default new GraphQLObjectType({
  name: 'AstronautType',
  description: 'astronaut',
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "astronaut's ID",
        resolve(astronaut) {
          return astronaut.id;
        },
      },
      firstname: {
        type: GraphQLString,
        description: "astronaut's firstname",
        resolve(astronaut) {
          return astronaut.firstname;
        },
      },
      lastname: {
        type: GraphQLString,
        description: "astronaut's lastname",
        resolve(astronaut) {
          return astronaut.lastname;
        },
      },
      email: {
        type: GraphQLString,
        description: "astronaut's email",
        resolve(astronaut) {
          return astronaut.email;
        },
      },
      planet: {
        type: PlanetType,
        description: "astronaut's planet",
        resolve(astronaut) {
          return astronaut.planet;
        }
      },
      createdAt: {
        type: GraphQLString,
        description: "astronaut's created at",
        resolve(astronaut) {
          return astronaut.createdAt;
        },
      },
      updatedAt: {
        type: GraphQLString,
        description: "astronaut's email",
        resolve(astronaut) {
          return astronaut.updatedAt;
        },
      },
    };
  },
});
