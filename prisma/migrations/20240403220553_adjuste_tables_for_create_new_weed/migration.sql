/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Weed` table. All the data in the column will be lost.
  - You are about to drop the `WeedWallet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Weed` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WeedWallet" DROP CONSTRAINT "WeedWallet_userId_fkey";

-- DropForeignKey
ALTER TABLE "WeedWallet" DROP CONSTRAINT "WeedWallet_weedId_fkey";

-- AlterTable
ALTER TABLE "Weed" DROP COLUMN "imageUrl",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "WeedWallet";

-- AddForeignKey
ALTER TABLE "Weed" ADD CONSTRAINT "Weed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
