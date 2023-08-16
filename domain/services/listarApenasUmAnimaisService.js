import {executarPrisma} from '../types/configPristma';

const prisma = executarPrisma();

class listarApenasUmAnimaisService {
  async listarApenasUmAnimal(idAnimal) {
    const listAnimal = await prisma.petshop.findUnique({
      where: {
        id: Number(idAnimal),
      },
    });
    return listAnimal;
  }
}

module.exports = new listarApenasUmAnimaisService();
