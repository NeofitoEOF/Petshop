import {criarAnimais} from "../services/cadastrarAnimaisService";

class cadastrarControllerAnimais {
  async creater(req, res) {
    const animais = req.body;
    try {
      const resultado = await criarAnimais(animais);
      return res.status(201).json(resultado);
    } catch (error) {
      throw new Error(
        res.status(400).json({ error: "Não foi possivel salvar animal" })
      );
    }
  }
}

module.exports = new cadastrarControllerAnimais();
