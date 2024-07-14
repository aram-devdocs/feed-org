import { NextRequest } from 'next/server';
import { MemberController } from '@feed-org/data-access';

export async function GET(req: NextRequest) {
  return await MemberController.getAllMembers(req);
}

export async function POST(req: NextRequest) {
  return await MemberController.createMember(req);
}
