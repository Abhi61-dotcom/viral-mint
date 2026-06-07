import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import name from "../assets/name.png"
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav")) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutsideLogin = (e) => {
      if (!e.target.closest(".login-menu")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideLogin);
    return () => document.removeEventListener("click", handleClickOutsideLogin);
  }, []);

  const whoWeAreLinks = [
    { name: "Our People", path: "/who-we-are/people" },
    { name: "Our Advantage", path: "/who-we-are/advantage" },
    // { name: "Locations", path: "/who-we-are/locations" },
    { name: "Our Technology", path: "/who-we-are/technology" },
    { name: "About Us", path: "/who-we-are/about" },
  ];

  // const aiLinks = [
  //   { name: "AI Safety & Alignment", path: "/ai-safety" },
  //   { name: "Deployment & AI Operations", path: "/deployment" },
  //   { name: "AI Data & Operations", path: "/ai-data" },
  //   { name: "Data Feedback & Evaluations", path: "/data-feedback" },
  //   { name: "Autonomous Vehicles", path: "/av" },
  //   { name: "Robotics", path: "/robotics" },
  //   { name: "AI CX Transformation", path: "/ai-cx" },
  // ];

  const servicesLinks = [
    { name: "Trust & Safety", path: "/services/trust-safety" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Business Strategy", path: "/services/business-strategy" },
    { name: "IT Solutions", path: "/services/it-solutions" },
    { name: "Sass Solution", path: "/services/saas-solution" },
    { name: "Manpower", path: "/services/manpower-services" },
    { name: "Credit Card Facility", path: "/services/credit-card-facility" },
  ];

  const industriesLinks = [
    // { name: "Entertainment & Gaming", path: "/industries/entertainment" },
    { name: "Financial Services", path: "/industries/financial" },
    { name: "Healthcare", path: "/industries/healthcare" },
    // { name: "Mobility, Logistics & Travel", path: "/industries/mobility" },
    { name: "Retail & eCommerce", path: "/industries/retail-ecommerce" },
    { name: "Social Media", path: "/industries/social" },
    { name: "Technology", path: "/industries/technology" },
  ];

  // const insightsLinks = [
  //   { name: "Events", path: "/events" },
  //   { name: "Blogs", path: "/blogs" },
  //   { name: "Case Studies", path: "/case-studies" },
  //   { name: "White Papers", path: "/whitepapers" },
  //   { name: "Analyst Reports", path: "/analyst-reports" },
  //   { name: "In the News", path: "/news" },
  //   { name: "Press Releases", path: "/press" },
  //   { name: "Podcasts", path: "/podcasts" },
  // ];

  const contactOptions = [
    { name: "Talk to an expert", path: "/contact-us" },
    { name: "For job seekers", path: "/contact-us/job" },
    { name: "For former employees", path: "/contact-us/employee" },
    { name: "For employment verification", path: "/contact-us/verification" },
    { name: "For vendors/suppliers", path: "/contact-us/vendor" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between 
      bg-[#020617]/80 backdrop-blur-xl 
      border-b border-white/10 
      shadow-[0_4px_30px_rgba(0,0,0,0.6)] 
      text-white sticky top-0 z-50">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full"
          />

          {/* Name */}
          <img
            src={name}
            alt="name"
            className="hidden sm:block h-7 md:h-6 w-auto object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium">
          {[
            { key: "who", label: "Who we are" },
            { key: "services", label: "Services" },
            { key: "industries", label: "Industries" },
            // { key: "insights", label: "Insights" },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() =>
                setActiveMenu(activeMenu === item.key ? null : item.key)
              }
              className="relative cursor-pointer group"
            >
              <span
                className="text-lg 
    bg-gradient-to-r from-white to-gray-400 
    bg-clip-text text-transparent 
    group-hover:from-blue-400 group-hover:to-purple-400 
    transition-all duration-300"
              >
                {item.label}
              </span>

              {activeMenu === item.key && (
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-8 
    bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </div>
          ))}

          <div onClick={() => { navigate("/careers") }} className="cursor-pointer">Careers</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setContactOpen(true)}
            className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm 
  bg-gradient-to-r from-blue-500 to-purple-500 
  text-sm"
          >
            Contact
          </button>

          {/* login */}

          <div className="relative login-menu">
            <button
              onClick={() => setOpen(!open)}
              className="
      px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white font-medium
      shadow-md hover:shadow-lg
      hover:scale-105 transition-all duration-300
      flex items-center gap-1
    "
            >
              Login
            </button>

            {open && (
              <div className="
    absolute right-0 mt-3 w-48 z-50
    bg-gray-600 backdrop-blur-xl
    rounded-2xl shadow-2xl
    border border-white/20
    overflow-hidden
    animate-fadeIn
  ">

                {/* Admin Login */}
                <button
                  onClick={() => navigate("/admin-panel")}
                  className="
        w-full flex items-center gap-2
        px-4 py-3 text-sm font-medium
        hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
        hover:text-white
        transition-all duration-200
        cursor-pointer
      "
                >
                  Admin Login
                </button>

                {/* Divider */}
                <div className="h-px bg-gray-200" />

                {/* Agent Login */}
                <button
                  onClick={() => navigate("/agent-login")}
                  className="
        w-full flex items-center gap-2
        px-4 py-3 text-sm font-medium
        hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
        hover:text-white
        transition-all duration-200
        cursor-pointer
      "
                >
                  Agent Login
                </button>

              </div>
            )}
          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* DESKTOP DROPDOWN */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full 
  bg-[#020617] px-20 py-10 
  z-40 hidden md:block 
  shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-2 gap-6">
              {(activeMenu === "who"
                ? whoWeAreLinks
                : activeMenu === "services"
                  ? servicesLinks
                  : activeMenu === "industries"
                    ? industriesLinks
                    : []
              ).map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate(item.path);
                    setActiveMenu(null);
                  }}
                  className="relative group w-fit cursor-pointer hover:translate-x-1 transition"
                >
                  <span className="text-gray-400 group-hover:text-white transition">
                    {item.name}
                  </span>

                  <span className="absolute left-0 -bottom-1 h-[2px] w-full 
  bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 
  scale-x-0 group-hover:scale-x-100 origin-left 
  transition-transform duration-500"></span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*  MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-[80%] md:w-[60%] h-screen bg-[#020617] text-white z-50 p-6 overflow-y-auto"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-semibold">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* MENU */}
            {[
              { key: "who", label: "Who we are", links: whoWeAreLinks },
              { key: "services", label: "Services", links: servicesLinks },
              { key: "industries", label: "Industries", links: industriesLinks },
              // { key: "insights", label: "Insights", links: insightsLinks },
            ].map((menu) => (
              <div key={menu.key} className="mb-6">
                <div
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === menu.key ? null : menu.key
                    )
                  }
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-lg">{menu.label}</span>
                  <ChevronDown
                    className={`transition ${mobileDropdown === menu.key ? "rotate-180" : ""
                      }`}
                  />
                </div>

                <AnimatePresence>
                  {mobileDropdown === menu.key && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden mt-3 ml-2 flex flex-col gap-3"
                    >
                      {menu.links.map((item, i) => (
                        <span
                          key={i}
                          onClick={() => {
                            navigate(item.path);
                            setMobileOpen(false);
                          }}
                          className="text-gray-400 hover:text-white cursor-pointer"
                        >
                          {item.name}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CAREERS */}
            <div
              onClick={() => {
                navigate("/careers");
                setMobileOpen(false);
              }}
              className="mt-6 text-lg cursor-pointer"
            >
              Careers
            </div>

            {/* LOGIN SECTION (MOBILE) */}
            <div className="mt-6">

              <p className="text-gray-400 mb-2">Login</p>

              <div className="flex flex-col gap-3">

                <button
                  onClick={() => {
                    navigate("/admin-panel");
                    setMobileOpen(false);
                  }}
                  className="bg-indigo-600 py-2 rounded text-white hover:bg-indigo-700 w-full"
                >
                  Admin Login
                </button>

                <button
                  onClick={() => {
                    navigate("/agent-login");
                    setMobileOpen(false);
                  }}
                  className="bg-gray-800 py-2 rounded text-white hover:bg-gray-700 w-full"
                >
                  Agent Login
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] 
      bg-[#020617]/90 backdrop-blur-xl 
      flex flex-col items-center justify-center text-white px-6"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={28} />
            </button>

            {/* TITLE */}
            {/* <h2 className="text-2xl md:text-3xl font-semibold mb-12">
              Talk to an expert
            </h2> */}

            {/* OPTIONS */}
            <div className="w-full max-w-3xl flex flex-col gap-6">

              {contactOptions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    navigate(item.path);   // 🔥 dynamic route
                    setContactOpen(false); // overlay close
                  }}
                  className="group relative cursor-pointer py-4 border-b border-white/10"
                >
                  <span className="text-lg md:text-xl text-gray-300 group-hover:text-white transition">
                    {item.name}
                  </span>

                  {/* LINE */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full 
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
      scale-x-0 group-hover:scale-x-100 origin-left 
      transition-transform duration-500"></span>

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
      bg-gradient-to-r from-pink-500/10 to-purple-500/10 
      blur-xl transition duration-500"></div>
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}