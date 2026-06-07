import React from "react";
import { useNavigate } from "react-router-dom";
import { Server, ShieldCheck, Cpu, Database } from "lucide-react";
import itBg from "../../assets/servicesAssets/ItSolution.mp4"
import BackButton from "../../utils/BackButton ";

const ItSolution = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Server />,
            title: "IT Infrastructure",
            desc: "Robust and scalable infrastructure solutions to support your business operations.",
        },
        {
            icon: <ShieldCheck />,
            title: "Cyber Security",
            desc: "Advanced security solutions to protect your systems, data, and digital assets.",
        },
        {
            icon: <Cpu />,
            title: "Software Development",
            desc: "Custom enterprise software tailored to your business requirements.",
        },
        {
            icon: <Database />,
            title: "Data Management",
            desc: "Efficient data storage, processing, and analytics solutions for better decisions.",
        },
    ];

    return (
        <>
            <BackButton />
            {/* HERO (Different Layout) */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center px-6 md:px-16 overflow-hidden">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={itBg} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-[#020617]/50"></div>

                <div className="relative z-10 max-w-4xl">


                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Smart IT Solutions To Power Your Business Infrastructure
                    </h1>

                    <p className="text-gray-300 mb-8">
                        We deliver reliable, secure, and scalable IT solutions that help businesses streamline operations, enhance performance, and stay competitive in the digital world.
                    </p>

                    <button
                        onClick={() => navigate("/contact")}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 rounded-lg text-white hover:scale-105 transition"
                    >
                        Get Consultation
                    </button>
                </div>
            </section>

            {/* SERVICES GRID (Card Style Different) */}
            <section className="w-full py-24 px-6 md:px-16 bg-[#020617]">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Our IT Services
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {services.map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:scale-105 transition">

                            <div className="text-blue-400 mb-4">
                                {item.icon}
                            </div>

                            <h3 className="text-white font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>
            </section>

            {/* WHY CHOOSE US  */}

            <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B] relative overflow-hidden">

                {/* 🌌 GLOW EFFECT */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px]"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Why Choose Our IT Solutions?
                        </h2>

                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Scalable infrastructure for growing businesses
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                24/7 monitoring & support
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Advanced security protocols
                            </li>

                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Cost-effective & optimized solutions
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">

                        <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                            We Don’t Just Build Systems,
                        </h3>

                        <p className="text-gray-300 mb-6">
                            We design and develop intelligent IT ecosystems that are secure, scalable, and performance-driven to help your business grow faster.
                        </p>

                        <button onClick={() => { navigate("/contact-us") }} className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-white hover:scale-105 transition shadow-lg shadow-purple-500/30">
                            Explore Solutions
                        </button>

                    </div>

                </div>

            </section>

            {/* CTA (Different Tone) */}
            <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#1E293B] text-center">

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Need Reliable IT Solutions For Your Business?
                </h2>

                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Let’s build a secure and scalable IT environment tailored to your needs.
                </p>

                <button
                    onClick={() => navigate("/contact")}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg text-white hover:scale-105 transition"
                >
                    Contact Our Experts
                </button>

            </section>
        </>
    );
};

export default ItSolution;