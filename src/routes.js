const { Router } = require("express");
const cadastrarAnimais = require("./app/controllers/cadastrarAnimais");

const rotas = Router();

rotas.get("/registrar", cadastrarAnimais.index);
rotas.get("/registrar/:id", cadastrarAnimais.show);
rotas.post("/registrar", cadastrarAnimais.stoge);

module.exports = rotas;