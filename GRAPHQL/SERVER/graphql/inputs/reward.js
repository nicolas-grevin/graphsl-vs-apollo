import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'RewardInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    point: { type: GraphQLInt },
    astronauts: { type: new GraphQLList(GraphQLString) },
    planets: { type: new GraphQLList(GraphQLString) },
  }),
});
