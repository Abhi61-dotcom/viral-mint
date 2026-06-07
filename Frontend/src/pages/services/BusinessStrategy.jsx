import React, { useRef } from "react";
import { motion } from "framer-motion";
import BusinesStrategy from "../../assets/servicesAssets/businessStrategyVideo.mp4"
import BackButton from "../../utils/BackButton ";
import { useNavigate } from "react-router-dom";


const BusinessStrategy = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#020617] text-white overflow-hidden">
            <BackButton />

            {/*  HERO */}
            <section className="min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden">

                {/* 🎥 VIDEO BACKGROUND */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={BusinesStrategy} type="video/mp4" />
                </video>

                {/*  DARK OVERLAY */}
                <div className="absolute inset-0 bg-[#020617]/50"></div>

                {/*  EXTRA GRADIENT (premium look) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                {/* GLOW (same tera) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-purple-500/20 blur-[150px]"></div>

                {/* CONTENT */}
                <div className="max-w-4xl relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-semibold leading-tight"
                    >
                        Strategic Direction That{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Drives Sustainable Growth
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 mt-6 text-lg max-w-2xl leading-relaxed"
                    >
                        We design high-impact business strategies that align vision with execution,
                        enabling organizations to scale efficiently, improve profitability, and
                        sustain long-term competitive advantage.
                    </motion.p>

                    <motion.button
                        onClick={() => { navigate("/contact-us") }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 
      rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                        Book Strategy Call
                    </motion.button>
                </div>

            </section>

            {/*  CORE SERVICES */}
            <section className="py-24 px-6 md:px-16">

                <h2 className="text-3xl md:text-5xl font-semibold mb-16">
                    Strategic Capabilities
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {[
                        {
                            title: "Market Positioning",
                            desc: "Craft a strong market identity that differentiates your brand and enhances competitive advantage.",
                        },
                        {
                            title: "Growth Strategy",
                            desc: "Identify scalable growth levers across channels, products, and customer segments.",
                        },
                        {
                            title: "Revenue Optimization",
                            desc: "Enhance pricing models and sales strategies to maximize profitability.",
                        },
                        {
                            title: "Operational Strategy",
                            desc: "Streamline operations and improve efficiency with structured frameworks.",
                        },
                        {
                            title: "Go-To-Market Planning",
                            desc: "Execute market entry strategies with precision and measurable impact.",
                        },
                        {
                            title: "Business Transformation",
                            desc: "Re-align business models to adapt to evolving market dynamics.",
                        },
                    ].map((item, i) => {

                        const ref = useRef(null);

                        const handleMouseMove = (e) => {
                            const rect = ref.current.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            ref.current.style.setProperty("--x", `${x}px`);
                            ref.current.style.setProperty("--y", `${y}px`);

                            const rotateX = ((y / rect.height) - 0.5) * 8;
                            const rotateY = ((x / rect.width) - 0.5) * -8;

                            ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        };

                        const handleLeave = () => {
                            ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
                        };

                        return (
                            <motion.div
                                key={i}
                                ref={ref}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleLeave}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-6 rounded-2xl 
                bg-white/5 backdrop-blur-lg 
                border border-white/10 
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]
                transition-all duration-300 transform-gpu overflow-hidden"
                            >

                                {/* SPOTLIGHT */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                                    style={{
                                        background: `radial-gradient(300px circle at var(--x) var(--y), rgba(99,102,241,0.15), transparent 40%)`,
                                    }}
                                />

                                <h3 className="text-xl font-semibold relative z-10">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 mt-2 relative z-10">
                                    {item.desc}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </section>

            {/*  APPROACH */}
            <section className="py-24 px-6 md:px-16">

                <h2 className="text-3xl md:text-5xl font-semibold mb-16">
                    Our Strategic Approach
                </h2>

                <div className="relative border-l border-white/10 pl-10 space-y-12">

                    {[
                        "Comprehensive business and market analysis to identify growth opportunities",
                        "Structured strategic frameworks aligned with long-term objectives",
                        "Execution roadmap with measurable KPIs and milestones",
                        "Continuous monitoring, optimization, and performance scaling",
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute -left-[42px] w-6 h-6 rounded-full 
              bg-gradient-to-r from-blue-500 to-purple-500 
              group-hover:scale-125 transition"></div>

                            <p className="text-gray-300 text-lg">
                                {step}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </section>

            {/*  CTA */}
            <section className="py-24 px-6 md:px-16 text-center relative">

                <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-purple-500/20 blur-[120px]"></div>

                <h2 className="text-3xl md:text-5xl font-semibold relative z-10">
                    Build a Strategy That Actually Works
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto relative z-10">
                    Develop a clear, data-driven roadmap that drives measurable growth
                    and long-term business success.
                </p>

                <button onClick={() => { navigate("/contact") }} className="mt-6 px-6 py-3 bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 
        rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 
        transition-all duration-300 relative z-10">
                    Get Started
                </button>

            </section>

            {/* Performance Dashboard */}
            <section className="py-24 px-6 md:px-16">

                {/* HEADING */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Strategy{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Performance Dashboard
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Track key business metrics, monitor performance, and make data-driven decisions
                        with a structured strategic dashboard.
                    </p>
                </div>

                {/* DASHBOARD */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* CARD 1 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                        <p className="text-gray-400 text-sm">Revenue Growth</p>
                        <h3 className="text-3xl font-semibold mt-2">+32%</h3>

                        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70%" }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            />
                        </div>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                        <p className="text-gray-400 text-sm">Customer Acquisition</p>
                        <h3 className="text-3xl font-semibold mt-2">+18%</h3>

                        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "60%" }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                            />
                        </div>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                        <p className="text-gray-400 text-sm">Operational Efficiency</p>
                        <h3 className="text-3xl font-semibold mt-2">+27%</h3>

                        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "75%" }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* SECOND ROW */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">

                    {/* BIG CARD */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                        <p className="text-gray-400">Strategic Execution Score</p>

                        <h2 className="text-5xl font-semibold mt-2">
                            87%
                        </h2>

                        <p className="text-gray-400 mt-3 text-sm">
                            Based on performance metrics, execution efficiency, and growth indicators.
                        </p>
                    </motion.div>

                    {/* SMALL STATS */}
                    <div className="grid grid-cols-2 gap-6">

                        {[
                            { label: "Markets Expanded", value: "12+" },
                            { label: "Revenue Channels", value: "8+" },
                            { label: "Conversion Rate", value: "24%" },
                            { label: "Retention Rate", value: "91%" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 
          backdrop-blur-xl text-center"
                            >
                                <h3 className="text-2xl font-semibold">{item.value}</h3>
                                <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>

        </div>
    );
};

export default BusinessStrategy;