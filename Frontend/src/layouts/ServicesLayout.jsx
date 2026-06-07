import React from 'react'
import { Outlet } from "react-router-dom";
import Services from "../pages/services/TrustAndSafety";

const ServicesLayout = () => {
  return (
    <div >
      <Outlet />
    </div>
  )
}

export default ServicesLayout