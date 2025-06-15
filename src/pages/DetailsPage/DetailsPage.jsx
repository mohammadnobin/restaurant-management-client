import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { AiFillStar } from 'react-icons/ai';
import { MdCategory, MdOutlineAttachMoney } from 'react-icons/md';
import { FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const DetailsPage = () => {
  const data = useLoaderData();

  const {
    food_name,
    price,
    food_image,
    category,
    Purchase_count,
    quantity,
    origin,
    description,
    email,
    _id
  } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white shadow-md rounded-3xl p-8">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-[400px] object-cover rounded-2xl shadow"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-orange-600">{food_name}</h1>
          <p className="text-gray-600 text-lg">{description}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              <AiFillStar className="text-yellow-500" /> Sold: {Purchase_count}
            </span>
            <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
              <MdOutlineAttachMoney /> Price: {price}
            </span>
            <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              <MdCategory /> Category: {category}
            </span>
            <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              Quantity: {quantity}
            </span>
            <span className="flex items-center gap-2 bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
              <FaMapMarkerAlt /> Origin: {origin}
            </span>
          </div>

          <p className="pt-4 text-sm text-gray-500">
            <strong>Posted by:</strong> {email}
          </p>
          <Link to={`/purchase/${_id}`}>
          <button className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition duration-300 text-lg">
            <FaShoppingCart /> Purchase Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
