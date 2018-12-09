import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PlanetInput',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});
