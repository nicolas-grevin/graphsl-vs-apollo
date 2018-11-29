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
},{
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

const RewardsModel = model('rewards', RewardsSchema);

export default RewardsModel;

