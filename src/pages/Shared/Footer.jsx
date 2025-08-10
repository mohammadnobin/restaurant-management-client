// footer page all code
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className=" bg-white text-black dark:text-white dark:bg-dark-black border-t-2 border-white py-10 ">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-8">
        <div>
          <div
            onClick={() => navigate("/")}
            className="flex items-center  gap-x-2 cursor-pointer "
          >
            <img className="w-[50px] rounded-2xl" src={logo} alt="logo" />
            <h2 className="font-bold text-xl ">Restaurant</h2>
          </div>
          <p className="text-sm text-gray-400">
            Committed to taste and quality. We’re here to make your restaurant
            experience easier, smarter, and more delicious.
          </p>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="text-sm text-black dark:text-white  space-y-2">
            <li>Email: mdnobin@gmail.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: Green Lane, Garden City</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-black dark:text-white">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="">
                Subcriptoins
              </Link>
            </li>
            <li>
              <Link to="/developer" className="">
                Local Businesses
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-black dark:text-white">
            <li>
              <a href="/terms" className="">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/developer" className="">
                Developer Resources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CYBER APP. All Rights Reseved.
      </div>
    </footer>
  );
};

export default Footer;
