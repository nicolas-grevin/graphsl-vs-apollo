import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';

import { Rewards } from '../../mongo/models';
import { PlanetType, RewardType } from './index';

export default new GraphQLObjectType({
  name: 'AstronautType',
  description: 'astronaut',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "astronaut's ID",
      resolve: astronaut => astronaut.id,
    },
    firstname: {
      type: GraphQLString,
      description: "astronaut's firstname",
      resolve: astronaut => astronaut.firstname,
    },
    lastname: {
      type: GraphQLString,
      description: "astronaut's lastname",
      resolve: astronaut => astronaut.lastname,
    },
    email: {
      type: GraphQLString,
      description: "astronaut's email",
      resolve: astronaut => astronaut.email,
    },
    planet: {
      type: PlanetType,
      description: "astronaut's planet",
      resolve: astronaut => astronaut.planet,
    },
    rewards : {
      type: GraphQLList(RewardType),
      description: "astronaut's rewards",
      resolve: async astronaut => {
        return await Rewards.find({ astronauts: astronaut.id });
      },
    },
    createdAt: {
      type: GraphQLString,
      description: "astronaut's created at",
      resolve: astronaut => astronaut.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      description: "astronaut's email",
      resolve: astronaut => astronaut.updatedAt,
    },
  }),
});
