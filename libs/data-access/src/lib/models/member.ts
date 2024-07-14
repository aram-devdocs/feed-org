import { member, Prisma } from '@prisma/client';
import { prisma } from '../prisma';

export const Member = {
  getMembers: async (): Promise<member[]> => {
    return await prisma.member.findMany();
  },

  getMemberById: async (member_id: string): Promise<member | null> => {
    return await prisma.member.findUnique({
      where: { member_id },
    });
  },

  createMember: async (data: Prisma.memberCreateInput): Promise<member> => {
    return await prisma.member.create({
      data,
    });
  },

  updateMember: async (
    member_id: string,
    data: Prisma.memberUpdateInput
  ): Promise<member> => {
    return await prisma.member.update({
      where: { member_id },
      data,
    });
  },

  deleteMember: async (member_id: string): Promise<member> => {
    return await prisma.member.delete({
      where: { member_id },
    });
  },
};
