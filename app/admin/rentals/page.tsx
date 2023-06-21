import React from 'react';
import Link from 'next/link';
import { getAllListings } from '../../libs/admin';

const rentals = async () => {
  const listings = await getAllListings();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-indigo-500 mb-4">Annonces</h1>
      <table className="min-w-full bg-white rounded-lg shadow-xl">
        <thead>
          <tr>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Titre</th>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Propriétaire ID</th>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Emplacement</th>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Détails</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id}>
              <td className="border border-indigo-500 py-2 px-4">{listing.title}</td>
              <td className="border border-indigo-500 py-2 px-4">{listing.userId}</td>
              <td className="border border-indigo-500 py-2 px-4">{listing.locationValue}</td>
              <td className="border border-indigo-500 py-2 px-4 flex justify-center items-center">
                  <Link className="bg-indigo-500 rounded hover:bg-indigo-600 text-white py-1 px-3 transition-colors duration-300" href={`/admin/rentals/${listing.id}`}>Détails</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br />
    </div>
  );
};

export default rentals;
