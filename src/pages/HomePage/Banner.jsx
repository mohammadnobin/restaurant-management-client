// import React from "react";

// const Banner = () => {
//   return (
//     <div className="BannerBg bg-no-repeat bg-cover bg-center h-screen">
//       <div className="flex containerr items-center h-screen justify-center flex-col">
//         <h2 className="text-5xl font-semibold text-[#d60231] ">Experience the Taste of Perfection 🍽️</h2>
//         <h1 className="text-7xl py-6 font-bold text-orange">
//           It's The Food You Love
//         </h1>
//         <p className="w-2/3 mx-auto text-center leading-10 text-2xl text-steel-gray">
//          Welcome to your ultimate dining companion. From discovering delicious dishes to managing restaurant operations seamlessly — everything is just a click away.
//         </p>
//         <button className="mt-10 py-4 px-12 text-xl font-bold bg-orange text-white rounded-2xl cursor-pointer">Explore All Foods</button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="BannerBg bg-no-repeat md:bg-cover bg-center h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#d60231] mb-1.5 md:mb-4">
          Experience the Taste of Perfection 🍽️
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold text-orange mb-2.5 md:mb-6 leading-tight">
          It's The Food You Love
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed px-2 md:px-8">
          Welcome to your ultimate dining companion. From discovering delicious
          dishes to managing restaurant operations seamlessly — everything is
          just a click away.
        </p>
        <Link to="/all_foods">
          <button className="mt-3.5 md:mt-10 py-3 px-8 sm:px-10 md:px-12 text-lg sm:text-xl font-semibold bg-orange hover:bg-white border-2 hover:text-orange cursor-pointer hover:border-orange  text-white rounded-2xl transition duration-300">
            Explore All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
