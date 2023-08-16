class listarApenasUmAnimail {
  async listar(req, res) {
    const { id } = req.params;
    const buscarApenasUmAnimal =
      await cadastrarAnimaisServices.listarApenasUmAnimal(id);
    if (buscarApenasUmAnimal !== null) {
      return res.status(201).json(buscarApenasUmAnimal);
    }
    if (buscarApenasUmAnimal === null) {
      throw new Error(res.json("Animal Não encontrado!!"));
    }
  }
}

module.exports = new listarApenasUmAnimail();
