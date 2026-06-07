import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Wallet, TrendingUp, ShieldCheck, BarChart3, Globe } from "lucide-react";
import creditvideo from "../../assets/servicesAssets/creditCardvideo.mp4"
import { useNavigate } from "react-router-dom";
import CreditCTAimage from "../../assets/servicesAssets/creditCTAimage.jpg"
import BackButton from "../../utils/BackButton ";

const CreditFacility = () => {

    const navigate = useNavigate()

    const icons = [
        <CreditCard />,
        <Wallet />,
        <TrendingUp />,
        <ShieldCheck />,
        <BarChart3 />,
        <Globe />,
    ];
    return (
        <div className="bg-[#020617] text-white overflow-hidden">
            <BackButton />

            {/*  HERO */}
            <section className="relative h-screen flex items-center px-6 md:px-16">

                {/* IMAGE */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={creditvideo} type="video/mp4" />
                </video>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#020617]/50"></div>

                {/* CONTENT */}
                <div className="relative z-10 max-w-3xl">
                    {/* <p className="text-blue-400 text-sm mb-3">// CREDIT SOLUTIONS</p> */}

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        Access Smart Credit Lines That{" "}
                        <span className="text-blue-500">Accelerate Business Growth</span>
                    </h1>

                    <p className="text-gray-400 mt-6">
                        Empower your business with flexible credit solutions, real-time financial control,
                        and scalable funding designed for modern enterprises.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button onClick={() => { navigate("/contact") }} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                            Apply Now
                        </button>
                        <button onClick={() => { navigate("/who-we-are/about") }} className="px-6 py-3 border border-white/20 rounded-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/*  STATS */}
            <section className="px-6 md:px-16 -mt-16 relative z-10">
                <div className="grid md:grid-cols-4 gap-6">

                    {[
                        { value: "₹50Cr+", label: "Credit Disbursed" },
                        { value: "200+", label: "Businesses Funded" },
                        { value: "99.9%", label: "Approval Rate" },
                        { value: "24h", label: "Processing Time" },
                    ].map((item) => (
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center backdrop-blur-lg">
                            <h2 className="text-3xl font-semibold">{item.value}</h2>
                            <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/*  FEATURES */}
            <section className="py-24 px-6 md:px-16">

                {/* 🔥 HEADING */}
                <h2 className="text-3xl md:text-5xl font-semibold mb-12">
                    Credit{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Expertise
                    </span>
                </h2>

                {/* 🔥 CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    {[
                        {
                            title: "Business Credit Cards",
                            desc: "High-limit corporate cards designed to manage large-scale operational expenses efficiently.",
                        },
                        {
                            title: "Working Capital Solutions",
                            desc: "Maintain liquidity with flexible funding options tailored for day-to-day operations.",
                        },
                        {
                            title: "Credit Optimization",
                            desc: "Strategically structure your credit usage to maximize efficiency and minimize cost.",
                        },
                        {
                            title: "Secure Transactions",
                            desc: "Enterprise-grade security systems ensuring safe and reliable financial operations.",
                        },
                        {
                            title: "Financial Analytics",
                            desc: "Real-time insights and reports to track spending patterns and optimize decisions.",
                        },
                        {
                            title: "Global Payment Access",
                            desc: "Execute transactions seamlessly across international markets with full compliance.",
                        },
                    ].map((item, i) => {

                        const ref = useRef(null);

                        const handleMouseMove = (e) => {
                            const rect = ref.current.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            ref.current.style.setProperty("--x", `${x}px`);
                            ref.current.style.setProperty("--y", `${y}px`);

                            // 🔥 3D TILT
                            const rotateX = ((y / rect.height) - 0.5) * 10;
                            const rotateY = ((x / rect.width) - 0.5) * -10;

                            ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        };

                        const handleMouseLeave = () => {
                            ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
                        };

                        return (
                            <div
                                key={i}
                                ref={ref}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="group relative p-6 rounded-2xl 
          bg-white/5 backdrop-blur-lg 
          border border-white/10 
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]
          transition-all duration-300
          transform-gpu
          overflow-hidden"
                            >

                                {/* 🎯 SPOTLIGHT */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                    style={{
                                        background: `radial-gradient(300px circle at var(--x) var(--y), rgba(99,102,241,0.15), transparent 40%)`,
                                    }}
                                />

                                {/* 🧊 ICON */}
                                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl 
          bg-gradient-to-br from-blue-500 to-purple-500 
          shadow-lg shadow-purple-500/20 text-white">
                                    {icons[i]}
                                </div>

                                {/* 🔥 TITLE */}
                                <h3 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                {/* 📄 DESC */}
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </section>

            {/*  PROCESS */}
            <section className="py-24 px-6 md:px-16 text-center relative overflow-hidden">

                {/* 🔥 BACKGROUND GLOW */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[400px] h-[200px] bg-purple-500/20 blur-[120px]"></div>

                {/* HEADING */}
                <h2 className="text-3xl md:text-5xl font-semibold mb-20 relative z-10">
                    Our{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Credit Process
                    </span>
                </h2>

                <div className="relative grid md:grid-cols-4 gap-10 items-start">

                    {/* 🔥 CONNECTING LINE */}
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-blue-500/20"></div>

                    {[
                        {
                            title: "Apply & Submit Details",
                            desc: "Provide essential business and financial information to initiate the process.",
                        },
                        {
                            title: "Verification & Risk Check",
                            desc: "Automated checks ensure eligibility, compliance, and financial stability.",
                        },
                        {
                            title: "Approval & Limit Setup",
                            desc: "Receive a tailored credit structure aligned with your business capacity.",
                        },
                        {
                            title: "Start Using Credit",
                            desc: "Instantly deploy capital to scale operations and drive growth.",
                        },
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group"
                        >

                            {/* 🔥 NUMBER BADGE */}
                            <div className="relative z-10 w-14 h-14 mx-auto rounded-full 
        bg-gradient-to-br from-blue-500 to-purple-500 
        flex items-center justify-center 
        text-white font-semibold text-lg
        shadow-lg shadow-purple-500/30
        group-hover:scale-110 transition">

                                {i + 1}

                                {/* GLOW RING */}
                                <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
                            </div>

                            {/* 🔥 TITLE */}
                            <h3 className="mt-6 text-white font-semibold text-lg">
                                {step.title}
                            </h3>

                            {/* 🔥 DESC */}
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed px-2">
                                {step.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </section>

            {/*  CTA */}
            <section className="px-6 md:px-16 pb-24">

                <div className="relative rounded-2xl overflow-hidden group">

                    {/* IMAGE */}
                    <img
                        src={CreditCTAimage}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-[#020617]/50"></div>

                    {/* GRADIENT LAYER */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                    {/* CONTENT */}
                    <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                        {/* TEXT */}
                        <div className="max-w-xl">

                            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                                Strengthen Your Business With{" "}
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Smarter Credit Infrastructure
                                </span>
                            </h2>

                            <p className="text-gray-400 mt-4 leading-relaxed">
                                Leverage structured credit solutions designed to optimize cash flow,
                                reduce financial friction, and accelerate sustainable business expansion.
                            </p>
                        </div>

                        {/* BUTTON */}
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg 
        hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                                Apply Now
                            </button>

                            <button
                                onClick={() => { navigate("/contact") }}
                                className="px-6 py-3 border border-white/20 rounded-lg 
        hover:bg-white/10 transition-all duration-300">
                                Talk to Expert
                            </button>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default CreditFacility;