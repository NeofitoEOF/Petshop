const { PrismaClient } = require(".prisma/client");

const prisma = new PrismaClient();

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
