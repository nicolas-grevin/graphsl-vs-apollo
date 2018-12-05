import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import models from '../../postgres/models/index';
import { PlanetType } from '../types';

const getPlanet = {
  type: PlanetType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, args) => models.planets.findById(args.id),
};

const getPlanets = {
  type: new GraphQLList(PlanetType),
  args: {
    first: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
    },
  },
  resolve: async (root, args) => {
    const offset = args.offset || 0;
    const limit = args.first || 10;
    return await models.planets.findAll({ where: args, offset, limit, include: [{ model: models.astronauts }] });
  },
};

export {
  getPlanet,
  getPlanets,
};
