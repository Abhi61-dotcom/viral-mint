import React from "react";
import { Route } from "react-router-dom";

import WhoWeAreLayout from "../layouts/WhoWeAreLayout";
import OurPeople from "../pages/WhoWeAre/OurPeople";
import OurAdvantage from "../pages/WhoWeAre/OurAdvantage";
import OurTechnology from "../pages/WhoWeAre/OurTechnology";
import AboutUs from "../pages/WhoWeAre/AboutUs";

const WhoWeAreRoutes = (
  <>
    <Route path="/who-we-are" element={<WhoWeAreLayout />}>
      <Route index element={<OurPeople />} />   default
      <Route path="people" element={<OurPeople />} />
      <Route path="advantage" element={<OurAdvantage />} />
      <Route path="technology" element={<OurTechnology />} />
      <Route path="about" element={<AboutUs/>} />
    </Route>
  </>
);

export default WhoWeAreRoutes;