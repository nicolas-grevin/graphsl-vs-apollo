'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn({
        tableName: 'astronauts',
        schema: 'app'
      },
      'planet_id',
      {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: {
            tableName: 'planets', schema: 'app', key: 'id'
          }
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      {
        tableName: 'astronauts',
        schema: 'app',
      },
      'planet_id',
      {
        schema: 'app'
      }
    )
  }
};
