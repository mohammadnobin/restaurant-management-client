import axios from "axios";
import moment from "moment/moment";
import React, { use, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const OrderList = ({ myOrders }) => {
  const data = use(myOrders);
  console.log(data.data);
  const [orders, setOders] = useState(data.data);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`${import.meta.env.VITE_API_URL}/delete_food/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          alert("this is deleted");
        }
         const remainingTips = orders.filter((tip) => tip._id !== id);
                setOders(remainingTips);
      });
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6 text-center">
        🍽️ My Added Order
      </h2>

      {orders?.length === 0 ? (
        <p className="text-gray-500 text-center">No food order added yet.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg border border-orange-300">
            <table className="min-w-full bg-white divide-y divide-orange-200">
              <thead className="bg-orange-100 text-orange-800">
                <tr>
                  <th className="px-4 py-3 text-left text-base font-semibold">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-base font-semibold">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-base font-semibold">
                    Price
                  </th>
                  <th className="px-4 py-3  text-base text-center font-semibold">
                    Order Quantity
                  </th>
                  <th className="px-4 py-3  text-base text-center font-semibold">
                    Order Time
                  </th>
                  <th className="px-4 py-3 text-center text-base font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {orders?.map((food) => (
                  <tr key={food._id} className="hover:bg-orange-50 transition">
                    <td className="px-4 py-3">
                      <img
                        src={food.food_image}
                        alt={food.food_name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    </td>
                    <td className="px-4 py-3">{food.food_name}</td>
                    <td className="px-4 py-3">${food.price}</td>
                    <td className="px-4 py-3 text-center">
                      {food.order_quantity}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {moment(food.date).format(' h:mm A, MMMM Do YYYY')}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(food._id)}
                        className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition"
                      >
                        <MdOutlineDeleteOutline /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {orders?.map((food) => (
              <div
                key={food._id}
                className="bg-white rounded-lg shadow border border-orange-200 p-4 space-y-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={food.food_image}
                    alt={food.food_name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-600">
                      {food.food_name}
                    </h3>
                    <p className="text-sm text-gray-700">
                      Price: ${food.price}
                    </p>
                    <p className="text-sm text-gray-700">
                      Quantity: {food.order_quantity}
                    </p>
                    <p className="text-sm text-gray-700">
                      Order Time:  {moment(food.date).format(' h:mm A, MMMM Do YYYY')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition"
                  >
                    <MdOutlineDeleteOutline /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OrderList;
