import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      {" "}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;
