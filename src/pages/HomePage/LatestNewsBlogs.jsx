import React from "react";

const LatestNewsBlogs = () => {
  const data = [
    {
      id: 1,
      title: "This So Trendy Restaurant That Everyone",
      image: "https://i.ibb.co.com/Ndq1YH4v/blogs1.jpg",
    },
    {
      id: 2,
      title: "Innovative Hot Chessyraw Make Creator.",
      image: "https://i.ibb.co.com/qKpQTtm/blogs2.jpg",
    },
    {
      id: 3,
      title: "New Restaurant Town Our Ple Award Contract",
      image: "https://i.ibb.co.com/5x1qJM2m/blogs3.jpg",
    },
    {
      id: 4,
      title: "Healthy Fast is Food a Myth or Reality? Heres the",
      image: "https://i.ibb.co.com/r2f4XrDw/blogs4.jpg",
    },
    {
      id: 5,
      title: "Is Fast Food Getting Healthier? Here’s What We’re Doing",
      image: "https://i.ibb.co.com/Ndq1YH4v/blogs1.jpg",
    },
    {
      id: 6,
      title: "In Fast Food Really Getting Healthier? What You Need Know",
      image: "https://i.ibb.co.com/5x1qJM2m/blogs3.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 dark:text-white mb-12">
        Our Latest News & Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-dark-black dark:border dark:border-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                <span>By Barab</span>
                <span>•</span>
                <span>June 30, 2025</span>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 hover:text-orange cursor-pointer transition-colors">
                {item.title}
              </h4>

              <button className="px-5 py-2 bg-orange text-white font-medium rounded-lg hover:bg-white hover:text-orange hover:border-orange border cursor-pointer transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsBlogs;
