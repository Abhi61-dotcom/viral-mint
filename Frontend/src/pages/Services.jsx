import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dm from "../assets/dm.jpg"
import sas from "../assets/sas.jpg"
import ITS from "../assets/IT.jpg"
import MP from "../assets/mp.png"
import CCF from "../assets/CCF.jpg"
import BS from "../assets/BS.jpg"
import bgvideo from "../assets/testimonial bg video.mp4"
import contCompany from "../assets/contack comapnies.png"


const Services = () => {
    const navigate = useNavigate()

    const services = [
        {
            name: "digital-marketing",
            title: "Digital Marketing",
            desc: "Drive measurable growth with SEO, performance marketing, social media campaigns, and data-driven strategies tailored to your business goals.",
            img: dm
        },
        {
            name: "saas-solution",
            title: "SaaS Solutions",
            desc: "Build and scale powerful SaaS platforms with automation, cloud integration, and user-focused design to streamline your operations.",
            img: sas
        },
        {
            name: "it-solutions",
            title: "IT Solutions",
            desc: "We deliver modern, scalable web applications, custom software, and enterprise-grade solutions using the latest technologies.",
            img: ITS
        },
        {
            name: "manpower-services",
            title: "Manpower Services",
            desc: "Access highly skilled professionals and workforce solutions to accelerate your projects and improve productivity.",
            img: MP
        },
        {
            name: "credit-card-facility",
            title: "Credit Card Facility",
            desc: "Get access to flexible business credit solutions, funding support, and financial tools to scale your company faster.",
            img: CCF
        },
        {
            name: "business-strategy",
            title: "Business Strategy",
            desc: "End-to-end consulting including branding, growth strategy, and performance optimization to maximize business impact.",
            img: BS
        },
    ];

    // TESTIMONIAL DATA
    const testimonials = [
        {
            text: "Working with Viral mint transformed our entire digital strategy. Our ROI increased by 3X within just a few months.",
            name: "Rahul Sharma",
            role: "Founder, StartupX",
        },
        {
            text: "Their SaaS solutions helped us automate operations and reduce manual work by over 60%. Highly recommended team.",
            name: "Ankit Verma",
            role: "CEO, TechFlow",
        },
        {
            text: "From branding to performance marketing, they handled everything flawlessly. Our brand visibility skyrocketed.",
            name: "Priya Singh",
            role: "Marketing Head, GrowthHub",
        },
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    return (
        <div className="w-full min-h-screen bg-[#020617]">

            {/* HEADER */}
            <div className="w-full bg-gradient-to-r from-[#0F172A] to-[#1E3A8A]  py-10 px-6 md:px-16">

                <div className="max-w-6xl">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                        Our Services & Solutions
                    </h1>

                    <p className="text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed">
                        We provide end-to-end business solutions including digital marketing,
                        SaaS platforms, IT development, and strategic consulting to help your
                        business scale faster and achieve long-term success.
                    </p>

                </div>

            </div>

            {/* SERVICES */}
            <div className="py-16 px-6 md:px-16 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {services.map((item, i) => (
                        <motion.div
                            key={i}

                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: i * 0.1,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, margin: "-80px" }}

                            whileHover={{
                                y: -10,
                                scale: 1.04,
                            }}

                            className="group relative bg-[#0F172A]/80 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-md hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)] transition-all duration-300 p-6 cursor-pointer overflow-hidden"
                            onClick={() => navigate(`/services/${item.name}`)}
                        >

                            {/*HOVER GLOW EFFECT */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/20 to-[#7C3AED]/0 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-lg mb-4 relative z-10">
                                <motion.img
                                    src={item.img}
                                    alt="service"
                                    className="w-full h-[180px] object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl font-semibold text-white group-hover:text-[#A78BFA] mb-2 transition relative z-10">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                {item.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>

            {/* TESTIMONIAL CAROUSEL */}
            <div className="w-full h-[450px] sm:h-[500px] md:h-[520px] flex items-center justify-center relative overflow-hidden my-6 md:my-10 rounded-2xl md:rounded-[30px]">

                {/* BACKGROUND VIDEO */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={bgvideo} type="video/mp4" />
                </video>

                {/* OVERLAY */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

                {/* LEFT ARROW */}
                <button
                    onClick={prev}
                    className="absolute left-3 sm:left-5 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 p-2 sm:p-3 rounded-full backdrop-blur-md hover:bg-black/60 active:scale-95 transition"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={next}
                    className="absolute right-3 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 p-2 sm:p-3 rounded-full backdrop-blur-md hover:bg-black/60 active:scale-95 transition"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* CARD */}
                <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl px-4 sm:px-6 relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -40 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#0F172A]/70 backdrop-blur-lg text-center p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/20"
                        >

                            {/* QUOTE */}
                            <div className="text-3xl sm:text-4xl text-[#A78BFA] mb-3 sm:mb-4">“</div>

                            {/* TEXT */}
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                                {testimonials[index].text}
                            </p>

                            {/* USER */}
                            <h3 className="font-semibold text-white text-base sm:text-lg">
                                {testimonials[index].name}
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-400">
                                {testimonials[index].role}
                            </p>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* DOTS */}
                <div className="absolute bottom-3 sm:bottom-5 md:bottom-6 flex gap-2 sm:gap-3 z-10">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${i === index
                                ? "w-5 sm:w-6 bg-white"
                                : "w-2 bg-gray-400"
                                }`}
                        />
                    ))}
                </div>

            </div>

            {/* CLIENTS SECTION */}
            <div className="w-full py-20 bg-[#020617] px-6 md:px-16 text-center">

                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Trusted by growing brands & startups
                </h2>

                <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                    We’ve partnered with startups, enterprises, and growing businesses to deliver impactful digital solutions and measurable results.
                </p>

                <div className="mt-4 text-[#38BDF8] hover:text-[#A78BFA] font-medium cursor-pointer hover:underline">
                    View case studies →
                </div>

                <img src={contCompany} alt="" className="invert brightness-50 contrast-100" />

            </div>

        </div>
    );
};

export default Services;