/*
  Warnings:

  - You are about to drop the `family1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "family1";

-- CreateTable
CREATE TABLE "family" (
    "family_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "family_pkey" PRIMARY KEY ("family_id")
);
