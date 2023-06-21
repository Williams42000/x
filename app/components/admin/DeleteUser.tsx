"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useState } from 'react';


const DeleteUser =  ({ id }:{ id: any }) => {
  const router = useRouter();

  const handleDelete = async (id:any) => 
  {

    try {
      const response = await fetch(`/api/admin/users/delete/${id}`, {
        method: "DELETE"
      });
      console.log(response.ok)
      if (response.ok) {
      toast.success('Supprimé avec succès');
      router.push('/admin/users');
      }
    }
    catch (error: any) {
    console.log(error);
    }
  }
  return (
    <button
      className="bg-red-500 hover:bg-red-600 text-white mx-5 py-3 px-6 rounded-lg shadow-lg"
      onClick={() => handleDelete(id)}>
      Supprime
    </button>
  )
}

export default DeleteUser
