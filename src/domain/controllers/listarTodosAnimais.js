import {listarAnimais} from '../services/listarTodosAnimaisService';

class listarTodosAnimais {
  async listarTodos(req, res) {
    const { id } = req.params;
    try {
      const buscarAnimais = await listarAnimais(id);
      return res.status(202).json(buscarAnimais);
    } catch (error) {
      if (!buscarAnimais) {
        throw new Error(
          res.status(401).json({ error: "Animal Não encontrado" })
        );
      }
    }
  }
}

module.exports = new listarTodosAnimais();
