import { NextApiRequest, NextApiResponse } from 'next';
import { MemberService } from '../services';
import { Prisma } from '@prisma/client';

export const MemberController = {
  getAllMembers: async (req: NextApiRequest, res: NextApiResponse) => {
    const members = await MemberService.getAllMembers();
    res.status(200).json(members);
  },

  getMember: async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const member = await MemberService.getMember(id as string);
    if (member) {
      res.status(200).json(member);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  },

  createMember: async (req: NextApiRequest, res: NextApiResponse) => {
    const data: Prisma.memberCreateInput = req.body;
    const member = await MemberService.createMember(data);
    res.status(201).json(member);
  },

  updateMember: async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const data: Prisma.memberUpdateInput = req.body;
    const member = await MemberService.updateMember(id as string, data);
    res.status(200).json(member);
  },

  deleteMember: async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const member = await MemberService.deleteMember(id as string);
    res.status(200).json(member);
  },
};
