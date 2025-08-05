// all foods page here
import React, { useEffect, useState } from "react";
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
    <div className="containerr pt-12">
      <title>All Foods</title>
      <PagesBanner title="All foods " />
      <div className="max-w-md mx-auto mb-8">
         <input
              className="w-full px-4 py-2 border-2 dark:text-white dark:placeholder:text-white border-orange rounded-lg shadow-sm focus:outline-none "
              type="text"
              placeholder="Search Product"
              name="food_name"
              required
              onChange={(e)=>setSearch(e.target.value)}
            />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {allFoods.map((item) => (
          <TopFoodCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AllFoodsPage;
