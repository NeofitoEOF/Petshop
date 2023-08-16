import { listarApenasUmAnimal } from "../services/listarApenasUmAnimaisService";
import { animalNaoEncontrado } from "../erros/mensagemErros";

class listarApenasUmAnimail {
  async listar(req, res) {
    const { id } = req.params;
    const buscarApenasUmAnimal = await listarApenasUmAnimal(id);
    if (!buscarApenasUmAnimal) {
      return res.status(202).json(buscarApenasUmAnimal);
    } else {
      throw new Error(res.json({ error: animalNaoEncontrado }));
    }
  }
}

module.exports = new listarApenasUmAnimail();
