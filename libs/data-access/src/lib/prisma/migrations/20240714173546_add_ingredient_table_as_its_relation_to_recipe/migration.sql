/*
  Warnings:

  - You are about to drop the column `ingredients` on the `recipe` table. All the data in the column will be lost.
  - The `instructions` column on the `recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `member_id` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "ingredients",
ADD COLUMN     "member_id" VARCHAR(36) NOT NULL,
DROP COLUMN "instructions",
ADD COLUMN     "instructions" TEXT[];

-- CreateTable
CREATE TABLE "ingredient" (
    "ingredient_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "recipe_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("ingredient_id")
);

-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;
