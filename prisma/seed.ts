import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Sample seeding
// const upsertUser = async (email: string, name: string) => {
//   try {
//     const userData = {
//       where: { email },
//       update: {},
//       create: { email, name },
//     };

//     const user = await prisma.user.upsert(userData);
//     console.log(`User ${user.name} (${user.email}) upserted successfully`);
//     return user;
//   } catch (error) {
//     console.error(`Error upserting user with email ${email}:`, error);
//     throw error;
//   }
// };

async function main() {
  //   const alice = await upsertUser("alice@prisma.io", "Alice");
  //   const bob = await upsertUser("bob@prisma.io", "Bob");
  //   console.log({ alice, bob });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
