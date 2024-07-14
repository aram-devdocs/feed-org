/*
  Warnings:

  - You are about to drop the column `username` on the `member` table. All the data in the column will be lost.
  - Added the required column `username1` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" DROP COLUMN "username",
ADD COLUMN     "username1" TEXT NOT NULL;
