const Cliente = require("../models/produto");

class ListarController {
  async listarProdutos(req, res) {
    try {
      const Listar = await Cliente.findAll();

      res.status(200).json({ list: Listar });
    } catch (error) {
      return res.status(404).json({ error: "Erro ao listar os clientes" });
    }
  }
}

module.exports = new ListarController();
