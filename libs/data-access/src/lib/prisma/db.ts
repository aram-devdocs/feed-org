import { PrismaClient, Prisma as P } from '@prisma/client';

export const prisma = new PrismaClient();
export const Prisma = P;
