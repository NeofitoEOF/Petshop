const { PrismaClient } = require(".prisma/client");

const prisma = new PrismaClient();


class atualizarServiceAnimais {
  async updateAnimal(id, infoAnimais) {
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
      throw new Error(error);
    }
  }
}

module.exports = new atualizarServiceAnimais();