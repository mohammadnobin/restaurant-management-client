import React from "react";
import { Link, useLoaderData } from "react-router";

const AllFoodsPage = () => {
  const data = useLoaderData();
  return (
    <div className="containerr">
      this is AllFoodsPage
      <div className="grid grid-cols-4">


      {data.map((item) => (
        <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.food_name}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <p>{item.parches_count}</p>
            <div className="card-actions justify-end">
                <Link to={`/single_food/${item._id}`}>
              <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
          </div>
        </div>
      ))}
            </div>
    </div>
  );
};

export default AllFoodsPage;
