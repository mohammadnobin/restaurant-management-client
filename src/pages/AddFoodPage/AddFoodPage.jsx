// add food page code here
import React from "react";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import useMyaddedFoodApi from "../../api/useMyaddedFoodApi";

const AddFoodPage = () => {
  const { user } = UseAuth();
  const {addFoodPromise} = useMyaddedFoodApi()
  const handleFoodAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFoods = Object.fromEntries(formData.entries());
    newFoods.Purchase_count = 0;


    addFoodPromise(newFoods)
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "successfully added food",
            icon: "success",
          });
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Failed to add food",
          icon: "error",
        });
      });

  };
  return (
    <div className="containerr">
      <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 pt-10 text-center">
        🍽️ You Can add Food
      </h2>
      <div className="lg:w-2/3 mx-auto mt-5 p-8 border border-orange rounded-2xl ">
        <form
          onSubmit={handleFoodAdd}
          className="md:grid md:space-y-0 space-y-4 grid-cols-2  gap-6"
        >
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Food Name
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white "
              type="text"
              placeholder="Food Name"
              name="food_name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Food Image
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
              type="text"
              placeholder="Food Image"
              name="food_image"
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
              defaultValue=""
              required
            >
              <option className="text-black" value="" disabled>
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
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
              type="text"
              placeholder="Food Origin (Country)"
              name="origin"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Quantity
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
              type="text"
              placeholder="Quantity"
              name="quantity"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Price{" "}
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
              type="text"
              placeholder="Price"
              name="price"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Description{" "}
            </label>
            <textarea
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
              type="text"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Name
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white dark:text-white"
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
              Email
            </label>
            <input
              className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white dark:text-white"
              type="text"
              defaultValue={user?.email}
              readOnly
              name="email"
            />
          </div>
          <div className="col-span-2">
            <button
              className="bg-orange w-full py-4 text-xl text-white font-bold rounded-2xl cursor-pointer"
              type="submit"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodPage;

// import React from "react";
// import UseAuth from "../../hooks/UseAuth";
// import Swal from "sweetalert2";

// const AddFoodPage = () => {
//   const { user } = UseAuth();

//   const handleFoodAdd = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const newFoods = Object.fromEntries(formData.entries());
//     newFoods.purchase_count =0;

//     fetch(`${import.meta.env.VITE_API_URL}/add_foods`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newFoods),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Good job!",
//             text: "Successfully added food",
//             icon: "success",
//           });
//           form.reset(); // ✅ Reset form after successful submission
//         }
//       });
//   };

//   return (
//     <div className="containerr">
//       <div className="lg:w-2/3 mx-auto my-24 p-8 border border-orange rounded-2xl">
//         <form
//           onSubmit={handleFoodAdd}
//           className="md:grid md:space-y-0 space-y-4 grid-cols-2 gap-6"
//         >
//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Food Name
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="text"
//               placeholder="Enter food name"
//               name="food_name"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Food Image URL
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="url"
//               placeholder="Image URL"
//               name="food_image"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Food Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               className="border-orange text-steel-gray border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none"
//               defaultValue=""
//               required
//             >
//               <option value="" disabled>
//                 Select a category
//               </option>
//               <option value="fruits">Fruits</option>
//               <option value="vegetables">Vegetables</option>
//               <option value="meat">Meat</option>
//               <option value="snacks">Snacks</option>
//               <option value="drinks">Drinks</option>
//               <option value="desserts">Desserts</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Food Origin (Country)
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="text"
//               placeholder="Enter country of origin"
//               name="origin"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Quantity
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="number"
//               placeholder="Enter quantity (pieces)"
//               name="quantity"
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Price
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="number"
//               placeholder="Enter price in Taka"
//               name="price"
//               required
//             />
//           </div>

//           <div className="flex flex-col col-span-2">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Description
//             </label>
//             <textarea
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               name="description"
//               placeholder="Write a short description..."
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Seller Name
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="text"
//               defaultValue={user?.displayName}
//               readOnly
//               name="name"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold text-lg pb-1 md:text-2xl text-steel-gray">
//               Seller Email
//             </label>
//             <input
//               className="border-orange border-2 rounded-2xl py-3 px-4 focus:border-orange outline-none dark:placeholder:text-white dark:text-white"
//               type="email"
//               defaultValue={user?.email}
//               readOnly
//               name="email"
//             />
//           </div>

//           <div className="col-span-2">
//             <button
//               className="bg-orange w-full py-4 text-xl text-white font-bold rounded-2xl cursor-pointer hover:bg-orange-600 transition"
//               type="submit"
//             >
//               Add Food
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFoodPage;
