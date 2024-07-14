import { NextApiRequest, NextApiResponse } from 'next';
import { FamilyService } from '../services';
import { Prisma } from '@prisma/client';

export const FamilyController = {
  getAllFamilies: async (req: NextApiRequest, res: NextApiResponse) => {
    const families = await FamilyService.getAllFamilies();
    res.status(200).json(families);
  },

  getFamily: async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const family = await FamilyService.getFamily(id as string);
    if (family) {
      res.status(200).json(family);
    } else {
      res.status(404).json({ message: 'Family not found' });
    }
  },

  createFamily: async (req: NextApiRequest, res: NextApiResponse) => {
    const data: Prisma.familyCreateInput = req.body;
    const family = await FamilyService.createFamily(data);
    res.status(201).json(family);
  },

  updateFamily: async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const data: Prisma.familyUpdateInput = req.body;
    const family = await FamilyService.updateFamily(id as string, data);
    res.status(200).json(family);
  },

  deleteFamily: async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const family = await FamilyService.deleteFamily(id as string);
    res.status(200).json(family);
  }
};