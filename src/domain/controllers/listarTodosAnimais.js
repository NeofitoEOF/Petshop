import {listarAnimais} from '../services/listarTodosAnimaisService';
import { animalNaoEncontrado } from "../erros/mensagemErros";

class listarTodosAnimais {
  async listarTodos(req, res) {
    const { id } = req.params;
    try {
      const buscarAnimais = await listarAnimais(id);
      return res.status(202).json(buscarAnimais);
    } catch (error) {
      if (!buscarAnimais) {
        throw new Error(
          res.status(401).json({ error: animalNaoEncontrado })
        );
      }
    }
  }
}

module.exports = new listarTodosAnimais();
