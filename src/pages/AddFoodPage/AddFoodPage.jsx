import React from "react";
import UseAuth from "../../hooks/UseAuth";

const AddFoodPage = () => {
  const {user} = UseAuth()
  const handleFoodAdd =(e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }
  return (
    <div className="containerr">
      <div className="lg:w-2/3 mx-auto my-24 p-8 border border-orange rounded-2xl ">
        <form onSubmit={handleFoodAdd} className="md:grid md:space-y-0 space-y-4 grid-cols-2  gap-6">
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Food Name</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none "
              type="text"
              placeholder="Food Name"
              name="food_name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Food Image</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              placeholder="Food Image"
              name="food_image"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Food Category</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              placeholder="Food Category"
              name="category"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Food Origin (Country)</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              placeholder="Food Origin (Country)"
              name="origin"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Quantity</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              placeholder="Quantity"
              name="quantity"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Price </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              placeholder="Price"
              name="price"
            />
          </div>
            <div className="flex flex-col col-span-2">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Description </label>
            <textarea
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              name="description"
             placeholder="Description"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Name</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              defaultValue={user?.email}
              readOnly
              name='email'
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">Email</label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="name"
            />
          </div>
          <div className="col-span-2">
            <button className="bg-orange w-full py-4 text-xl text-white font-bold rounded-2xl cursor-pointer" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodPage;
