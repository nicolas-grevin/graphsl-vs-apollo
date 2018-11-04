'use strict';
module.exports = (sequelize, DataTypes) => {
  const Astronaut = sequelize.define('Astronaut', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    planet_id: {
      type: DataTypes.UUID
    }
  }, {
    getterMethods: {

    },
    setterMethods: {

    }
  });

  Astronaut.associate = models => {
    Astronaut.belongsTo(models.Planet, { as: 'planet' })
  };
  return Astronaut;
};
