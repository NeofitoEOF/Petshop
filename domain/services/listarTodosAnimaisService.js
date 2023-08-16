import {executarPrisma} from '../types/configPrisma';

const prisma = executarPrisma();

class listarTodosAnimaisService {
  async listarAnimais() {
    const listTodosAnimais = await prisma.petshop.findMany();
    return listTodosAnimais;
  }
}

module.exports = new listarTodosAnimaisService();
