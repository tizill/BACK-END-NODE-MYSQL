const database = require("../../database/index");

try {
  const resultado = database.sync();
  console.log(resultado);
} catch (error) {
  console.log(error);
}
