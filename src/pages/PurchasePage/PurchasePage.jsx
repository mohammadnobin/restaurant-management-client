// import React from 'react';
// import { useLoaderData } from 'react-router';
// import UseAuth from '../../hooks/UseAuth';
// import axios from 'axios';
// const PurchasePage = () => {
//   const {user} = UseAuth()
//   console.log(user)
//   const data = useLoaderData();
//   const {
//     food_name,
//     price,
//     quantity,
//     food_image,
//     description,
//     origin,
//     category,
//     _id,
//     email,
//     Purchase_count,
//   } = data || {};
//   console.log(data)

//   const handlePurchase = (e) => {
//     e.preventDefault();

//     const orderData = {
//       food_name,
//       price,
//       product_id: _id,
//       order_quantity: 0,
//       buyer_name: user?.displayName,
//       buyer_email: user?.email,
//       date: Date.now()
//     };
    
//     // if (user?.email === email) return alert('tumr product')
//       console.log(orderData)
//     axios.post(`${import.meta.env.VITE_API_URL}/order/${_id}`,orderData)
//     .then(res => console.log(res.data))
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white mt-30 rounded-xl shadow-md  border">
//       <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Purchase Food</h2>

//       <form onSubmit={handlePurchase} className="space-y-4">
//         <div>
//           <label className="block font-medium">Food Name</label>
//           <input
//             type="text"
//             defaultValue={food_name}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Price</label>
//           <input
//             type="text"
//             defaultValue={price}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Quantity</label>
//           <input
//             type="text"
//             defaultValue={quantity}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Buyer Name</label>
//           <input
//             type="text"
//             defaultValue={user?.displayName}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Buyer Email</label>
//           <input
//             type="email"
//             defaultValue={user?.email}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>
//         {
//           quantity == 0 ? 
//           'no product avelable'
//           :

//         <button
//         type="submit"
//         className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
//         >
//           Purchase
//         </button>
//         }
//       </form>
//     </div>
//   );
// };

// export default PurchasePage;



// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';
// import UseAuth from '../../hooks/UseAuth';
// import axios from 'axios';

// const PurchasePage = () => {
//   const { user } = UseAuth();
//   const data = useLoaderData();

//   const {
//     food_name,
//     price,
//     quantity: initialQuantity,
//     food_image,
//     description,
//     origin,
//     category,
//     _id,
//     email,
//     purchase_count: initialPurchaseCount,
//   } = data || {};

//   const [quantity, setQuantity] = useState(initialQuantity);
//   const [purchaseCount, setPurchaseCount] = useState(initialPurchaseCount);

//   const handlePurchase = (e) => {
//     e.preventDefault();

//     const orderData = {
//       food_name,
//       price,
//       product_id: _id,
//       order_quantity: 1,
//       buyer_name: user?.displayName,
//       buyer_email: user?.email,
//       date: Date.now()
//     };

//     axios.post(`${import.meta.env.VITE_API_URL}/order/${_id}`, orderData)
//       .then(res => {
//         if (res.data?.acknowledged || res.data?.modifiedCount > 0) {
//           // Update UI without reload
//           setQuantity(prev => prev - 1);
//           setPurchaseCount(prev => prev + 1);
//         }
//       })
//       .catch(err => {
//         console.error('Purchase failed:', err);
//         alert('Something went wrong');
//       });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white mt-30 rounded-xl shadow-md border">
//       <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Purchase Food</h2>

//       <form onSubmit={handlePurchase} className="space-y-4">
//         <div>
//           <label className="block font-medium">Food Name</label>
//           <input
//             type="text"
//             defaultValue={food_name}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Price</label>
//           <input
//             type="text"
//             defaultValue={price}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Quantity</label>
//           <input
//             type="text"
//             value={quantity}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Purchase Count</label>
//           <input
//             type="text"
//             value={purchaseCount}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Buyer Name</label>
//           <input
//             type="text"
//             defaultValue={user?.displayName}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Buyer Email</label>
//           <input
//             type="email"
//             defaultValue={user?.email}
//             readOnly
//             className="w-full px-4 py-2 border rounded-lg bg-gray-100"
//           />
//         </div>

//         {quantity === 0 ? (
//           <p className="text-red-600 font-semibold text-center">❌ No product available</p>
//         ) : (
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
//           >
//             Purchase
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default PurchasePage;



import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import axios from 'axios';

const PurchasePage = () => {
  const { user } = UseAuth();
  const data = useLoaderData();

  const {
    food_name,
    price,
    quantity: initialQuantity,
    food_image,
    _id,
    purchase_count: initialPurchaseCount,
  } = data || {};

  const [quantity, setQuantity] = useState(initialQuantity);
  const [purchaseCount, setPurchaseCount] = useState(initialPurchaseCount);

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

    axios.post(`${import.meta.env.VITE_API_URL}/order/${_id}`, orderData)
      .then((res) => {
        if (res.data?.acknowledged || res.data?.modifiedCount > 0) {
          setQuantity((prev) => prev - 1);
          setPurchaseCount((prev) => prev + 1);
        }
      })
      .catch((err) => {
        console.error('Purchase failed:', err);
        alert('this is your products');
      });
  };

  return (
    <div className="max-w-4xl  mx-auto mt-32 px-4 md:px-6 lg:px-10">
      <div className="bg-white border rounded-2xl shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-4">🍽️ Purchase Food</h2>
          <form onSubmit={handlePurchase} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Food Name</label>
              <input
                type="text"
                value={food_name}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="text"
                value={`$${price}`}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Available Quantity</label>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Purchases</label>
              <input
                type="text"
                value={purchaseCount}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Buyer Name</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Buyer Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            {quantity === 0 ? (
              <p className="text-center text-red-600 font-semibold mt-4">
                ❌ No product available
              </p>
            ) : (
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Purchase Now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
