
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";


export const DELETE = async (request:NextApiRequest, { params }: { params: any }, response:NextApiResponse) => {
  try {
      const id = params.id ;  
    const listing = await prisma.listing.delete({ where: { id } });
    const refresh = await prisma.listing.findMany();
      return new Response(JSON.stringify(listing), { status: 200 })
    } catch (error) {
      return response.status(500).json({ message: "Error deleting listing" });
    }
};