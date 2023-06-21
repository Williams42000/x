"use client";
import React, { useEffect, useState } from 'react';
import { Listing } from '@/app/types/models';

interface ListingDetailsProps {
  id: any;
}

const ListingDetails = ({ id }: ListingDetailsProps) => {
  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    const fetchListing = async () => {
    try {
      const response = await fetch(`/api/admin/listings/${id}`, {
        method: "GET"
      });
      if (response.ok) {
        const listing = await response.json();
        setListing(listing); 
      }
    }
    catch (error: any) {
    console.log(error);
    }
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div className="py-2 px-4 text-indigo-500 font-semibold">Loading ...</div>;
  }

return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-indigo-500 mb-4">{listing?.title}</h2>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <tbody>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Titre</td>
            <td className="py-2 px-4">{listing?.title}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Catégorie</td>
            <td className="py-2 px-4">{listing?.category}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Description</td>
            <td className="py-2 px-4">{listing?.description}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Prix</td>
            <td className="py-2 px-4">{listing?.price}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Location</td>
            <td className="py-2 px-4">{listing?.locationValue}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Nombre de salles de bain</td>
            <td className="py-2 px-4">{listing?.bathroomCount}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Nombre maximum d&apos;invités</td>
            <td className="py-2 px-4">{listing?.guestCount}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Nombre de chambres</td>
            <td className="py-2 px-4">{listing?.roomCount}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">ID du propriétaire</td>
            <td className="py-2 px-4">{listing?.userId}</td>
          </tr>
          <tr className="border-b shadow-md">
            <td className="py-2 px-4 text-indigo-500 font-semibold">Photo</td>
            <td className="py-2 px-4"><img src={listing?.imageSrc} width={300} height={300} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListingDetails;
