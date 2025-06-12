import React, { use, useState } from 'react';
import { FaEdit } from "react-icons/fa";

const MyFoodsList = ({ myaddedFood }) => {
    const data = use(myaddedFood)
  const [selected, setSelected] = useState(null);

  const handleEditClick = (food) => {
    console.log("Edit food:", food);
    setSelected(food); // future: open modal or redirect to update page
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-orange-600">🍽️ My Added Foods</h2>

      {data?.length === 0 ? (
        <p className="text-gray-500">No food items added yet.</p>
      ) : (
        <table className="min-w-full bg-white border border-orange-300 rounded shadow-md">
          <thead className="bg-orange-100 text-orange-800">
            <tr>
              <th className="px-4 py-3 border-b text-left">Image</th>
              <th className="px-4 py-3 border-b text-left">Name</th>
              <th className="px-4 py-3 border-b text-left">Price</th>
              <th className="px-4 py-3 border-b text-left">Quantity</th>
              <th className="px-4 py-3 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food) => (
              <tr key={food._id} className="hover:bg-orange-50 transition">
                <td className="px-4 py-3 border-b">
                  <img
                    src={food.food_image}
                    alt={food.food_name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b">{food.food_name}</td>
                <td className="px-4 py-3 border-b">৳{food.price}</td>
                <td className="px-4 py-3 border-b">{food.quantity}</td>
                <td className="px-4 py-3 border-b text-center">
                  <button
                    onClick={() => handleEditClick(food)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
                  >
                    <FaEdit /> Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyFoodsList;
