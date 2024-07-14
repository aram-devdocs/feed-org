import { Family } from '../models';
import { family, Prisma } from '@prisma/client';

export const FamilyService = {
  getAllFamilies: async (): Promise<family[]> => {
    return await Family.getFamilies();
  },

  getFamily: async (family_id: string): Promise<family | null> => {
    return await Family.getFamilyById(family_id);
  },

  createFamily: async (data: Prisma.familyCreateInput): Promise<family> => {
    return await Family.createFamily(data);
  },

  updateFamily: async (
    family_id: string,
    data: Prisma.familyUpdateInput
  ): Promise<family> => {
    return await Family.updateFamily(family_id, data);
  },

  deleteFamily: async (family_id: string): Promise<family> => {
    return await Family.deleteFamily(family_id);
  },
};
