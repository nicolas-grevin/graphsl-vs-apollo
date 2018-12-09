import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import { Rewards } from '../../mongo/models';
import { RewardType } from '../types';
import { RewardInput } from '../inputs';

const createReward = {
  type: RewardType,
  args: {
    reward: {
      type: RewardInput,
    },
  },
  resolve: async (source, { reward }) => await Rewards.create(reward),
};

const deleteReward = {
  type: RewardType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async(source, { id }) => await Rewards.findOneAndRemove(id),
};

export {
  createReward,
  deleteReward,
};
