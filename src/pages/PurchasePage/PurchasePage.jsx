// import React from 'react';
// import { useLoaderData } from 'react-router';

// const PurchasePage = () => {
//     const data = useLoaderData()
//     console.log(data)
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PurchasePage;



import React from 'react';
import { useLoaderData } from 'react-router';

// ধরুন আপনি লগ ইন ইউজারের নাম ও ইমেইল context বা props থেকে আনছেন
const loggedInUser = {
  name: "Md Nobin", // বাস্তবে context বা firebase থেকে আসবে
  email: "nobin@gmail.com"
};

const PurchasePage = () => {
  const data = useLoaderData();
  const {
    food_name,
    price,
    quantity,
    food_image,
    description,
    origin,
    category,
    Purchase_count,
  } = data || {};

  const handlePurchase = (e) => {
    e.preventDefault();

    const orderData = {
      food_name,
      price,
      quantity,
      buyer_name: loggedInUser.name,
      buyer_email: loggedInUser.email,
      date: Date.now()
    };

    console.log("🛒 Order Submitted:", orderData);

    // এখান থেকে fetch POST করে ডেটাবেজে পাঠান
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-30 rounded-xl shadow-md  border">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Purchase Food</h2>

      <form onSubmit={handlePurchase} className="space-y-4">
        <div>
          <label className="block font-medium">Food Name</label>
          <input
            type="text"
            value={food_name}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium">Price</label>
          <input
            type="text"
            value={price}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium">Buyer Name</label>
          <input
            type="text"
            value={loggedInUser.name}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium">Buyer Email</label>
          <input
            type="email"
            value={loggedInUser.email}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchasePage;
