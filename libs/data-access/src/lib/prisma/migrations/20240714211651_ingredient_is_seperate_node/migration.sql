/*
  Warnings:

  - You are about to drop the column `recipe_id` on the `ingredient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ingredient" DROP CONSTRAINT "ingredient_recipe_id_fkey";

-- AlterTable
ALTER TABLE "ingredient" DROP COLUMN "recipe_id";

-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "ingredients" VARCHAR(36)[];
