const cadastrarAnimaisServices = require("../services/cadastrarAnimais");

class cadastrarAnimais {

  async index(req, res) {
    const { id } = req.params;
    try {
      const buscarAnimais = await cadastrarAnimaisServices.listarAnimais(id);
      return res.status(201).json(buscarAnimais);
    } catch (error) {
      if (!buscarAnimais) {
        throw new Error(res.status(401).json({error: 'Animal Não encontrado'})); 
      }
    }
  }

  async show(req, res) {
    const { id } = req.params
      const buscarApenasUmAnimal = await cadastrarAnimaisServices.listarApenasUmAnimal(id);
      if (buscarApenasUmAnimal !== null) {
        return res.status(201).json(buscarApenasUmAnimal);
      } if (buscarApenasUmAnimal ===  null) {
        throw new Error(res.json('Animal Não encontrado!!')) ;
      }
  }

  async stoge(req, res) {
    const animais = req.body;
    try {
        const resultado = await cadastrarAnimaisServices.criarAnimais(animais)
        return res.status(201).json(resultado);
      } catch (error) {
        throw new Error(res.status(400).json({error: 'Não foi possivel salvar animal'}));
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const informacoesAnimal = req.body;
      const animalAtualizado = await cadastrarAnimaisServices.atualizarAnimal(id, informacoesAnimal);
      res.status(201).json(animalAtualizado);
    } catch (error) {
      throw new Error(res.status(404).json({error: 'Animal inexistente'}));
    };
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const animalDeletado = await cadastrarAnimaisServices.apagarAnimal(id);
      res.status(201).json('Animal Deletado');
    } catch (error) {
      throw new Error(res.status(404).json({error: 'Animal inexistente'}));
    }
  }


}

module.exports = new cadastrarAnimais();