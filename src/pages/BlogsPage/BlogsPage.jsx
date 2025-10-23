import React from "react";
import { FaCalendarAlt, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import PagesBanner from "../Shared/PagesBanner";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Perfect Pizza: From Dough to Toppings",
      excerpt:
        "Discover the secrets behind creating the perfect pizza, from kneading the dough to selecting the finest ingredients.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
      author: "Chef Marco",
      date: "2024-01-15",
      category: "Cooking Tips",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Healthy Eating: A Guide to Nutritious Meals",
      excerpt:
        "Learn how to create balanced, nutritious meals that are both delicious and good for your health.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80",
      author: "Dr. Sarah Johnson",
      date: "2024-01-12",
      category: "Health & Nutrition",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Exploring Global Cuisines: A Culinary Journey",
      excerpt:
        "Take a journey around the world through food and discover the rich flavors of different cultures.",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80",
      author: "Food Explorer",
      date: "2024-01-10",
      category: "World Cuisine",
      readTime: "8 min read",
    },
    {
      id: 4,
      title: "Seasonal Ingredients: Cooking with What's Fresh",
      excerpt:
        "Make the most of seasonal produce and learn how to create amazing dishes with fresh, local ingredients.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
      author: "Garden Chef",
      date: "2024-01-08",
      category: "Seasonal Cooking",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Kitchen Essentials: Must-Have Tools for Every Cook",
      excerpt:
        "Build your perfect kitchen with these essential tools that every home cook should have.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
      author: "Kitchen Pro",
      date: "2024-01-05",
      category: "Kitchen Tips",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "The Science of Flavor: Understanding Taste and Aroma",
      excerpt:
        "Dive into the fascinating world of flavor science and learn how to enhance your cooking.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
      author: "Flavor Scientist",
      date: "2024-01-03",
      category: "Food Science",
      readTime: "9 min read",
    },
  ];

  return (
    <div className="containerr pt-12">
      <title>Food Blog</title>
      <PagesBanner title="Food Blog" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Latest Food Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover cooking tips, recipes, and culinary insights from our
            expert chefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <FaTag className="text-xs" />
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-xs" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{blog.readTime}</span>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                  Read More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
