import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />

        <div className="flex-1">
          <AppRoutes />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;