-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "family"("family_id") ON DELETE RESTRICT ON UPDATE CASCADE;
