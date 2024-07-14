import { Member } from '../models';
import { member, Prisma } from '@prisma/client';

export const MemberService = {
  getAllMembers: async (): Promise<member[]> => {
    return await Member.getMembers();
  },

  getMember: async (member_id: string): Promise<member | null> => {
    return await Member.getMemberById(member_id);
  },

  createMember: async (data: Prisma.memberCreateInput): Promise<member> => {
    return await Member.createMember(data);
  },

  updateMember: async (
    member_id: string,
    data: Prisma.memberUpdateInput
  ): Promise<member> => {
    return await Member.updateMember(member_id, data);
  },

  deleteMember: async (member_id: string): Promise<member> => {
    return await Member.deleteMember(member_id);
  },
};
