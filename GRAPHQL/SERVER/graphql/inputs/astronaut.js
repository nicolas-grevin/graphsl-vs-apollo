import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'AstronautInput',
  fields: () => ({
    id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});
