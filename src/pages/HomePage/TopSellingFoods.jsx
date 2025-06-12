import React, { use } from "react";
import TopFoodCard from "./TopFoodCard";

const TopSellingFoods = ({ toSellingFoods }) => {
  const topFoods = use(toSellingFoods);
  return (
    <div className="containerr pt-24">
      <h2 className="font-semibold capitalize text-3xl pb-10 text-center ">
        top-selling Food
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {topFoods?.map((item) => (
          <TopFoodCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingFoods;
