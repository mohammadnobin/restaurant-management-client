// import { Link, NavLink } from "react-router";
// import UseAuth from "../../hooks/UseAuth";
// import logo from "../../assets/logo.svg";
// import { useEffect, useState } from "react";
// import { ImCross } from "react-icons/im";
// import { FaHome, FaUtensils, FaImages, FaBars, FaShoppingCart } from "react-icons/fa";
// import { MdClose, MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
// import Swal from "sweetalert2";
// import { FaBowlFood } from "react-icons/fa6";
// import { AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const { user, signOutUser } = UseAuth();
//   const [show, setShow] = useState(false);

//   const handleSignOut = () => {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: "btn btn-success",
//         cancelButton: "btn btn-danger",
//       },
//       buttonsStyling: false,
//     });

//     swalWithBootstrapButtons
//       .fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Yes, sign out!",
//         cancelButtonText: "No, cancel!",
//         reverseButtons: true,
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           signOutUser()
//             .then(() => {
//               swalWithBootstrapButtons.fire({
//                 title: "Signed out!",
//                 text: "You have been signed out successfully.",
//                 icon: "success",
//               });
//             })
//             .catch((err) => {
//               swalWithBootstrapButtons.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: err.message || "Something went wrong!",
//               });
//             });
//         } else if (result.dismiss === Swal.DismissReason.cancel) {
//           swalWithBootstrapButtons.fire({
//             title: "Cancelled",
//             text: "You are still logged in 🙂",
//             icon: "info",
//           });
//         }
//       });
//   };

//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       if (localStorage.theme) {
//         return localStorage.theme === "dark";
//       } else {
//         return window.matchMedia("(prefers-color-scheme: dark)").matches;
//       }
//     }
//     return false;
//   });
//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const navitem = (
//     <>
//       <li>
//         <NavLink
//           className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
//           to="/"
//         >
//           <FaHome /> Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
//           to="/all_foods"
//         >
//           <FaUtensils /> All Foods
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
//           to="/gallery"
//         >
//           <FaImages /> Gallery
//         </NavLink>
//       </li>
//     </>
//   );
//   const PrivateItem = (
//     <>
//       {" "}
//       <li className=" px-4 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer">
//         <Link to="/add_food">Add Food</Link>
//       </li>
//       <li className=" px-4 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer">
//         <Link to="/my_foods">My Foods</Link>
//       </li>
//       <li className=" px-4 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer">
//         <Link to="/my_orders">My Orders</Link>
//       </li>
//     </>
//   );
//   return (
//     <nav className="fixed top-0 border-orange dark:border-white border-b-2 z-50 shadow-2xl w-full dark:bg-dark-black   bg-white">
//       <div className="containerr py-2">
//         {/* small devise design */}
//         <div className="lg:hidden  grid grid-cols-3 items-center justify-between">
//           <div className="dark:text-white flex items-center gap-x-4">
//             <button onClick={() => setShow(!show)}>
//               {show ? <ImCross size={25} /> : <FaBars size={25} />}
//             </button>
//             <button
//               className="text-black dark:text-white cursor-pointer "
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? (
//                 <MdOutlineWbSunny size={30} />
//               ) : (
//                 <MdDarkMode size={30} />
//               )}
//             </button>
//           </div>
//           {show && (
//             <div className="absolute top-20 left-0 w-full">
//               <ul
//                 onClick={() => setShow(false)}
//                 className=" text-white space-y-2 bg-white flex justify-center flex-col items-center"
//               >
//                 {navitem}
//               </ul>
//             </div>
//           )}
//           <div className="">
//             <Link to="/">
//               <img
//                 className="w-[100px] mx-auto "
//                 src={logo}
//                 alt="website logo"
//               />
//             </Link>
//           </div>
//           <div className="">
//             {user ? (
//               <div className="flex items-center justify-end">
//                 <div className="dropdown dropdown-bottom dropdown-left">
//                   <div
//                     tabIndex={0}
//                     role="button"
//                     className="size-14 cursor-pointer group relative"
//                   >
//                     <div className="absolute py-2 rounded-2xl top-0 right-15 hidden group-hover:block w-[200px] bg-orange text-white text-center ">
//                       {user?.displayName}
//                     </div>
//                     <img
//                       className="size-14 rounded-full"
//                       src={user?.photoURL}
//                       alt=""
//                     />
//                   </div>
//                   <ul
//                     tabIndex={0}
//                     className="dropdown-content menu space-y-2  w-52 p-2 bg-orange"
//                   >
//                     {PrivateItem}
//                     <li>
//                       <button
//                         className="py-3 px-6 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer"
//                         onClick={handleSignOut}
//                       >
//                         Log OUt
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div className=" flex items-center justify-end">
//                 <Link to="/signup">
//                   <button className="py-2 px-3 text-sm  bg-orange text-white rounded-xl cursor-pointer">
//                     Sign Up
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* large devise design */}
//         <div className="lg:flex hidden items-center justify-between">
//           <div className="">
//             <Link to="/">
//               <img className="w-[150px]" src={logo} alt="website logo" />
//             </Link>
//           </div>
//           <div className="">
//             <ul className="flex items-center gap-x-6">
//               {navitem}
//               {user && 
//               <>
//               <li>
//         <NavLink
//           className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
//           to="/my_foods"
//         >
//           <FaBowlFood /> My Foods
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
//           to="/my_orders"
//         >
//           <FaShoppingCart /> My Orders
//         </NavLink>
//       </li>

//               </>
//               }
//             </ul>

//           </div>
//           <div className=" flex items-center gap-x-4">
//                         <button
//               className="text-black dark:text-white  cursor-pointer "
//               onClick={toggleDarkMode}
//             >
//               {darkMode ? (
//                 <MdOutlineWbSunny size={30} />
//               ) : (
//                 <MdDarkMode size={30} />
//               )}
//             </button>
//             {user ? (
//               <div className="flex items-center gap-x-4 ">
//                 <div className="dropdown dropdown-bottom dropdown-center">
//                   {/* <div
//                     tabIndex={0}
//                     role="button"
//                     className="size-14 cursor-pointer group relative"
//                   >
//                     <div className="absolute py-2 rounded-2xl top-0 right-15 hidden group-hover:block w-[200px] bg-orange text-white text-center ">
//                       {user?.displayName}
//                     </div>
//                     <img
//                       className="size-12 rounded-full"
//                       src={user?.photoURL}
//                       alt=""
//                     />
//                   </div> */}

//  {/* Dropdown btn */}
//                       <div
//                   tabIndex={0}
//                     role="button"
//                         className="p-4 md:py-1 md:px-2 border-2 border-orange/50 dark:border-white/50 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
//                       >
//                         <AiOutlineMenu className="text-orange dark:text-white" />
//                         <div className="hidden md:block">
//                           {/* Avatar */}
//                           <img
//                             className="rounded-full size-10"
//                             referrerPolicy="no-referrer"
//                             src={user && user.photoURL}
//                             alt="profile"
//                           />
//                         </div>
//                       </div>

//                   <ul
//                     tabIndex={0}
//                     className="dropdown-content menu space-y-2  w-52 p-2 bg-orange"
//                   >
//                     {PrivateItem}
//                                     <button
//                   className="py-3 px-6 border border-white bg-orange text-white font-bold rounded-xl cursor-pointer"
//                   onClick={handleSignOut}
//                 >
//                   Log OUt
//                 </button>
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div className=" flex items-center gap-x-4">
//                 <Link to="/signin">
//                   <button className="py-3 px-6 bg-orange text-white font-bold rounded-xl cursor-pointer">
//                     Sign In
//                   </button>
//                 </Link>
//                 <Link to="/signup">
//                   <button className="py-3 px-6 bg-orange text-white font-bold rounded-xl cursor-pointer">
//                     Sign Up
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Home, UtensilsCrossed, Images, ChefHat, ShoppingCart, User, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

// Mock user data - replace with your actual auth
const mockUser = {
  displayName: "John Doe",
  photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
};

const Navbar = () => {
  const [user, setUser] = useState(mockUser); // Set to null for logged out state
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      setUser(null);
      alert("You have been signed out successfully.");
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/all_foods', label: 'All Foods', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { path: '/gallery', label: 'Gallery', icon: <Images className="w-4 h-4" /> },
  ];

  const userLinks = [
    { path: '/my_foods', label: 'My Foods', icon: <ChefHat className="w-4 h-4" /> },
    { path: '/my_orders', label: 'My Orders', icon: <ShoppingCart className="w-4 h-4" /> },
  ];

  const NavButton = ({ link, onClick }) => (
    <a
      href={link.path}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
    >
      {link.icon}
      {link.label}
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-16">
          {/* Left: Menu Button */}
          <button
            onClick={() => setShow(!show)}
            className="p-2 text-gray-800 hover:text-orange-500 transition-colors"
          >
            {show ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center: Logo */}
          <a href="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">Taste</span>
              <span className="text-orange-500">Hub</span>
            </div>
          </a>

          {/* Right: User/Auth */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-800 hover:text-orange-500 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {user ? (
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-500"
              >
                <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
              </button>
            ) : (
              <a href="/signup">
                <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors rounded">
                  Sign Up
                </button>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {show && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setShow(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
              
              {user && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  {userLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={() => setShow(false)}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 transition-colors"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                  <a href="/add_food" onClick={() => setShow(false)}>
                    <button className="mx-4 mt-2 w-[calc(100%-2rem)] py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors rounded">
                      Add Food
                    </button>
                  </a>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setShow(false);
                    }}
                    className="mx-4 mt-2 w-[calc(100%-2rem)] py-3 border-2 border-orange-500 text-orange-500 font-medium hover:bg-orange-50 transition-colors rounded"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-gray-900">Taste</span>
              <span className="text-orange-500">Hub</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavButton key={link.path} link={link} />
            ))}
            
            {user && userLinks.map((link) => (
              <NavButton key={link.path} link={link} />
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-800 hover:text-orange-500 transition-colors"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-3 py-2 border-2 border-gray-200 hover:border-orange-500 rounded-full transition-all duration-300"
                >
                  <Menu className="w-4 h-4 text-gray-700" />
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                </button>

                {/* Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl">
                    <div className="p-4 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{user.displayName}</p>
                      <p className="text-xs text-gray-500 mt-1">Manage your account</p>
                    </div>
                    
                    <div className="p-2">
                      <a href="/add_food">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded">
                          Add Food
                        </button>
                      </a>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <a href="/signin">
                  <button className="px-6 py-2.5 border-2 border-orange-500 text-orange-500 font-medium hover:bg-orange-50 transition-colors rounded">
                    Sign In
                  </button>
                </a>
                <a href="/signup">
                  <button className="px-6 py-2.5 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors rounded">
                    Sign Up
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;