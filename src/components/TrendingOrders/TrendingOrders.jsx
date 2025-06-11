import React from "react";
import TrendingCard from "./TrendingCard";
import masrum1 from '../../assets/menuCategory/menucard1.png'
import masrum2 from '../../assets/menuCategory/menucard2.png'
import masrum3 from '../../assets/menuCategory/menucard3.png'
import masrum4 from '../../assets/menuCategory/menucard4.png'

const TrendingOrders = () => {
  return (
    <div className="containerr">
      <h2 className="font-semibold text-3xl pb-10 text-center ">
        Trending orders
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-6">
        <TrendingCard price='7.49' title='Mushroom' image={masrum1} />
        <TrendingCard price='7.29' title='Spaghetti' image={masrum2} />
        <TrendingCard price='5.49' title='Vegetable' image={masrum3} />
        <TrendingCard price='6.49' title='Sweets' image={masrum4} />
      </div>
    </div>
  );
};

export default TrendingOrders;
