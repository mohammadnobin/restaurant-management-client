import { Link } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";

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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/details">All Foods</Link>
      </li>
      <li>
        <Link to="/">Gallery</Link>
      </li>
    </>
  );
  return (
    <nav className="border-b relative z-50 bg-white">
      <div className="containerr py-4">
        {/* small devise design */}
        <div className="md:hidden  grid grid-cols-3 items-center justify-between">
          <div className="">
            <button onClick={() => setShow(!show)}>
              {show ? <ImCross size={25} /> : <FaBars size={25} />}
            </button>
          </div>
          {show&&
          <div className="absolute top-20 left-0 w-full bg-orange">
            <ul onClick={()=>setShow(false)} className="text-center text-white space-y-2">
            {navitem}
            </ul>
          </div>
          }
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
                    className="dropdown-content menu  w-52 p-2 bg-orange"
                  >
                    <li>
                      <button
                        className="py-3 px-6 bg-orange text-white font-bold rounded-xl cursor-pointer"
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
            <ul className="flex items-center gap-x-4">{navitem}</ul>
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
                    className="dropdown-content menu  w-52 p-2 bg-orange"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
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
