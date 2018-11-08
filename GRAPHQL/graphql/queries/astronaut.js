import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import models from '../../models/index';
import AstronautType from '../types/astronaut';

export const getAstronaut = {
  type: AstronautType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, args) {
    return models.astronauts.findById(args.id);
  },
};

export const getAstronauts = {
  type: new GraphQLList(AstronautType),
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
    return models.astronauts.findAll({ where: args, offset, limit, include: [{ model: models.planets }] });
  },
};

export default {
  getAstronaut,
  getAstronauts,
};
