'use client';

import { PacmanLoader} from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PacmanLoader

        size={30}
        speedMultiplier={3}
        color="#5bc9e1"
      />
    </div>
   );
}
 
export default Loader;