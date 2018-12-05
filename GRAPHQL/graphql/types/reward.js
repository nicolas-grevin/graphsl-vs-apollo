import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import { AstronautType, PlanetType } from './index'
import models from "../../postgres/models";
import { Op } from "sequelize";

export default new GraphQLObjectType({
  name: 'RewardType',
  description: 'reward',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "reward's ID",
      resolve: reward => reward.id,
    },
    name: {
      type: GraphQLString,
      description: "reward's name",
      resolve: reward => reward.name,
    },
    point: {
      type: GraphQLInt,
      description: "reward's point",
      resolve: reward =>reward.point,
    },
    astronauts: {
      type: GraphQLList(AstronautType),
      description: "reward's astronauts",
      resolve: async reward => await models.astronauts.findAll({
        where: {
          id: { [Op.in]: reward.astronauts },
        },
      }),
    },
    planets: {
      type: GraphQLList(PlanetType),
      description: "reward's planets",
      resolve: async reward => await models.planets.findAll({
        where: {
          id: { [Op.in]: reward.planets },
        },
      }),
    }
  }),
});
