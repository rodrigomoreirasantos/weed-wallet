/*
  Warnings:

  - You are about to drop the column `userId` on the `Weed` table. All the data in the column will be lost.
  - Made the column `imageUrl` on table `Weed` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Weed" DROP CONSTRAINT "Weed_userId_fkey";

-- AlterTable
ALTER TABLE "Weed" DROP COLUMN "userId",
ALTER COLUMN "imageUrl" SET NOT NULL;

-- CreateTable
CREATE TABLE "WeedWallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weedId" TEXT NOT NULL,

    CONSTRAINT "WeedWallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WeedWallet" ADD CONSTRAINT "WeedWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeedWallet" ADD CONSTRAINT "WeedWallet_weedId_fkey" FOREIGN KEY ("weedId") REFERENCES "Weed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
