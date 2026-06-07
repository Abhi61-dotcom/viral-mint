import React from "react";
import { Outlet } from "react-router-dom";

const IndustriesLayout = () => {
  return (
    <div>
      {/* common UI like banner/navbar */}
      <Outlet />
    </div>
  );
};

export default IndustriesLayout;