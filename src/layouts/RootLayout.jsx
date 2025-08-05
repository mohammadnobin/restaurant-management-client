// RootLayout code here
import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import Loading from "../pages/Shared/Loading";

const RootLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar />
      <div className="mt-20">
      {state == "loading" ? <Loading /> : <Outlet />}
      </div>
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default RootLayout;
