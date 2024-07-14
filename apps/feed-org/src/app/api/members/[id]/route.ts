import { MemberController } from '@feed-org/data-access';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return await MemberController.getMember(req);
}

export async function PUT(req: NextRequest) {
  return await MemberController.updateMember(req);
}

export async function DELETE(req: NextRequest) {
  return await MemberController.deleteMember(req);
}
