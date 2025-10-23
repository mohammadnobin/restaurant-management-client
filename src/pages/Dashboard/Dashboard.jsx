import React from "react";
import { Link } from "react-router";
import {
  FaPlus,
  FaUtensils,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaDollarSign,
  FaArrowRight,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";

const Dashboard = () => {
  const { user } = UseAuth();

  const dashboardCards = [
    {
      title: "Add New Food",
      description: "Add delicious dishes to your menu",
      icon: <FaPlus className="text-2xl" />,
      link: "/dashboard/add_food",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "My Foods",
      description: "Manage your food items",
      icon: <FaUtensils className="text-2xl" />,
      link: "/dashboard/my_foods",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "My Orders",
      description: "View and manage orders",
      icon: <FaShoppingCart className="text-2xl" />,
      link: "/dashboard/my_orders",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      title: "Analytics",
      description: "View your performance",
      icon: <FaChartLine className="text-2xl" />,
      link: "/dashboard/analytics",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
  ];

  const quickStats = [
    {
      title: "Total Foods",
      value: "24",
      icon: <FaUtensils className="text-xl" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Total Orders",
      value: "156",
      icon: <FaShoppingCart className="text-xl" />,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Total Revenue",
      value: "$2,340",
      icon: <FaDollarSign className="text-xl" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Rating",
      value: "4.8",
      icon: <FaStar className="text-xl" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.displayName || "Chef"}!
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">
            Manage your restaurant and track your performance
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 truncate">
                    {stat.title}
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`${stat.color} p-2 sm:p-3 rounded-lg mt-2 sm:mt-0 flex-shrink-0`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {dashboardCards.map((card, index) => (
            <Link key={index} to={card.link} className="group block">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div
                    className={`${card.color} p-2 sm:p-3 rounded-lg text-white`}
                  >
                    {card.icon}
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors text-sm sm:text-base" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Recent Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Recent Orders
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {[1, 2, 3].map((order) => (
                  <div
                    key={order}
                    className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaShoppingCart className="text-orange-500 text-sm sm:text-base" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
                          Order #{100 + order}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          2 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        $24.99
                      </p>
                      <p className="text-xs sm:text-sm text-green-600 dark:text-green-400">
                        Completed
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/dashboard/my_orders"
                className="block text-center mt-3 sm:mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base"
              >
                View all orders
              </Link>
            </div>
          </div>

          {/* Top Foods */}
          <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                Top Selling Foods
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {[
                  { name: "Margherita Pizza", sales: 45, revenue: "$450" },
                  { name: "Chicken Burger", sales: 32, revenue: "$320" },
                  { name: "Caesar Salad", sales: 28, revenue: "$280" },
                ].map((food, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaUtensils className="text-green-500 text-sm sm:text-base" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
                          {food.name}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {food.sales} sales
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {food.revenue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/dashboard/my_foods"
                className="block text-center mt-3 sm:mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm sm:text-base"
              >
                Manage foods
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
