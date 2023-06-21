import Container from "../Container";
import Logo from "../navbar/Logo";
import AdminLogout from "./Adminlogout";
import { SafeUser } from "@/app/types";
import Link from "next/link";
import users from "../../admin/users/page"
import rentals from "../../admin/rentals/page"

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const AdminNavbar: React.FC<NavbarProps> = ({
    currentUser,
}) => {
  return (
    <nav className="bg-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
          <a href="#" className="text-white font-bold text-lg"><Logo/></a>
          </div>

          <div className="space-x-4">
          <Link className="text-white hover:text-gray-300" href={`/admin/rentals/`}>Annonces</Link>
          <Link className="text-white hover:text-gray-300" href={`/admin/users/`}>Membres</Link>
          
          <AdminLogout currentUser={currentUser} />
          </div>
        </div>
      </div>
</nav>


    );
}
export default AdminNavbar;