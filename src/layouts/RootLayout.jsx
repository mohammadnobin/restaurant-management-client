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
      {state == "loading" ? <Loading /> : <Outlet />}
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

export default RootLayout;
