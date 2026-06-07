import React from "react";
import aboutPng from "../../assets/aboutpng.jpg";
import aboutmarketing from "../../assets/about.marketing.jpg";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";



const AboutUs = () => {
    <ScrollToTop />
    const navigate = useNavigate()
    return (
        <div className="w-full min-h-screen bg-[#020617]">

            {/* HERO SECTION */}
            <div className="w-full bg-gradient-to-r shadow-4xl from-[#0F172A] to-[#1E3A8A] py-16 px-6 md:px-16">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    About Viral mint
                </h1>
                <p className="text-gray-300 max-w-2xl text-lg">
                    We help businesses grow faster with powerful marketing strategies,
                    scalable IT solutions, and real-world execution.
                </p>
            </div>

            {/* ABOUT CONTENT */}
            <div className="max-w-7xl mx-auto  py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-blue-600 font-semibold mb-3">
                        Who We Are
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Your Growth Partner, Not Just a Marketing Agency
                    </h2>

                    <p className="text-gray-400 mb-5 text-lg leading-relaxed">
                        Viral mint is more than just a digital marketing agency — we act as your strategic growth partner.
                        We combine marketing expertise, IT solutions, and data-driven strategies to help businesses scale faster.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        From digital marketing and SaaS tools to manpower solutions and credit services,
                        we provide everything under one roof to support your business growth.
                    </p>
                </div>

                <div className="flex  justify-center">
                    <img
                        src={aboutPng}
                        alt="about"
                        loading="lazy"
                        decoding="async"
                        className="w-full max-w-md"
                    />
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="bg-[#020617] border-2 border-blue-200 rounded-4xl py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                        <p className="text-gray-600 mt-2">Clients Served</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">250+</h3>
                        <p className="text-gray-600 mt-2">Projects Completed</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">5X</h3>
                        <p className="text-gray-600 mt-2">Average Growth</p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                        <p className="text-gray-600 mt-2">Support</p>
                    </div>

                </div>
            </div>

            {/* marketing content */}
            <section className="w-full bg-[#020617] py-20 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="flex justify-center">
                        <img
                            src={aboutmarketing}
                            alt="marketing"
                            loading="lazy"
                            decoding="async"
                            className="w-full max-w-md rounded-3xl rotate-3 shadow-blue-600 shadow-2xl"
                        />
                    </div>

                    <div>
                        <p className="text-blue-600 font-semibold mb-3">
                            Why Viral mint
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                            The Future of Marketing is Smart, Scalable & Data-Driven 🚀
                        </h2>

                        <p className="text-gray-400 text-lg mb-5 leading-relaxed">
                            Traditional marketing is outdated. Today’s businesses need agile strategies,
                            real-time insights, and execution that delivers measurable growth.
                        </p>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            At Viral mint, we combine strategy, technology, and performance marketing
                            to build systems that scale your business — not just campaigns.
                        </p>

                        <button onClick={() => { navigate("/contact-us") }} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                            Explore Solutions →
                        </button>
                    </div>

                </div>
            </section>

            {/* Our Experts section */}
            <section className="bg-[#020617] py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Top line */}
                        <div className="w-16 h-1 bg-purple-500 mb-4"></div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-2">
                            ABOUT
                        </h2>

                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
                            Vcmo
                        </h3>

                        <p className="text-gray-300 mb-5 leading-relaxed">
                            We are a strategic{" "}
                            <span className="font-semibold text-blue-500">
                                Virtual cmo (Chief Marketing Officer)
                            </span>{" "}
                            service, dedicated to empowering startups, scaling businesses, and forward-thinking entrepreneurs to build strong, impactful brands and achieve sustainable growth.
                        </p>

                        <p className="text-gray-300 mb-5 leading-relaxed">
                            Acting as an extension of your leadership team, we deliver end-to-end marketing solutions—from strategy and planning to execution and performance optimization—without the overhead of a full-time CMO.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Our approach blends strategic thinking, creativity, data-driven insights, and seamless execution, ensuring that your marketing efforts are not just a cost, but a powerful and measurable engine for business growth.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src="/images/about-city.jpg" 
                            alt="City Business"
                            className="rounded-xl shadow-lg w-full h-full object-cover grayscale"
                        />
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 px-6 md:px-16 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">
                    Ready to Grow Your Business?
                </h2>
                <p className="text-white/80 mb-6">
                    Let’s build something amazing together 🚀
                </p>
                <button onClick={() => { navigate("/contact-us") }} className="bg-white text-blue-600 font-semibold px-6 cursor-pointer py-3 rounded-lg shadow hover:bg-gray-100 transition">
                    Get Started
                </button>
            </div>

        </div>
    );
};

export default AboutUs;