import Sequelize from "sequelize";
const sequalize = new Sequelize("motel", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging : false,
});
const ConnectDB = async () => {
  await sequalize.authenticate();
};



export default ConnectDB;
