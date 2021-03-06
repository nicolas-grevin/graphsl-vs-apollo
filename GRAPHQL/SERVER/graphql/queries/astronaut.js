import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import models from '../../postgres/models';
import { AstronautType } from '../types';

const getAstronaut = {
  type: AstronautType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, args) => await models.astronauts.findById(args.id),
};

const getAstronauts = {
  type: new GraphQLList(AstronautType),
  args: {
    limit: {
      type: GraphQLInt,
      description: 'Limits the number of results returned in the page. Defaults to 10.',
    },
    offset: {
      type: GraphQLInt,
    },
  },
  resolve: async (root, args) => {
    const offset = args.offset || 0;
    const limit = args.limit || 10;
    delete args.offset;
    delete args.limit;

    return  await models.astronauts.findAll({
      where: args,
      offset,
      limit,
      include: [{ model: models.planets }]
    });
  },
};

const countAstronauts = {
  type: GraphQLInt,
  resolve: async root => {
    return await models.astronauts.count()
  }
}

export {
  getAstronaut,
  getAstronauts,
    countAstronauts,
};
