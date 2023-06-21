import React from 'react';
import Link from 'next/link';
import { getAllLUsers} from '../../libs/admin';

const users = async () => {
  const users = await getAllLUsers();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-indigo-500 mb-4">Utilisateurs</h1>
      <table className="min-w-full bg-white rounded-lg shadow-xl">
        <thead>
          <tr>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Nom</th>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Courriel</th>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Rôle</th>
            <th className="bg-indigo-500 text-white py-2 px-4 border border-indigo-500">Détails</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-indigo-500 py-2 px-4">{user.name}</td>
              <td className="border border-indigo-500 py-2 px-4">{user.email}</td>
              <td className="border border-indigo-500 py-2 px-4">{user.role}</td>
              <td className="border border-indigo-500 py-2 px-4 flex justify-center items-center">
                  <Link className="bg-indigo-500 rounded hover:bg-indigo-600 text-white py-1 px-3 transition-colors duration-300" href={`/admin/users/${user.id}`}>Détails</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br />
    </div>
  );
};

export default users;
