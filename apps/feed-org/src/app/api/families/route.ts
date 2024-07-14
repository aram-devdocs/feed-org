import { FamilyController } from '@feed-org/data-access';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function routeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      await FamilyController.getAllFamilies(req, res);
      break;
    case 'POST':
      await FamilyController.createFamily(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
