// import React, { use } from 'react';
// import { FaEdit } from "react-icons/fa";
// import { Link } from 'react-router';

// const MyFoodsList = ({ myaddedFood }) => {
//     const data = use(myaddedFood)
//   return (
//     <div className="p-6 overflow-x-auto">
//       <h2 className="text-xl font-bold mb-4 text-orange-600">🍽️ My Added Foods</h2>

//       {data?.length === 0 ? (
//         <p className="text-gray-500">No food items added yet.</p>
//       ) : (
//         <table className="min-w-full bg-white border border-orange-300 rounded shadow-md">
//           <thead className="bg-orange-100 text-orange-800">
//             <tr>
//               <th className="px-4 py-3 border-b text-left">Image</th>
//               <th className="px-4 py-3 border-b text-left">Name</th>
//               <th className="px-4 py-3 border-b text-left">Price</th>
//               <th className="px-4 py-3 border-b text-left">Quantity</th>
//               <th className="px-4 py-3 border-b text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food) => (
//               <tr key={food._id} className="hover:bg-orange-50 transition">
//                 <td className="px-4 py-3 border-b">
//                   <img
//                     src={food.food_image}
//                     alt={food.food_name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                 </td>
//                 <td className="px-4 py-3 border-b">{food.food_name}</td>
//                 <td className="px-4 py-3 border-b">${food.price}</td>
//                 <td className="px-4 py-3 border-b">{food.quantity}</td>
//                 <td className="px-4 py-3 border-b text-center">
//                   <Link to={`/update_food/${food._id}`}>
//                   <button
//                     className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
//                   >
//                     <FaEdit /> Update
//                   </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MyFoodsList;



import React, { use } from 'react';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router';

const MyFoodsList = ({ myaddedFood }) => {
  const data = use(myaddedFood);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6 text-center">
        🍽️ My Added Foods
      </h2>

      {data?.length === 0 ? (
        <p className="text-gray-500 text-center">No food items added yet.</p>
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
                  <th className="px-4 py-3 text-left text-base font-semibold">Quantity</th>
                  <th className="px-4 py-3 text-center text-base font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {data.map((food) => (
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
                    <td className="px-4 py-3">{food.quantity}</td>
                    <td className="px-4 py-3 text-center">
                      <Link to={`/update_food/${food._id}`}>
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition">
                          <FaEdit /> Update
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {data.map((food) => (
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
                    <p className="text-sm text-gray-700">Quantity: {food.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Link to={`/update_food/${food._id}`}>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition">
                      <FaEdit /> Update
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyFoodsList;



//   {
//     "_id": "8",
//     "food_name": "Tomato",
//     "food_image": "https://i.ibb.co/SQzFpJG/tomato.jpg",
//     "category": "vegetables",
//     "origin": "Bangladesh",
//     "quantity": 40,
//     "price": 70,
//     "description": "Fresh red tomatoes for cooking.",
//     "name": "Rubel",
//     "email": "rubel@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "10",
//     "food_name": "Samosa",
//     "food_image": "https://i.ibb.co/BfW4Mf6/samosa.jpg",
//     "category": "snacks",
//     "origin": "India",
//     "quantity": 35,
//     "price": 30,
//     "description": "Spicy samosas filled with potatoes.",
//     "name": "Lamia",
//     "email": "lamia@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "11",
//     "food_name": "Coca-Cola",
//     "food_image": "https://i.ibb.co/sK4hZrr/coke.jpg",
//     "category": "drinks",
//     "origin": "USA",
//     "quantity": 60,
//     "price": 35,
//     "description": "Chilled Coca-Cola soft drink.",
//     "name": "Rony",
//     "email": "rony@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "12",
//     "food_name": "Vanilla Ice Cream",
//     "food_image": "https://i.ibb.co/VYM0tkM/ice-cream.jpg",
//     "category": "desserts",
//     "origin": "Italy",
//     "quantity": 22,
//     "price": 120,
//     "description": "Creamy vanilla flavored ice cream.",
//     "name": "Amit",
//     "email": "amit@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "13",
//     "food_name": "Mango",
//     "food_image": "https://i.ibb.co/FbxThLM/mango.jpg",
//     "category": "fruits",
//     "origin": "Bangladesh",
//     "quantity": 45,
//     "price": 80,
//     "description": "Juicy mangoes from Rajshahi.",
//     "name": "Noman",
//     "email": "noman@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "14",
//     "food_name": "Spinach",
//     "food_image": "https://i.ibb.co/ZYn0VTC/spinach.jpg",
//     "category": "vegetables",
//     "origin": "Bangladesh",
//     "quantity": 28,
//     "price": 45,
//     "description": "Green spinach rich in iron.",
//     "name": "Sadia",
//     "email": "sadia@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "16",
//     "food_name": "Nachos",
//     "food_image": "https://i.ibb.co/wQnZKnR/nachos.jpg",
//     "category": "snacks",
//     "origin": "Mexico",
//     "quantity": 22,
//     "price": 200,
//     "description": "Crispy nachos with cheese dip.",
//     "name": "Karim",
//     "email": "karim@gmail.com",
//     "purchase_count": 0
//   },
//   {
//     "_id": "17",
//     "food_name": "Cold Coffee",
//     "food_image": "https://i.ibb.co/wKDgFJt/cold-coffee.jpg",
//     "category": "drinks",
//     "origin": "Italy",
//     "quantity": 15,
//     "price": 180,
//     "description": "Iced coffee with milk and sugar.",
//     "name": "Arifa",
//     "email": "arifa@gmail.com",
//     "purchase_count": 0
//   }
// ]
