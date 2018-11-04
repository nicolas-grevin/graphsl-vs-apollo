import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import models from '../../models/index';
import PlanetType from '../types/planet';

export const getPlanet = {
  type: PlanetType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, args) {
    return models.Planet.findById(args.id);
  },
};

export const getPlanets = {
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
  resolve(root, args) {
    const offset = args.offset || 0;
    const limit = args.first || 10;
    return models.Planet.findAll({ where: args, offset, limit });
  },
};

export default {
  getPlanet,
  getPlanets,
};
