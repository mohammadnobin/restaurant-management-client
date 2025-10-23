import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  Menu,
  X,
  Home,
  Image,
  Settings,
  LogOut,
  Plus,
  Utensils,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import UseAuth from "../hooks/UseAuth";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, signOutUser } = UseAuth();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogout = () => {
    signOutUser();
  };

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Add Food", icon: <Plus size={20} />, path: "/dashboard/add_food" },
    {
      name: "My Foods",
      icon: <Utensils size={20} />,
      path: "/dashboard/my_foods",
    },
    {
      name: "My Orders",
      icon: <ShoppingCart size={20} />,
      path: "/dashboard/my_orders",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/dashboard/analytics",
    },
    { name: "Gallery", icon: <Image size={20} />, path: "/dashboard/gallery" },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-[var(--color-dark-black)]">
      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } fixed  top-0 z-30 lg:z-auto w-64 bg-white dark:bg-dark-black dark:border-white border-gray-200 shadow-lg border-r border-gray-200 transition-transform duration-300 ease-in-out flex flex-col h-full`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[var(--color-midnight-navy)]">
            TasteHub
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium dark:text-white text-gray-900">{user?.displayName}</p>
              <p className="text-sm dark:text-white text-gray-500">Restaurant Manager</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => isMobile && setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center  gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm ${
                  isActive
                    ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500"
                    : "dark:text-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center dark:text-white dark:hover:bg-red-900/20 cursor-pointer  gap-3 w-full px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 lg:ml-0">
        {/* Top Bar */}
        <header className="bg-white shadow-sm dark:bg-dark-black border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors lg:hidden"
              >
                <Menu size={20} />
              </button>
              <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold dark:text-white">
              <span className="text-gray-900 dark:text-white">Taste</span>
              <span className="text-orange-500">Hub</span>
            </div>
          </Link>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden sm:inline text-sm font-medium dark:text-white text-gray-700">
                {user?.displayName}
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
