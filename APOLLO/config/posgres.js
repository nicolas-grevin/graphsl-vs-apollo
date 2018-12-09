export default {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres',
  define: {
    paranoid: false,
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
