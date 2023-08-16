const { PrismaClient } = require(".prisma/client");
class prismaORM {
  async executarPrisma() {
    const prisma = new PrismaClient();
  }
}


module.exports = new prismaORM();