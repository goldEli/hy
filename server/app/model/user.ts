export interface IUser {
  id: number;
  name: string;
  password: string;
}

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Clients = app.model.define("user", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(255),
    password: STRING(255),
  });

  return Clients;
};
