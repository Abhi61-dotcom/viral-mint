import React from "react";
import { Route } from "react-router-dom";

import ContactLayout from "../layouts/ContactLayout";
import TalkToExpert from "../pages/Contact/TalkToExpert";
import JobSeeker from "../pages/Contact/ForJobSeeker";
import VendorSupply from "../pages/Contact/ForVenderSupplier";
import FormerEmployee from "../pages/Contact/ForFormerEmployees";
import EmployeeVerification from "../pages/Contact/ForEmploymentVerification";

const ContactRoutes = (
    <>
        <Route path="/contact-us" element={<ContactLayout />}>
            <Route index element={<TalkToExpert />} />
            <Route path="job" element={<JobSeeker />} />
            <Route path="employee" element={<FormerEmployee />} />
            <Route path="verification" element={<EmployeeVerification />} />
            <Route path="vendor" element={<VendorSupply />} />
            
        </Route>
    </>
);

export default ContactRoutes;