import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import AstronautType from './astronaut';
import {RewardType} from "./index";
import {Rewards} from "../../mongo/models";

export default new GraphQLObjectType({
  name: 'PlanetType',
  description: 'planet',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "planet's ID",
      resolve: planet => planet.id,
    },
    name: {
      type: GraphQLString,
      description: "planet's name",
      resolve: planet => planet.name,
    },
    astronauts : {
      type: new GraphQLList(AstronautType),
      description: "planet's astronauts",
      resolve: planet => planet.astronauts,
    },
    rewards : {
      type: GraphQLList(RewardType),
      description: "planet's rewards",
      resolve: async planet => {
        return await Rewards.find({ planets: planet.id });
      },
    },
    createdAt: {
      type: GraphQLString,
      description: "planet's created at",
      resolve: planet => planet.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      description: "planet's email",
      resolve: planet => planet.updatedAt,
    },
  }),
});
