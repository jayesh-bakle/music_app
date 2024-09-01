// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { UserData } from "../context/User";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { logoutUser } = UserData();
//   return (
//     <>
//       <div className="w-full flex justify-between items-center font-semibold">
//         <div className="flex items-center gap-2">
//           <img
//             src={assets.arrow_left}
//             className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
//             alt=""
//             onClick={() => navigate(-1)}
//           />
//           <img
//             src={assets.arrow_right}
//             className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
//             alt=""
//             onClick={() => navigate(+1)}
//           />
//         </div>
//         <div className="flex items-center gap-4">
//           {/* <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
//             Explore Premium
//           </p>
//           <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
//             Install App
//           </p> */}
//           <p
//             className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
//             onClick={logoutUser}
//           >
//             Logout
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center gap-2 mt-4">
//         <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
//           All 
//         </p>
//         {/* <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
//           Music
//         </p>
//         <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
//           Podcasts
//         </p> */}
//         <p
//           onClick={() => navigate("/playlist")}
//           className="bg-black px-4 py-1 rounded-2xl cursor-pointer  md:hidden"
//         >
//           PlayList
//         </p>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { UserData } from "../context/User";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logoutUser } = UserData();
  
  // Determine initial active tab based on the current URL path
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleNavigation = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
            onClick={logoutUser}
          >
            Logout
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            activeTab === "/" ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={() => handleNavigation("/")}
        >
          All
        </p>
        <p
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            activeTab === "/playlist"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => handleNavigation("/playlist")}
        >
          PlayList
        </p>
      </div>
    </>
  );
};

export default Navbar;
