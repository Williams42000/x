
import React from 'react'
import Link from 'next/link'
import ListingDetails from '../../../components/admin/ListingDetails'
import DeleteListing from '@/app/components/admin/DeleteListing'

interface InputProps {
  params: {
    id: string;
  };
}


const Listing = ({ params: {id} }: InputProps) => {
  return (
    <div>
      <ListingDetails id={id} />
      <div className="flex justify-start items-start p-8">
        <Link className="bg-indigo-500 mx-7 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg" href="admin/rentals">Retour les logements</Link>
        <DeleteListing id={id}/>
      </div>
    </div>
  ) 
}

export default Listing
