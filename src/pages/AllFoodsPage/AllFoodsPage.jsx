import React from "react";
import { Link, useLoaderData } from "react-router";
import PagesBanner from "../Shared/PagesBanner";
import TopFoodCard from "../HomePage/TopFoodCard";

const AllFoodsPage = () => {
  const data = useLoaderData();
  return (
    <div className="containerr">
      <PagesBanner  title='All foods ' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


      {data.map((item) => (
       <TopFoodCard key={item._id} data={item} />
      ))}
            </div>
    </div>
  );
};

export default AllFoodsPage;
