/*
  Warnings:

  - You are about to drop the `family` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "family";

-- CreateTable
CREATE TABLE "family1" (
    "family_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "family1_pkey" PRIMARY KEY ("family_id")
);
