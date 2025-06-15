import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import PagesBanner from "../Shared/PagesBanner";
import TopFoodCard from "../HomePage/TopFoodCard";
import axios from "axios";

const AllFoodsPage = () => {
  const [search, setSearch] = useState('');
  const [allFoods, setAllFoods] = useState([])
  useEffect(()=>{
    axios(`${import.meta.env.VITE_API_URL}/all_foods?searchparams=${search}`)
    .then(res => setAllFoods(res.data))
  },[search])
  return (
    <div className="containerr">
      <title>All Foods</title>
      <PagesBanner title="All foods " />
            {/* ✅ Search Input */}
      <div className="max-w-md mx-auto mb-8">
         <input
              className="w-full px-4 py-2 border-2 border-orange rounded-lg shadow-sm focus:outline-none "
              type="text"
              placeholder="Search Product"
              name="food_name"
              required
              onChange={(e)=>setSearch(e.target.value)}
            />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allFoods.map((item) => (
          <TopFoodCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AllFoodsPage;



// import React, { useState } from "react";
// import { useLoaderData } from "react-router";
// import PagesBanner from "../Shared/PagesBanner";
// import TopFoodCard from "../HomePage/TopFoodCard";

// const AllFoodsPage = () => {
//   const data = useLoaderData();
//   const [searchTerm, setSearchTerm] = useState("");

//   // ফিল্টারড রেজাল্ট
//   const filteredFoods = data.filter((item) =>
//     item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="containerr">
//       <PagesBanner title="All Foods" />

//       {/* ✅ Search Input */}
//       <div className="max-w-md mx-auto mb-8">
//         <input
//           type="text"
//           placeholder="Search food by name..."
//           className="w-full px-4 py-2 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* ✅ Filtered Cards */}
//       {filteredFoods.length === 0 ? (
//         <p className="text-center text-gray-500">No foods found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {filteredFoods.map((item) => (
//             <TopFoodCard key={item._id} data={item} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllFoodsPage;
