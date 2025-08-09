import { Link, NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaHome, FaUtensils, FaImages, FaBars, FaShoppingCart } from "react-icons/fa";
import { MdClose, MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import Swal from "sweetalert2";
import { FaBowlFood } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const [show, setShow] = useState(false);

  const handleSignOut = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, sign out!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          signOutUser()
            .then(() => {
              swalWithBootstrapButtons.fire({
                title: "Signed out!",
                text: "You have been signed out successfully.",
                icon: "success",
              });
            })
            .catch((err) => {
              swalWithBootstrapButtons.fire({
                icon: "error",
                title: "Oops...",
                text: err.message || "Something went wrong!",
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "You are still logged in 🙂",
            icon: "info",
          });
        }
      });
  };

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme) {
        return localStorage.theme === "dark";
      } else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }
    return false;
  });
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navitem = (
    <>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
          to="/"
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
          to="/all_foods"
        >
          <FaUtensils /> All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
          to="/gallery"
        >
          <FaImages /> Gallery
        </NavLink>
      </li>
    </>
  );
  const PrivateItem = (
    <>
      {" "}
      <li className=" px-4 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer">
        <Link to="/add_food">Add Food</Link>
      </li>
      <li className=" px-4 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer">
        <Link to="/my_foods">My Foods</Link>
      </li>
      <li className=" px-4 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer">
        <Link to="/my_orders">My Orders</Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 border-orange border-b-2 z-50 shadow-2xl w-full dark:bg-dark-black   bg-white">
      <div className="containerr py-2">
        {/* small devise design */}
        <div className="lg:hidden  grid grid-cols-3 items-center justify-between">
          <div className="dark:text-white flex items-center gap-x-4">
            <button onClick={() => setShow(!show)}>
              {show ? <ImCross size={25} /> : <FaBars size={25} />}
            </button>
            <button
              className="text-black dark:text-white cursor-pointer "
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <MdOutlineWbSunny size={30} />
              ) : (
                <MdDarkMode size={30} />
              )}
            </button>
          </div>
          {show && (
            <div className="absolute top-20 left-0 w-full">
              <ul
                onClick={() => setShow(false)}
                className=" text-white space-y-2 bg-white flex justify-center flex-col items-center"
              >
                {navitem}
              </ul>
            </div>
          )}
          <div className="">
            <Link to="/">
              <img
                className="w-[100px] mx-auto "
                src={logo}
                alt="website logo"
              />
            </Link>
          </div>
          <div className="">
            {user ? (
              <div className="flex items-center justify-end">
                <div className="dropdown dropdown-bottom dropdown-left">
                  <div
                    tabIndex={0}
                    role="button"
                    className="size-14 cursor-pointer group relative"
                  >
                    <div className="absolute py-2 rounded-2xl top-0 right-15 hidden group-hover:block w-[200px] bg-orange text-white text-center ">
                      {user?.displayName}
                    </div>
                    <img
                      className="size-14 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu space-y-2  w-52 p-2 bg-orange"
                  >
                    {PrivateItem}
                    <li>
                      <button
                        className="py-3 px-6 bg-orange border-white border text-white font-bold rounded-xl cursor-pointer"
                        onClick={handleSignOut}
                      >
                        Log OUt
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className=" flex items-center justify-end">
                <Link to="/signup">
                  <button className="py-2 px-3 text-sm  bg-orange text-white rounded-xl cursor-pointer">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* large devise design */}
        <div className="lg:flex hidden items-center justify-between">
          <div className="">
            <Link to="/">
              <img className="w-[150px]" src={logo} alt="website logo" />
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-6">
              {navitem}
              {user && 
              <>
              <li>
        <NavLink
          className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
          to="/my_foods"
        >
          <FaBowlFood /> My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-base text-steel-gray font-bold "
          to="/my_orders"
        >
          <FaShoppingCart /> My Orders
        </NavLink>
      </li>

              </>
              }
            </ul>

          </div>
          <div className=" flex items-center gap-x-4">
                        <button
              className="text-black dark:text-white  cursor-pointer "
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <MdOutlineWbSunny size={30} />
              ) : (
                <MdDarkMode size={30} />
              )}
            </button>
            {user ? (
              <div className="flex items-center gap-x-4 ">
                <div className="dropdown dropdown-bottom dropdown-center">
                  {/* <div
                    tabIndex={0}
                    role="button"
                    className="size-14 cursor-pointer group relative"
                  >
                    <div className="absolute py-2 rounded-2xl top-0 right-15 hidden group-hover:block w-[200px] bg-orange text-white text-center ">
                      {user?.displayName}
                    </div>
                    <img
                      className="size-12 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div> */}

 {/* Dropdown btn */}
                      <div
                  tabIndex={0}
                    role="button"
                        className="p-4 md:py-1 md:px-2 border-2 border-orange/50 dark:border-white/50 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                      >
                        <AiOutlineMenu className="text-orange dark:text-white" />
                        <div className="hidden md:block">
                          {/* Avatar */}
                          <img
                            className="rounded-full size-10"
                            referrerPolicy="no-referrer"
                            src={user && user.photoURL}
                            alt="profile"
                          />
                        </div>
                      </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu space-y-2  w-52 p-2 bg-orange"
                  >
                    {PrivateItem}
                                    <button
                  className="py-3 px-6 border border-white bg-orange text-white font-bold rounded-xl cursor-pointer"
                  onClick={handleSignOut}
                >
                  Log OUt
                </button>
                  </ul>
                </div>
              </div>
            ) : (
              <div className=" flex items-center gap-x-4">
                <Link to="/signin">
                  <button className="py-3 px-6 bg-orange text-white font-bold rounded-xl cursor-pointer">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="py-3 px-6 bg-orange text-white font-bold rounded-xl cursor-pointer">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
