
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/app/libs/prismadb";
import { redirect } from "next/dist/server/api-utils";


export const DELETE = async (request:NextApiRequest, { params }: { params: any }, response:NextApiResponse) => {
  try {
    const id = params.id ;  
    const user = await prisma.user.delete({ where: { id } });
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
      return response.status(500).json({ message: "Error deleting user" });
    }
};