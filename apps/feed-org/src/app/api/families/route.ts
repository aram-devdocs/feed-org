import { FamilyController } from '@feed-org/data-access';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return await FamilyController.getAllFamilies(req);
}

export async function POST(req: NextRequest) {
  return await FamilyController.createFamily(req);
}
