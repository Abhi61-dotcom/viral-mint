import React from "react";
import { Outlet } from "react-router-dom";
import OurPeople from "../pages/WhoWeAre/OurPeople";

const WhoWeAreLayout = () => {
  return (
    <div >
      <Outlet />
    </div>
  );
};

export default WhoWeAreLayout;