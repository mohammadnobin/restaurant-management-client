// // all foods page here
// import React, { useEffect, useState } from "react";
// import PagesBanner from "../Shared/PagesBanner";
// import TopFoodCard from "../HomePage/TopFoodCard";
// import axios from "axios";

// const AllFoodsPage = () => {
//   const [search, setSearch] = useState('');
//   const [allFoods, setAllFoods] = useState([])
//   useEffect(()=>{
//     axios(`${import.meta.env.VITE_API_URL}/all_foods?searchparams=${search}`)
//     .then(res => setAllFoods(res.data))
//   },[search])
//   return (
//     <div className="containerr pt-12">
//       <title>All Foods</title>
//       <PagesBanner title="All foods " />
//       <div className="max-w-md mx-auto mb-8">
//          <input
//               className="w-full px-4 py-2 border-2 dark:text-white dark:placeholder:text-white border-orange rounded-lg shadow-sm focus:outline-none "
//               type="text"
//               placeholder="Search Product"
//               name="food_name"
//               required
//               onChange={(e)=>setSearch(e.target.value)}
//             />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-6">
//         {allFoods.map((item) => (
//           <TopFoodCard key={item._id} data={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllFoodsPage;


import React, { useEffect, useState } from "react";
import PagesBanner from "../Shared/PagesBanner";
import TopFoodCard from "../HomePage/TopFoodCard";
import axios from "axios";

const AllFoodsPage = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // sorting state
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_URL}/all_foods?searchparams=${search}&sort=${sortOrder}`
    ).then((res) => setAllFoods(res.data));
  }, [search, sortOrder]);

  return (
    <div className="containerr pt-12">
      <title>All Foods</title>
      <PagesBanner title="All Foods" />

      {/* Search & Sort */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <input
          className="w-full md:w-1/2 px-4 py-2 border-2 dark:text-white dark:placeholder:text-white border-orange rounded-lg shadow-sm focus:outline-none"
          type="text"
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort */}
        <select
          className="w-full md:w-1/3 px-4 py-2 border-2 dark:text-white border-orange rounded-lg shadow-sm focus:outline-none"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {allFoods.map((item) => (
          <div key={item._id} className="h-full">
            <TopFoodCard data={item} className="h-full flex flex-col" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoodsPage;
