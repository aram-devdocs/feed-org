import { NextRequest, NextResponse } from 'next/server';
import { MemberService } from '../services';
import { Prisma } from '@prisma/client';

export const MemberController = {
  getAllMembers: async (req: NextRequest) => {
    const members = await MemberService.getAllMembers();
    return NextResponse.json(members);
  },

  getMember: async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: 'Member ID is required' },
        { status: 400 }
      );
    }
    const member = await MemberService.getMember(id);
    if (member) {
      return NextResponse.json(member);
    } else {
      return NextResponse.json(
        { message: 'Member not found' },
        { status: 404 }
      );
    }
  },

  createMember: async (req: NextRequest) => {
    const data: Prisma.memberCreateInput = await req.json();
    const member = await MemberService.createMember(data);
    return NextResponse.json(member, { status: 201 });
  },

  updateMember: async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: 'Member ID is required' },
        { status: 400 }
      );
    }
    const data: Prisma.memberUpdateInput = await req.json();
    const member = await MemberService.updateMember(id, data);
    return NextResponse.json(member);
  },

  deleteMember: async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: 'Member ID is required' },
        { status: 400 }
      );
    }
    const member = await MemberService.deleteMember(id);
    return NextResponse.json(member);
  },
};
