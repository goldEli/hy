import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1614156793016_2966";

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "123456",
      database: "hy",
    },
  };

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    password: "123456",
    port: 3306,
    database: "hy",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };
  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
