// top selling foods
import React, { use } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router";

const TopSellingFoods = ({ toSellingFoods }) => {
  const topFoods = use(toSellingFoods);
  return (
    <div className="containerr pt-24">
      <h2 className="font-semibold capitalize text-3xl dark:text-white pb-10 text-center ">
        top-selling Food
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
        {topFoods?.map((item) => (
          <TopFoodCard key={item._id} data={item} />
        ))}
      </div>
      <div className="text-center">
              <Link to="/all_foods">
          <button className="mt-3.5 md:mt-10 py-3 px-8 sm:px-10 md:px-12 text-lg sm:text-xl font-semibold bg-orange hover:bg-white border-2 hover:text-orange cursor-pointer hover:border-orange  text-white rounded-2xl transition duration-300">
            See All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSellingFoods;
