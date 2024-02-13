const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const weed = [
      "Lemon Haze",
      "Orange Gelato",
      "Bleu Nuit",
      "Strawberry N' Mint",
      "French Cookies",
      "Menu Dessert",
      "Organic Cherry Mints",
      "Gelato Mint",
      "Tange Dreams",
    ];

    const thc = ["28", "29", "24", "30", "29", "29", "30", "28", "18"];

    const cbd = ["1", "2", "1", "1", "1", "1", "2", "1", "1"];

    const weedType = [
      "sativa",
      "hybrid",
      "sativa",
      "sativa",
      "sativa",
      "sativa",
      "sativa",
      "indica",
      "sativa",
    ];

    const images = [
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
      "../public/weedImg.png",
    ];

    const weedWallets = [];
    for (let i = 0; 1 < weed.length; i++) {
      const name = weed[i];
      const thcPercentage = thc[i];
      const cbdPercentage = cbd[i];
      const weedCategory = weedType[i];
      const imageUrl = images[i];

      const weedWallet = await prisma.weed.create({
        data: {
          name,
          thc: thcPercentage,
          cbd: cbdPercentage,
          type: weedCategory,
          imageUrl: imageUrl,
        },
      });

      weedWallets.push(weedWallet);
    }
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar barbearias", error);
  }
}

seedDatabase();
