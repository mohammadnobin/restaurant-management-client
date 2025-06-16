import sign from "../../assets/signUp/sign.png";
import logo from "../../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router";

import SocialLogIn from "../Shared/SocialLogIn";
import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const SignInPage = () => {
  const { signInUser } = UseAuth();
  const [errormessage, setErrormessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const locaFrom = location.state || "/";
  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    // validations hare
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passLowerChar = /^(?=.*[a-z])/;
    const passUpperChar = /^(?=.*[A-Z])/;
    const passMinMax = /^(?=.{6,})/;

    if (!email) {
      setErrormessage("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      setErrormessage("Please enter a valid email address.");
    } else if (!password) {
      setErrormessage("Please enter your password.");
    } else if (!passUpperChar.test(password)) {
      setErrormessage("Password must include at least one uppercase letter.");
    } else if (!passLowerChar.test(password)) {
      setErrormessage("Password must include at least one lowercase letter.");
    } else if (!passMinMax.test(password)) {
      setErrormessage("Password must be at least 6 characters long.");
    } else {
      setErrormessage("");
      signInUser(email, password)
        .then((result) => {
       Swal.fire({
            title: "Good job!",
            text: 'Sign In Successfully',
            icon: "success",
          });
          navigate(locaFrom);
        })
        .catch((err) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err,
          });
        });
    }
  };

  return (
    <div className="relative pt-10 dark:bg-dark-black bg-white z-0 after:absolute after:w-1/2 after:h-2/3 after:bg-[rgba(234,106,18,0.2)] after:right-0 after:-top-5 after:rounded-bl-full after:z-[-1]">
      <div className="containerr">
        <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2  items-center">
          <div className="w-full">
            <h2 className="font-semibold dark:text-white  text-center text-midnight-navy text-4xl">
              Sign In
            </h2>
            <p className="text-lg text-center text-steel-gray dark:text-white  mb-8 mt-4">
              Sign in to stay connected.
            </p>
            <form onSubmit={handleSingIn} className="flex flex-col gap-y-2">
              <label className="text-lg text-steel-gray dark:text-white ">Email</label>
              <input
                className="w-full border border-steel-gray rounded-full dark:placeholder:text-white dark:text-white px-4  py-3"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <label className="text-lg text-steel-gray dark:text-white ">Password</label>
              <input
                className="w-full border border-steel-gray rounded-full dark:placeholder:text-white dark:text-white px-4  py-3"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {errormessage && <p className="text-red-500">{errormessage}</p>}
              <div className="flex justify-between items-center my-3">
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" name="" id="" />
                  <label className="text-steel-gray dark:text-white ">Remember Me</label>
                </div>
                <p className="text-orange cursor-pointer">forget passwor</p>
              </div>
              <button
                className="text-white text-center py-3 rounded-2xl px-10 cursor-pointer bg-orange   text-xl "
                type="submit"
              >
                Sign In
              </button>
            </form>
            <p className="text-center text-lg py-4 text-steel-gray dark:text-white ">
              or sign in with other accounts?
            </p>
            <SocialLogIn />
            <h4 className="text-center text-lg text-steel-gray dark:text-white ">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-orange">
                Click here to sign up.
              </Link>
            </h4>
          </div>
          <div className="lg:block hidden xl:col-span-2">
            <img className="w-2/3 mx-auto" src={sign} alt="sign in image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
