import React, { useState } from "react";
import { useLoaderData } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import PagesBanner from "../Shared/PagesBanner";
import Swal from "sweetalert2";
import useOrderApi from "../../api/useOrderApi";

const PurchasePage = () => {
  const { user } = UseAuth();
  const data = useLoaderData();
  const { placeOrder } = useOrderApi();

  const { food_name, price, quantity, food_image, _id, email, purchase_count } =
    data || {};
    console.log(quantity)

  const [quantityNum, setQuantity] = useState(quantity);
  const [purchaseCount, setPurchaseCount] = useState(purchase_count);

  const handlePurchase = (e) => {
    e.preventDefault();
    const orderData = {
      food_name,
      food_image,
      price,
      product_id: _id,
      order_quantity: 1,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      date: Date.now(),
    };
if (quantityNum <= 0) {
  return Swal.fire({
    icon: "error",
    title: "Sorry!",
    text: "This product is out of stock.",
    confirmButtonColor: "#f97316",
  });
}

if (user?.email === email) {
  return Swal.fire({
    icon: "warning",
    title: "Oops!",
    text: "This is your own product. You cannot order it!",
    confirmButtonColor: "#f97316", 
  });
}
    placeOrder(_id, orderData)
      .then(data => {
        if (data?.acknowledged || data?.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Order successfully",
            icon: "success",
          });
          setPurchaseCount(prev => prev + 1);
          setQuantity(prev => prev - 1);
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Order failed",
          icon: "error",
        });
      });
  };

  return (
    <div className="containerr pt-10 ">
      <title>Purchase Page</title>
      <PagesBanner title="PurchasePage" />
      <div className="bg-white border-2 border-white dark:bg-dark-black max-w-4xl  mx-auto rounded-2xl shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">
            🍽️ Purchase Food
          </h2>
          <form onSubmit={handlePurchase} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white ">
                Food Name
              </label>
              <input
                type="text"
                value={food_name}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white ">
                Price
              </label>
              <input
                type="text"
                value={`$${price}`}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white ">
                Available Quantity
              </label>
              <input
                type="text"
                value={quantityNum}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white ">
                Total Purchases
              </label>
              <input
                type="text"
                value={purchaseCount}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white ">
                Buyer Name
              </label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white ">
                Buyer Email
              </label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                {quantityNum === 0 ? '❌ No product available' :' Purchase Now'}
               
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
