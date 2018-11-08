'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'astronauts',
      'planet_id',
      {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'planets', key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'astronauts',
      'planet_id',
      {}
    )
  }
};
