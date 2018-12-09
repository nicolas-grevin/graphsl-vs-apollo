import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';


import models from '../../postgres/models';
import { PlanetType } from '../types';
import { PlanetInput, AstronautInput } from '../inputs';

const createPlanet = {
  type: PlanetType,
  args: {
    planet: {
      type: PlanetInput,
    },
  },
  resolve: async (source, args) => await models.planets
    .build({
      name: args.planet.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .save()
    .then(planet => models.planets.findById(planet.id))
    .catch(err => console.error(err)),
};

const updatePlanet = {
  type: PlanetType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    planet: {
      type: PlanetInput,
    }
  },
  resolve: async (source, args) => await models.planets.findById(args.id)
    .then(planet => {
      args.planet.updatedAt = new Date();
      planet.changed('updatedAt', true);
      return planet.update(args.planet)
        .then(planet => planet)
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err)),
};

const deletePlanet = {
  type: PlanetType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (source, args) => await models.planets.findById(args.id)
    .then(planet => {
      planet.destroy()
        .then(() => true)
        .catch(err => console.error(err));
    })
    .catch(err => console.log(err)),
};

const addAstronaut = {
  type: PlanetType,
  args: {
    planet: {
      type: new GraphQLNonNull(PlanetInput),
    },
    astronaut: {
      type: new GraphQLNonNull(AstronautInput),
    }
  },
  resolve: async (source, args) => await models.astronauts.findById(args.astronaut.id)
    .then(astronaut => {
      args.astronaut.updatedAt = new Date();
      astronaut.changed('updatedAt', true);
      args.astronaut.planet_id = args.planet.id;
      astronaut.changed('planet_id', true);
      return astronaut.update(args.astronaut)
        .then(() => {
          return models.planets.findById(args.planet.id)
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err)),
};

export {
  createPlanet,
  updatePlanet,
  deletePlanet,
  addAstronaut,
};
