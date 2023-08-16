import {executarPrisma} from '../types/configPristma';

const prisma = executarPrisma();


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