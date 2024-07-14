/*
  Warnings:

  - You are about to drop the `Family` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Family";

-- CreateTable
CREATE TABLE "family" (
    "family_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "family_pkey" PRIMARY KEY ("family_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "family_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);
