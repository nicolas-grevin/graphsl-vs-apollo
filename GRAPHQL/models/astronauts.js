'use strict';
module.exports = (sequelize, DataTypes) => {
  const Astronauts = sequelize.define('astronauts', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    firstname: {
      type: DataTypes.STRING,
      required: true,
    },
    lastname: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    planet_id: {
      type: DataTypes.UUID
    }
  }, {
    schema: 'app',
    underscored: true,

    getterMethods: {

    },
    setterMethods: {

    }
  });

  Astronauts.associate = models => {
    Astronauts.belongsTo(models.planets, {
      foreignKey: 'planet_id'
    })
  };
  return Astronauts;
};
