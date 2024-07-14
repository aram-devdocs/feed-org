import axios from 'axios';
import { family, Prisma } from '@prisma/client';
export const familyResolver = {
  Query: {
    families: async () => {
      try {
        const res = await axios.get<family[]>(`/api/families`);
        return res.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  Mutation: {
    createFamily: async (input: Prisma.familyCreateInput) => {
      const res = await axios.post<family>(`/api/families`, input);
      return res.data;
    },
  },
};
