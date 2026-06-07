import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import ServiceDetail from "../pages/services/ServiceDetail";
import ProjectDetails from "../pages/projects/ProjectDetails";

import ContactRoutes from "./ContactRoutes";
import WhoWeAreRoutes from "./WhoWeAreRoutes";
import PrivacyPolicy from "../pages/Contact/PrivacyPolicy";
import TrustAndSafety from "../pages/services/TrustAndSafety";
import ServicesLayout from "../layouts/ServicesLayout";

import IndustriesLayout from "../layouts/IndustriesLayout";
import SocialMedia from "../pages/industries/SocialMedia";
import RetaileCommerce from "../pages/Industries/RetaileCommerce";
import HealthCare from "../pages/Industries/HealthCare";
import Technology from "../pages/Industries/Technology";
import FinancialServices from "../pages/Industries/FinancialServices";
import Careers from "../pages/Careers";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import AgentLogin from "../pages/Agent/AgentLogin";
import AgentDashboard from "../pages/Agent/AgentDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* basic */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      {/*  SERVICES */}
      <Route path="/services" element={<ServicesLayout />}>
        <Route index element={<Services />} />
        <Route path="trust-safety" element={<TrustAndSafety />} />
        <Route path=":serviceName" element={<ServiceDetail />} />
      </Route>

      {/* other */}
      <Route path="/project/:slug" element={<ProjectDetails />} />

      {/* modular */}
      {ContactRoutes}
      {WhoWeAreRoutes}


      {/* industries*/}
      <Route path="/industries" element={<IndustriesLayout />}>
        <Route path="social" element={<SocialMedia />} />
        <Route path="retail-eCommerce" element={<RetaileCommerce />} />
        <Route path="healthcare" element={<HealthCare />} />
        <Route path="technology" element={<Technology />} />
        <Route path="financial" element={<FinancialServices />} />
      </Route>

      {/* privacy */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* careers */}
      <Route path="/careers" element={<Careers />} />

      {/* 404 */}
      <Route path="*" element={<h1>Page Not Found ❌</h1>} />

      {/* Admin + Agent Auth Routes */}

      <Route path="/admin-panel" element={<AdminLogin />} />

      <Route path="/agent-login" element={<AgentLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/agent"
        element={
          <ProtectedRoute role="agent">
            <AgentDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;