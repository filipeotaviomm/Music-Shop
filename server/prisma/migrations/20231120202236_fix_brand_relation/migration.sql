/*
  Warnings:

  - You are about to drop the column `brandId` on the `products` table. All the data in the column will be lost.
  - Added the required column `brandName` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_brandId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "brandId",
ADD COLUMN     "brandName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brandName_fkey" FOREIGN KEY ("brandName") REFERENCES "brands"("name") ON DELETE CASCADE ON UPDATE CASCADE;
