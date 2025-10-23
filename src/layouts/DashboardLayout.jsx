
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Menu, X, Home, Image, Settings, LogOut } from "lucide-react";

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Overview", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Gallery", icon: <Image size={20} />, path: "/dashboard/gallery" },
    { name: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-[var(--color-dark-black)]">
      {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-white shadow-lg border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Logo & Toggle */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          <h2
            className={`text-lg font-semibold text-[var(--color-midnight-navy)] transition-all ${
              open ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            CYBER DASH
          </h2>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                  isActive
                    ? "bg-[var(--color-orange)] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[var(--color-midnight-navy)]"
                }`
              }
            >
              {item.icon}
              {open && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 text-red-500 hover:text-red-600 font-medium">
            <LogOut size={20} />
            {open && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-[var(--color-midnight-navy)]">
            Dashboard Panel
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[var(--color-orange)] text-white flex items-center justify-center font-bold">
              N
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
