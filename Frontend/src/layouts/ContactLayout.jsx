import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const ContactLayout = () => {
    const location = useLocation();

    const getTitle = () => {
        if (location.pathname.includes("job")) return "For job seekers";
        if (location.pathname.includes("employee")) return "For former employees";
        if (location.pathname.includes("verification")) return "Employment verification";
        if (location.pathname.includes("vendor")) return "For vendors & suppliers";
        return "Connect with sales";
    };

    return (
        <section className="w-full min-h-screen bg-[#0B0033] text-white ">

            {/* TOP BANNER */}
            <div className="w-full bg-[#0F172A] 
                  p-6 sm:p-8  lg:p-[50px] 
                  rounded-xl">

                <p className="relative text-pink-500 right-[-70px] text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                    CONTACT US
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {getTitle()}
                </h1>
            </div>

            {/* CONTENT AREA */}
            <div className="max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12">
                <Outlet />
            </div>

        </section>
    );
};

export default ContactLayout;