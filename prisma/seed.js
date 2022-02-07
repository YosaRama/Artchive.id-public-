// Libs
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Data
const user = require("./seeds/user");

// Main Function to Create Data
async function main() {
  await prisma.user.create({
    data: user,
  });
}

// Handle Execution
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
