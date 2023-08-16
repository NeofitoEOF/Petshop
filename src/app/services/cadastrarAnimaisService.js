const { PrismaClient } = require(".prisma/client");

const prisma = new PrismaClient();

class cadastrarAnimaisService {
  async criarAnimais(dados) {
    try {
      const novoAnimal = await prisma.petshop.create({
        data: {
          nome: dados.nome,
          idade: dados.idade,
          animal: dados.animal,
          raca: dados.raca,
          dono: dados.dono,
          telefone: dados.telefone,
        },
      });
      return novoAnimal;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new cadastrarAnimaisService();
