import prisma from './prismadb'
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';


// lister tout logements
export const getAllListings = async() => {
  const listings = await prisma.listing.findMany({});
  return listings;
};

// supprimer une logement
export const deleteListing = async(id:any) => {
  const listing = await prisma.listing.delete({
    where: {
      id
    }
  });
  return listing;
};

// lister une logement
export const getListing = async(id:any) => {
  const listing = await prisma.listing.findUnique({
     where: id
  });
  console.log(listing)
  return listing;
};

export const getUser = async(id:any) => {
  const user= await prisma.user.findUnique({
     where: id
  });
  console.log(user)
  return user;
};

// lister tout les utilisatures
export const getAllLUsers = async() => {
  const users = await prisma.user.findMany({});
  return users;
};

// Modifier utilisature
export const updateUser = async (id:any, updateData:any) => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return user
}

// supprimer un utilisature
export const deleteUser = async(id:any) => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })
  return user
}




export default {
  getAllListings, getListing, deleteListing,
  deleteUser, updateUser, getAllLUsers, getUser
};