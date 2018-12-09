import { Schema, model } from 'mongoose';

const RewardsSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  point: {
    type: Number,
    required: true,
    default: 0,
  },
  astronauts: {
    type: Array,
    required: false,
  },
  planets: {
    type: Array,
    required: false,
  },
},{
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

const RewardsModel = model('Rewards', RewardsSchema);

export default RewardsModel;
