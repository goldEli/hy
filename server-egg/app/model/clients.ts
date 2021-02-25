export interface IClient {
  id: number;
  name: string;
}

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const Clients = app.model.define("clients", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(255),
  });

  return Clients;
};
