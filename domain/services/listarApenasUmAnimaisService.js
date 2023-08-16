import {executarPrisma} from '../types/configPrisma';

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
