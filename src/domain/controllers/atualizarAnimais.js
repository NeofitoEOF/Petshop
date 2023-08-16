import { updateAnimal } from "../services/atualizarAnimaisService";
import { animalInexistente } from "../erros/mensagemErros";
class atualizarAnimaisControllers {
  async update(req, res) {
    try {
      const { id } = req.params;
      const informacoesAnimal = req.body;
      const animalAtualizado = await updateAnimal(id, informacoesAnimal);
      return res.status(202).json(animalAtualizado);
    } catch (error) {
      throw new Error(res.status(404).json({ error: animalInexistente }));
    }
  }
}

module.exports = new atualizarAnimaisControllers();
