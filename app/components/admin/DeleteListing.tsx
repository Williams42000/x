"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const DeleteListing =  ({ id }:{ id: any }) => {
  const router = useRouter();
  const handleDelete = async (id:any) => 
    {
    try {
      const response = await fetch(`/api/admin/listings/delete/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        toast.success('Supprimé avec succès'); 
        router.push('/admin/rentals')
      }
    }
    catch (error: any) {
      console.log(error);
    }
  }
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white mx-5 py-3 px-6 rounded-lg shadow-lg" onClick={() => handleDelete(id)}>Supprimer</button>
  )
}

export default DeleteListing
