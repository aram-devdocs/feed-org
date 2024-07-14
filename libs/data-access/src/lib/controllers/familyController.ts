import { NextRequest, NextResponse } from 'next/server';
import { FamilyService } from '../services';
import { Prisma } from '@prisma/client';

export const FamilyController = {
  getAllFamilies: async (req: NextRequest) => {
    const families = await FamilyService.getAllFamilies();
    return NextResponse.json(families);
  },

  getFamily: async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: 'Family ID is required' },
        { status: 400 }
      );
    }
    const family = await FamilyService.getFamily(id);
    if (family) {
      return NextResponse.json(family);
    } else {
      return NextResponse.json(
        { message: 'Family not found' },
        { status: 404 }
      );
    }
  },

  createFamily: async (req: NextRequest) => {
    const data: Prisma.familyCreateInput = await req.json();
    const family = await FamilyService.createFamily(data);
    return NextResponse.json(family, { status: 201 });
  },

  updateFamily: async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: 'Family ID is required' },
        { status: 400 }
      );
    }
    const data: Prisma.familyUpdateInput = await req.json();
    const family = await FamilyService.updateFamily(id, data);
    return NextResponse.json(family);
  },

  deleteFamily: async (req: NextRequest) => {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json(
        { message: 'Family ID is required' },
        { status: 400 }
      );
    }
    const family = await FamilyService.deleteFamily(id);
    return NextResponse.json(family);
  },
};
