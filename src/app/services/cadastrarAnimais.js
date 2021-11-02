const { PrismaClient } = require(".prisma/client");

const prisma = new PrismaClient();

class cadastrarAnimais {
  async listarApenasUmAnimal(idAnimal) {
    const listAnimal = await prisma.petshop.findUnique({
      where: {
        id: Number(idAnimal),
      },
    });
    return listAnimal;
  }

  async listarAnimais() {
    const listTodosAnimais = await prisma.petshop.findMany();
    return listTodosAnimais;
  }

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
      return error;
    }
  }

  async atualizarAnimal(id, infoAnimais) {
    try {
      const animalAtualizado = await prisma.petshop.update({
        where: {
          id: Number(id),
        },
        update: {
          nome: infoAnimais.nome,
        },
      });
      return animalAtualizado;
    } catch (error) {
      return error;
    }
  }

  async apagarAnimal(id) {
    try {
      const animalDeletado = await prisma.petshop.deleteMany({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = new cadastrarAnimais();
