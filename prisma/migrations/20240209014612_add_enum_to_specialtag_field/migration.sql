/*
  Warnings:

  - The `specialTag` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('EMPTY', 'MAIS_VENDIDO', 'PICANTE', 'LIMITADO', 'VEGANO', 'SEM_GLUTEN', 'ORGANICO', 'SAUDAVEL', 'FIT', 'ARTESANAL', 'GOURMET', 'VEGETARIANO');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "specialTag",
ADD COLUMN     "specialTag" "Tags" NOT NULL DEFAULT 'EMPTY';
