import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';


import models from '../../postgres/models';
import { AstronautType } from '../types';
import { AstronautInput } from '../inputs';

const createAstronaut = {
  type: AstronautType,
  args: {
    astronaut: {
      type: AstronautInput,
    },
  },
  resolve: async (source, args) => await models.astronauts
    .build({
      firstname: args.astronaut.firstname,
      lastname: args.astronaut.lastname,
      email: args.astronaut.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .save()
    .then(astronaut => models.astronauts.findById(astronaut.id))
    .catch(err => console.error(err)),
};

const updateAstronaut = {
  type: AstronautType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    astronaut: {
      type: AstronautInput,
    }
  },
  resolve: (source, args) => models.astronauts.findById(args.id)
    .then(astronaut => {
      args.astronaut.updatedAt = new Date();
      astronaut.changed('updatedAt', true);
      return astronaut.update(args.astronaut)
        .then(astronaut => astronaut)
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err)),
};

const deleteAstronaut = {
  type: AstronautType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (source, args) => await models.astronauts.findById(args.id)
    .then(astronaut => {
      astronaut.destroy()
        .then(() => true)
        .catch(err => console.error(err));
    })
    .catch(err => console.log(err)),
};

export {
  createAstronaut,
  updateAstronaut,
  deleteAstronaut,
};
