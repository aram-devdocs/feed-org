/*
  Warnings:

  - You are about to drop the column `name1` on the `ingredient` table. All the data in the column will be lost.
  - Added the required column `name` to the `ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredient" DROP COLUMN "name1",
ADD COLUMN     "name" TEXT NOT NULL;
