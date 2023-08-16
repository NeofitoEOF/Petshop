import {executarPrisma} from '../types/configPristma';

const prisma = executarPrisma();

class apagarAnimaisService {
  async apagarAnimal(id) {
    try {
      await prisma.petshop.deleteMany({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new apagarAnimaisService();
