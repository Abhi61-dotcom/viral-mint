import React from "react";
import { Route } from "react-router-dom";
import ServicesLayout from "../layouts/ServicesLayout";
import TrustAndSafety from "../pages/services/TrustAndSafety";

const ServicesRoutes = () => {
    return (
        <>
            <Route path="/services" element={<ServicesLayout />}>
                <Route index element={<Services />} />
                <Route path="trust-safety" element={<TrustAndSafety />} />
            </Route>
        </>
    );
};

export default ServicesRoutes;