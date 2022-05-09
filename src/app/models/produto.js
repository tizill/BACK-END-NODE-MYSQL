const Sequelize = require("sequelize");
const database = require("../../database/index");
require("../test/textDatabase");

const Cliente = database.define("cliente", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Cliente;
