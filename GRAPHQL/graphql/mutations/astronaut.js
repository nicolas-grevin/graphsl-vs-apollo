import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';


import models from '../../models/index';
import AstronautType from '../types/astronaut';
import AstronautInput from '../inputs/astronaut';

export const createAstronaut = {
  type: AstronautType,
  args: {
    astronaut: {
      type: AstronautInput,
    },
  },
  resolve(source, args) {
    return models.Astronaut
      .build({
        firstname: args.astronaut.firstname,
        lastname: args.astronaut.lastname,
        email: args.astronaut.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .save()
      .then(astronaut => models.Astronaut.findById(astronaut.id))
      .catch(err => console.error(err));
  },
};

export const updateAstronaut = {
  type: AstronautType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    astronaut: {
      type: AstronautInput,
    }
  },
  resolve(source, args) {
    return models.Astronaut.findById(args.id)
      .then(astronaut => {
        args.astronaut.updatedAt = new Date();
        astronaut.changed('updatedAt', true);
        return astronaut.update(args.astronaut)
          .then(astronaut => astronaut)
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }
};

export const deleteAstronaut = {
  type: AstronautType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(source, args) {
    return models.Astronaut.findById(args.id)
      .then(astronaut => {
        astronaut.destroy()
          .then(() => true)
          .catch(err => console.error(err));
      })
      .catch(err => console.log(err));
  }
};

export default {
  createAstronaut,
  updateAstronaut,
  deleteAstronaut,
};
