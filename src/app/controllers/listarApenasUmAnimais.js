import { listarApenasUmAnimal } from "../services/listarApenasUmAnimaisService";

class listarApenasUmAnimail {
  async listar(req, res) {
    const { id } = req.params;
    const buscarApenasUmAnimal = await listarApenasUmAnimal(id);
    if (!buscarApenasUmAnimal) {
      return res.status(202).json(buscarApenasUmAnimal);
    } else {
      throw new Error(res.json("Animal Não encontrado!!"));
    }
  }
}

module.exports = new listarApenasUmAnimail();
