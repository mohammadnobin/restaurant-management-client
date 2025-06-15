// import React, { use } from 'react';

// const OrderList = ({myOrders}) => {
//     const data = use(myOrders)
//     console.log(data.data)
//     return (
//         <div>
//             this is order list
//         </div>
//     );
// };

// export default OrderList;



// import React, { use } from 'react';

// const OrderList = ({ myOrders }) => {
//   const { data: orders } = use(myOrders);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-orange-600 mb-6">🛒 My Orders</h2>

//       {orders.length === 0 ? (
//         <p className="text-gray-500">You have not placed any orders yet.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg">
//             <thead className="bg-orange-100 text-left">
//               <tr>
//                 <th className="py-3 px-4 border-b">#</th>
//                 <th className="py-3 px-4 border-b">Food Name</th>
//                 <th className="py-3 px-4 border-b">Quantity</th>
//                 <th className="py-3 px-4 border-b">Price</th>
//                 <th className="py-3 px-4 border-b">Buyer</th>
//                 <th className="py-3 px-4 border-b">Email</th>
//                 <th className="py-3 px-4 border-b">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, index) => (
//                 <tr key={order._id} className="hover:bg-orange-50">
//                   <td className="py-3 px-4 border-b">{index + 1}</td>
//                   <td className="py-3 px-4 border-b">{order.food_name}</td>
//                   <td className="py-3 px-4 border-b">{order.order_quantity}</td>
//                   <td className="py-3 px-4 border-b">৳ {order.price}</td>
//                   <td className="py-3 px-4 border-b">{order.buyer_name}</td>
//                   <td className="py-3 px-4 border-b">{order.buyer_email}</td>
//                   <td className="py-3 px-4 border-b">
//                     {new Date(order.date).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderList;


import React, { use } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const OrderList = ({ myOrders }) => {
 const { data: orders } = use(myOrders);

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
                  <th className="px-4 py-3 text-left text-base font-semibold">Image</th>
                  <th className="px-4 py-3 text-left text-base font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-base font-semibold">Price</th>
                  <th className="px-4 py-3  text-base text-center font-semibold">Order Quantity</th>
                  <th className="px-4 py-3 text-center text-base font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {orders.map((food) => (
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
                    <td className="px-4 py-3 text-center">{food.order_quantity}</td>
                    <td className="px-4 py-3 text-center">
                        <button className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition">
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
            {orders.map((food) => (
              <div key={food._id} className="bg-white rounded-lg shadow border border-orange-200 p-4 space-y-3">
                <div className="flex items-center gap-4">
                  <img
                    src={food.food_image}
                    alt={food.food_name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-600">{food.food_name}</h3>
                    <p className="text-sm text-gray-700">Price: ${food.price}</p>
                    <p className="text-sm text-gray-700">Quantity: {food.order_quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                    <button className="inline-flex cursor-pointer items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition">
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
