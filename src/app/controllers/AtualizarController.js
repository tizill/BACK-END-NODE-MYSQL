const Cliente = require("../models/produto");

class AtualizarController {
  async atualizarProduto(req, res) {
    const id = req.params.id;
    const ListarAtua = await Cliente.findByPk(id);

    try {
      const updateProduto = await ListarAtua.update(req.body);

      if (updateProduto.matchedCount === 0) {
        res.status(404).json({ message: "O Cliente não foi encontrado!" });
        return;
      }

      res.status(201).json({ updateProduto });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }
}

module.exports = new AtualizarController();
