const cadastrarAnimaisServices = require("../services/cadastrarAnimais");

class cadastrarAnimais {

  async index(req, res) {
    const { id } = req.params;
    try {
      const buscarAnimais = await cadastrarAnimaisServices.listarAnimais(id);
      return res.json(buscarAnimais);
    } catch (error) {
      if (!buscarAnimais) {
        return res.status(401).json({error: 'Animal Não encontrado'});
      }
    }
  }

  async show(req, res) {
    const { id } = req.params
      const buscarApenasUmAnimal = await cadastrarAnimaisServices.listarApenasUmAnimal(id);
      if (buscarApenasUmAnimal !== null) {
        return res.json(buscarApenasUmAnimal);
      } if (buscarApenasUmAnimal ===  null) {
        return res.json('Animal Não encontrado!!')
      }
  }

  async stoge(req, res) {
    const animais = req.body;
    try {
        const resultado = await cadastrarAnimaisServices.criarAnimais(animais)
        return res.json(resultado);
      } catch (error) {
      console.log(error)
      return res.json({error: 'Não foi possivel salvar animal'});
    }

  }
}

module.exports = new cadastrarAnimais();