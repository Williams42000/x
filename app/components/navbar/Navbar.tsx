'use client';

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Typo from "./Typo";

interface NavbarProps {
    currentUser?: SafeUser | null;
    
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser,
}) => {
  console.log({ currentUser });

    return (
        <div className=" fixed w-full bg-gradient-to-r from-yellow-200 via-cyan-200 to-sky-500 z-10 shadow-sm">
             <div 
             className="
             py-4
             border-b [1px]
             "
             >
            <Container>
              <div 
              className="
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
              ">
                <Logo/>

                <Typo />
                
                <UserMenu currentUser={currentUser} />

              </div>
            </Container>

             </div>
             <Categories />
        </div>
    );
}
export default Navbar;