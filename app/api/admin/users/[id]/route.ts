
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";
import { NextResponse } from 'next/server';

export const GET = async (request:NextApiRequest, { params }: { params: any }, response:NextApiResponse) => {
  const id = params.id;  
  const user = await prisma.user.findFirst({ where: { id } });
  return  NextResponse.json(user);
};