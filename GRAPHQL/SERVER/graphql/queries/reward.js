import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { Rewards } from '../../mongo/models';
import { RewardType } from '../types';

const getReward = {
  type: RewardType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, args) => await Rewards.find({ id: args.id }),
};

const getRewards = {
  type: new GraphQLList(RewardType),
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
    return await Rewards.find().skip(offset).limit(limit);
  },
};

export {
  getReward,
  getRewards,
};
