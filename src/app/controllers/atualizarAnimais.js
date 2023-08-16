class atualizarControllersAnimais {
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const informacoesAnimal = req.body;
      const animalAtualizado = await cadastrarAnimaisServices.atualizarAnimal(
        id,
        informacoesAnimal
      );
      res.status(201).json(animalAtualizado);
    } catch (error) {
      throw new Error(res.status(404).json({ error: "Animal inexistente" }));
    }
  }
}

module.exports = new atualizarControllersAnimais();
