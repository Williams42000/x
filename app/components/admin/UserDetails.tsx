"use client";
import React, { useEffect, useState } from 'react';
import { User } from '@/app/types/models';

interface UserDetailsProps {
  id: any;
}

const UserDetails = ({ id }: UserDetailsProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchListing = async () => {
    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "GET"
      });
      if (response.ok) {
        const listing = await response.json();
        setUser(listing); 
      }
    }
    catch (error: any) {
    console.log(error);
    }
    };

    fetchListing();
  }, [id]);

  if (!user) {
    return <div className="py-2 px-4 text-indigo-500 font-semibold">Loading ... </div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-indigo-500 mb-4">Informations utilisateur</h2>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <tbody>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Nom</td>
            <td className="py-2 px-4">{user?.name}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Courriel</td>
            <td className="py-2 px-4">{user?.email}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Rôle</td>
            <td className="py-2 px-4">{user?.role}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">ID</td>
            <td className="py-2 px-4">{user?.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
