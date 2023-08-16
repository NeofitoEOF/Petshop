const { PrismaClient } = require(".prisma/client");

const prisma = new PrismaClient();

class listarTodosAnimaisService {
  async listarAnimais() {
    const listTodosAnimais = await prisma.petshop.findMany();
    return listTodosAnimais;
  }
}

module.exports = new listarTodosAnimaisService();
