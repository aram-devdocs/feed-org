-- CreateTable
CREATE TABLE "recipe" (
    "recipe_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "family_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("recipe_id")
);

-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("family_id") ON DELETE RESTRICT ON UPDATE CASCADE;
