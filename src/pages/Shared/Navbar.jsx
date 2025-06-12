import { Link, NavLink } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaHome, FaUtensils, FaImages, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const [show, setShow] = useState(false);
  const handleSignOut = () => {
    signOutUser()
      .then((restult) => {
        console.log(restult);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navitem = (
    <>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-lg text-steel-gray font-bold "
          to="/"
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-lg text-steel-gray font-bold "
          to="/all_foods"
        >
          <FaUtensils /> All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className="flex items-center gap-x-2 text-lg text-steel-gray font-bold "
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
    <nav className="fixed top-0 z-50 shadow-2xl w-full  bg-white">
      <div className="containerr py-4">
        {/* small devise design */}
        <div className="md:hidden  grid grid-cols-3 items-center justify-between">
          <div className="">
            <button onClick={() => setShow(!show)}>
              {show ? <ImCross size={25} /> : <FaBars size={25} />}
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
        <div className="md:flex hidden items-center justify-between">
          <div className="">
            <Link to="/">
              <img className="w-[150px]" src={logo} alt="website logo" />
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-6">{navitem}</ul>
          </div>
          <div className="">
            {user ? (
              <div className="flex items-center gap-x-4 ">
                <div className="dropdown dropdown-bottom dropdown-center">
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
                  </ul>
                </div>
                <button
                  className="py-3 px-6 bg-orange text-white font-bold rounded-xl cursor-pointer"
                  onClick={handleSignOut}
                >
                  Log OUt
                </button>
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
