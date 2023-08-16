import { apagarAnimaisService } from "../services/apagarAnimaisService";
import { animalInexistente } from "../erros/mensagemErros";

class deletarControllersAnimais {
  async apagar(req, res) {
    try {
      const { id } = req.params;
      await apagarAnimaisService.apagarAnimal(id);
      res.status(201).json("Animal Deletado");
    } catch (error) {
      throw new Error(res.status(404).json({ error: animalInexistente }));
    }
  }
}

module.exports = new deletarControllersAnimais();
