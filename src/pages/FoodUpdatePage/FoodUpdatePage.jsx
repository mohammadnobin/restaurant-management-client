import React from "react";
import UseAuth from "../../hooks/UseAuth";
import { useLoaderData } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const FoodUpdatePage = () => {
  const foodData = useLoaderData();
  const {
    _id,
    quantity,
    price,
    origin,
    food_name,
    food_image,
    description,
    category,
  } = foodData;
  const { user } = UseAuth();
  const handleFoodAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateFood = Object.fromEntries(formData.entries());
    axios
      .put(`${import.meta.env.VITE_API_URL}/update_food/${_id}`, updateFood)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully Update food",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="containerr pt-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 pb-10 text-center">
        🍽️ You Can add Food
      </h2>
      <div className="lg:w-2/3 mx-auto  p-8 border border-orange rounded-2xl">
        <form
          onSubmit={handleFoodAdd}
          className="md:grid md:space-y-0 space-y-4 grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Food Name
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="text"
              placeholder="Enter food name"
              name="food_name"
              defaultValue={food_name}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Food Image URL
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="url"
              placeholder="Image URL"
              name="food_image"
              defaultValue={food_image}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Food Category
            </label>
            <select
              id="category"
              name="category"
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white "
              defaultValue={category}
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option className="text-black" value="fruits">Fruits</option>
              <option className="text-black" value="vegetables">Vegetables</option>
              <option className="text-black" value="meat">Meat</option>
              <option className="text-black" value="snacks">Snacks</option>
              <option className="text-black" value="drinks">Drinks</option>
              <option className="text-black" value="desserts">Desserts</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Food Origin (Country)
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="text"
              placeholder="Enter country of origin"
              name="origin"
              defaultValue={origin}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Quantity
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="text"
              placeholder="Enter quantity (pieces)"
              name="quantity"
              defaultValue={quantity}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Price
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="text"
              placeholder="Enter price in Taka"
              name="price"
              defaultValue={price}
              required
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Description
            </label>
            <textarea
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              name="description"
              defaultValue={description}
              placeholder="Write a short description..."
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Seller Name
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="name"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Seller Email
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:text-white"
              type="email"
              defaultValue={user?.email}
              readOnly
              name="email"
            />
          </div>

          <div className="col-span-2">
            <button
              className="bg-orange w-full py-4 text-xl text-white font-bold rounded-2xl cursor-pointer hover:bg-orange-600 transition"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodUpdatePage;
