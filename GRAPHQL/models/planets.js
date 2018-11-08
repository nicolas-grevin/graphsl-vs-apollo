'use strict';
module.exports = (sequelize, DataTypes) => {
  const Planets = sequelize.define('planets', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    }
  }, {
    underscored: true,
  });

  Planets.associate = models => {
    Planets.hasMany(models.astronauts, {
      foreignKey: 'planet_id'
    })
  };
  return Planets;
};
