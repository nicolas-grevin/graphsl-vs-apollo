'use strict';

const uuidv4 = require('uuid/v4');

const planets = [
  {
    id: uuidv4(),
    name: 'raccoons of asgard',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: uuidv4(),
    name: 'duck invaders',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: uuidv4(),
    name: 'donut factory',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: uuidv4(),
    name: 'schizo cat',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const generateAstronauts = (astronautNumbers = 10, planets = []) => {
  let astronauts = [];

  for (let i = 0; i < astronautNumbers; i++) {
    astronauts.push({
      id: uuidv4(),
      firstname: `wilson-${i}`,
      lastname: `astronaut-${i}`,
      email: `wilson-${i}@eleven-labs.com`,
      planet_id: planets[Math.floor(Math.random() * Math.floor(4))].id,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  return astronauts;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({ tableName: 'planets', schema: 'app' }, planets, {});

    return await queryInterface.bulkInsert({ tableName: 'astronauts', schema: 'app' }, generateAstronauts(1000, planets), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({ tableName: 'astronauts', schema: 'app' }, null, {});
    await queryInterface.bulkDelete({ tableName: 'planets', schema: 'app' }, null, {});
  }
};
