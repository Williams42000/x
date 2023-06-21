
import React from 'react'
import Link from 'next/link'
import UserDetails from '@/app/components/admin/UserDetails'
import DeleteUser from '@/app/components/admin/DeleteUser'

interface InputProps {
  params: {
    id: string;
  };
}

const user = ({ params: {id} }: InputProps) => {
  return (
    <div>
      <UserDetails id={id} /> 
      <div className="flex justify-start items-start p-8">
        <Link className="bg-indigo-500 mx-7 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg" href="admin/users">Retour aux utilisateurs</Link>
        <DeleteUser id={id}/>
      </div>
    </div>
  ) 
}

export default user
