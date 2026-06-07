import React from "react";
import { Route } from "react-router-dom";
import IndustriesLayout from "../layouts/IndustriesLayout";

import SocialMedia from "../pages/industries/SocialMedia";
import RetaileCommerce from "../pages/Industries/RetaileCommerce";
import HealthCare from "../pages/Industries/HealthCare";
import Technology from "../pages/Industries/Technology";
import FinancialServices from "../pages/Industries/FinancialServices";
// import other pages...

const IndustriesRoutes = () => {
    return (
        <>
            <Route path="/industries" element={<IndustriesLayout />}>
                <Route path="social" element={<SocialMedia />} />
                <Route path="retail-eCommerce" element={<RetaileCommerce/>}/>
                <Route path="healthcare" element={<HealthCare/>}/>
                <Route path="technology" element={<Technology/>}/>
                <Route path="financial" element={<FinancialServices/>}/>
                {/* add more like this */}
                {/* <Route path="entertainment" element={<Entertainment />} /> */}
            </Route>
        </>
    );
};

export default IndustriesRoutes;