const express = require("express");
const CadastrarController = require("../controllers/CadastrarController");
const ListarController = require("../controllers/ListarController");
const AtualizarController = require("../controllers/AtualizarController");
const ApagarController = require("../controllers/ApagarController");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();
router.use(verifyJWT);
router.get("/", ListarController.listarProdutos);
router.post("/", CadastrarController.cadastrarProduto);
router.put("/:id", AtualizarController.atualizarProduto);
router.delete("/:id", ApagarController.apagarProduto);

module.exports = router;
