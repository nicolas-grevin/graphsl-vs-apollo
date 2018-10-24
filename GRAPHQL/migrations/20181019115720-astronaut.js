'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Astronaut')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Astronaut');
  }
};
