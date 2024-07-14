/*
  Warnings:

  - You are about to drop the column `name` on the `ingredient` table. All the data in the column will be lost.
  - Added the required column `name1` to the `ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredient" DROP COLUMN "name",
ADD COLUMN     "name1" TEXT NOT NULL;
