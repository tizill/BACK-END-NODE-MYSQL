const Cliente = require("../models/produto");

class CadastrarController {
  async cadastrarProduto(req, res) {
    try {
      const Create = await Cliente.create(req.body);

      return res.status(201).json({ Create });
    } catch (err) {
      return res.status(404).json({ error: "Falha no Resgistro" });
    }
  }
}

module.exports = new CadastrarController();
