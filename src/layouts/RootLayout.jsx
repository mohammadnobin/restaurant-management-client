import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar />
      {state == "loading" ? <h2>this is logaidn</h2> : <Outlet />}
      <Footer />
    </div>
  );
};

export default RootLayout;
