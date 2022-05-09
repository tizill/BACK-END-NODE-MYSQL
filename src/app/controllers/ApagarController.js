const Cliente = require("../models/produto");

class ApagarController {
  async apagarProduto(req, res) {
    const id = req.params.id;

    const produt = await Cliente.findAll({ _id: id });

    if (!produt) {
      res.status(404).json({ message: "O Cliente não foi encontrado!" });
      return;
    }

    try {
      await Cliente.destroy({ where: { id: id } });

      res.status(200).json({ message: "Cliente removido com sucesso !" });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }
}

module.exports = new ApagarController();
