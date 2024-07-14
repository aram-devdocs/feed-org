import { Prisma, family } from '@prisma/client';
import { prisma } from '../prisma';

export const Family = {
  getFamilies: async (): Promise<family[]> => {
    return await prisma.family.findMany();
  },

  getFamilyById: async (family_id: string): Promise<family | null> => {
    return await prisma.family.findUnique({
      where: { family_id },
    });
  },

  createFamily: async (data: Prisma.familyCreateInput): Promise<family> => {
    return await prisma.family.create({
      data,
    });
  },

  updateFamily: async (
    family_id: string,
    data: Prisma.familyUpdateInput
  ): Promise<family> => {
    return await prisma.family.update({
      where: { family_id },
      data,
    });
  },

  deleteFamily: async (family_id: string): Promise<family> => {
    return await prisma.family.delete({
      where: { family_id },
    });
  },
};
