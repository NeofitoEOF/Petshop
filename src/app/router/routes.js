const { Router } = require("express");
const cadastrarControllerAnimais = require("../controllers/cadastrarAnimais");
const listarTodosAnimais = require("../controllers/listarTodosAnimais");
const atualizarControllersAnimais = require("../controllers/atualizarAnimais");
const deletarControllersAnimais = require("../controllers/deletarAnimais");
const listarApenasUmAnimail = require("../controllers/listarApenasUmAnimais");

const rotas = Router();

rotas.get("/registrar", listarTodosAnimais.listarTodos);
rotas.get("/registrar/:id", listarApenasUmAnimail.listar);
rotas.post("/registrar", cadastrarControllerAnimais.creater);
rotas.put("/registrar/:id", atualizarControllersAnimais.atualizar);
rotas.delete("/registrar/:id", deletarControllersAnimais.apagar);

module.exports = rotas;