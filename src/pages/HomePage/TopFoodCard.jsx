// top food card 
import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const TopFoodCard = ({ data }) => {
  const {
    _id,
    quantity,
    price,
    food_name,
    food_image,
  } = data;

  return (
    <div className="bg-white dark:bg-dark-black border-white border-2 dark:border-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition duration-300 p-4">
      <img
        className="w-full h-64 object-cover rounded-2xl"
        src={food_image}
        alt={food_name}
      />

      <div className="pt-4 px-2 text-center">


        <div className="flex justify-between text-sm text-gray-600 mt-4">
                  <h2 className="text-xl font-semibold dark:text-white text-gray-800 mb-1">
          {food_name}
        </h2>
        <p className="text-orange  text-lg font-bold mb-2">${price}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-4">
          <p className="font-medium  dark:text-white ">
            Available:{" "}
            <span className="text-gray-700 font-bold dark:text-white  " >{quantity} items </span>{" "}
          </p>
          <span className="flex items-center text-yellow-500 gap-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </div>

        <Link to={`/single_food/${_id}`}>
          <button className="mt-5 w-full py-2 cursor-pointer bg-orange hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoodCard;
