const planet = (sequelize, DataTypes) => {
  const Planet = sequelize.define('planet', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  }, {});

  return Planet;
};

export default planet;
