import { FamilyController } from '@feed-org/data-access';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
 return await FamilyController.getFamily(req);
}

export async function PUT(req: NextRequest) {
 return await FamilyController.updateFamily(req);
}

export async function DELETE(req: NextRequest) {
  {
   return await FamilyController.deleteFamily(req);
  }
}
