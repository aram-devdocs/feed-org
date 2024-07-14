import axios from 'axios';
import { member, Prisma } from '@prisma/client';

export const memberResolver = {
  Query: {
    members: async () => {
      try {
        const res = await axios.get<member[]>(`/api/members`);
        return res.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
  Mutation: {
    createMember: async (input: Prisma.memberCreateInput) => {
      try {
        const res = await axios.post<member>(`/api/members`, input);
        return res.data;
      } catch (error) {
        console.error(error);
        return;
      }
    },
  },
};
