import React from "react";
import homeVideo from "../assets/homeVideo.mp4"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, } from "framer-motion";
import { motion } from "framer-motion";
import FQimg from "../assets/FAQimg.jpg";
import { Star, User, Heart, Users, BadgeIndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [startCount, setStartCount] = React.useState(false);
    const ref = React.useRef();
    const navigate = useNavigate()
    const [openIndex, setOpenIndex] = useState(0);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const containerDelayed = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 1.6,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    const Counter = ({ value, start }) => {
        const [count, setCount] = React.useState(0);

        React.useEffect(() => {
            if (!start) return;

            let startVal = 0;
            const duration = 1500;
            const increment = value / (duration / 16);

            const timer = setInterval(() => {
                startVal += increment;
                if (startVal >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(startVal));
                }
            }, 16);

            return () => clearInterval(timer);
        }, [start, value]);

        return <span>{count}</span>;
    };

    return (
        <>
            {/* HERO SECTION */}
            <div className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-5 px-5 sm:px-8 md:px-10 py-10 bg-[#020617] overflow-hidden">

                {/* 🎥 BACKGROUND VIDEO */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={homeVideo} />
                </video>

                {/* 🌑 OVERLAY */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#020617]/80"></div>


                {/* LEFT */}
                <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">

                    <motion.h1
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        animate="visible"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white"
                    >
                        {"Transform Your ".split("").map((char, i) => (
                            <motion.span key={i} variants={child}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}

                        <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                            {"Business".split("").map((char, i) => (
                                <motion.span key={i} variants={child}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.h2
                        variants={containerDelayed}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-gray-200"
                    >
                        {"With Smart Digital Growth".split("").map((char, i) => (
                            <motion.span key={i} variants={child}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>

                    <p className="text-gray-400 mt-4 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
                        We provide digital marketing, SaaS solutions, IT services and manpower support to scale your business faster.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
                        <button onClick={() => navigate("/contact")} className="bg-gradient-to-r cursor-pointer from-[#2563EB] to-[#7C3AED] shadow-[0_10px_40px_rgba(124,58,237,0.6)] text-white px-6 py-3 rounded-lg hover:scale-105 transition w-full sm:w-auto">
                            Get Started
                        </button>
                        <button onClick={() => navigate("/who-we-are/about")} className="cursor-pointer border border-gray-600 px-6 py-3 text-gray-200 rounded-lg hover:bg-white hover:text-black transition w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                {/* <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center">

                    <div className="absolute w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-30"></div>

                    <motion.img
                        src={home1}
                        alt="hero"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 1,
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                        className="relative z-10 w-[90%] sm:w-[75%] max-w-[420px] rounded-2xl shadow-2xl"
                    />

                </div> */}

            </div>

            {/* STATS SECTION */}
            <div ref={ref} className="w-full py-16 bg-[#020617] flex flex-wrap justify-center gap-6 text-center">

                {[
                    { value: 100, suffix: "+", desc: "Clients Served" },
                    { value: 250, suffix: "+", desc: "Projects Completed" },
                    { value: 98, suffix: "%", desc: "Client Satisfaction" },
                    { value: 24, suffix: "/7", desc: "Support" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60, scale: 0.60 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}

                        transition={{
                            duration: 0.3,
                            delay: i * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}

                        viewport={{ once: false, margin: "-80px" }}

                        whileHover={{
                            y: -10,
                            scale: 1.06,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut",
                            },
                        }}

                        className="p-6 bg-[#0F172A]/80 backdrop-blur-lg border border-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 w-[180px] sm:w-[200px] cursor-pointer"
                    >
                        <h2 className="text-3xl font-bold text-purple-400">
                            <Counter value={item.value} start={startCount} />
                            {item.suffix}
                        </h2>
                        <p className="text-gray-400 mt-1">{item.desc}</p>
                    </motion.div>
                ))}

            </div>

            {/* SERVICES SECTION */}
            <div className="w-full py-20 px-6 md:px-16 bg-[#020617] relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

                {/* Heading */}
                <div className="text-center mb-14 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white font-['Sora'] tracking-tight">
                        Our Core{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Powerful solutions designed to scale your business with technology,
                        strategy, and execution.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

                    {[
                        { icon: <Star />, title: "Digital Marketing", desc: "Grow your business with data-driven strategies.", path: "/services/digital-marketing" },
                        { icon: <User />, title: "IT Solutions", desc: "Scalable and secure web & app development.", path: "/services/it-solutions" },
                        { icon: <Heart />, title: "SaaS Platforms", desc: "Automate and manage business operations.", path: "/services/saas-solution" },
                        { icon: <Users />, title: "Manpower Services", desc: "Hire skilled professionals easily.", path: "/services/manpower-services" },
                        { icon: <BadgeIndianRupee />, title: "Financial Support", desc: "Access funding & credit solutions.", path: "/services/credit-card-facility" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            onClick={() => navigate(item.path)}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 transition"
                        >
                            <div className="h-full bg-[#0B1120]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition">

                                {/* Icon */}
                                <div className="mb-5 text-purple-400 group-hover:text-white transition">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition">
                                    {item.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>

            {/* CORE SERVICES SECTION */}
            <div className="w-full py-24 bg-[#020617] px-6 md:px-16 relative overflow-hidden">

                {/* Background glow */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>

                {/* Heading */}
                <div className="text-center mb-20 relative z-10">
                    <p className="text-purple-400 tracking-widest uppercase text-sm">
                        Our Approach
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white font-['Sora'] leading-tight">
                        How We Turn Ideas Into{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Scalable Growth
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                        A refined process designed to transform your vision into measurable success
                        through strategy, execution, and continuous optimization.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10 relative z-10">

                    {[
                        {
                            number: "01",
                            title: "Deep Discovery",
                            desc: "We analyze your business, market dynamics, and customer behavior to uncover high-impact opportunities.",
                        },
                        {
                            number: "02",
                            title: "Strategic Execution",
                            desc: "We craft and implement tailored strategies using cutting-edge tools, data insights, and proven frameworks.",
                        },
                        {
                            number: "03",
                            title: "Scale & Optimize",
                            desc: "We continuously refine performance, optimize systems, and scale what works to maximize long-term growth.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-400/40 transition"
                        >

                            {/* Number */}
                            <div className="text-6xl font-light text-white/10 group-hover:text-purple-400/30 transition">
                                {item.number}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-purple-300 transition">
                                {item.title}
                            </h3>

                            {/* Desc */}
                            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

                        </motion.div>
                    ))}

                </div>

            </div>

            {/* FAQ SECTION */}
            <div className="w-full py-20 bg-[#020617] px-6 md:px-16">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Top <span className="text-purple-400">Questions</span> answered
                        </h2>

                        <p className="text-gray-400 mb-8">
                            In this section, we address frequently asked questions to assist you.
                        </p>

                        <div className="space-y-4">

                            {[
                                {
                                    question: "What marketing solutions do you provide?",
                                    answer: "Our company specializes in expert marketing guidance, campaign development, and analytics support. We customize our services to meet business needs.",
                                },
                                {
                                    question: "How can I reach your marketing team?",
                                    answer: "You can contact us via email, phone, or through our website contact form. Our team responds quickly.",
                                },
                                {
                                    question: "What is your service cancellation policy?",
                                    answer: "We offer flexible cancellation policies depending on your plan. Please contact support for details.",
                                },
                            ].map((faq, i) => (
                                <div key={i} className="border-b border-gray-700 pb-4">

                                    <div
                                        onClick={() =>
                                            setOpenIndex(openIndex === i ? null : i)
                                        }
                                        className="flex justify-between items-center cursor-pointer"
                                    >
                                        <h3 className="font-medium text-gray-300">
                                            {faq.question}
                                        </h3>

                                        <ChevronDown
                                            className={`transition-transform ${openIndex === i ? "rotate-180 text-purple-400" : "text-gray-500"
                                                }`}
                                        />
                                    </div>

                                    <AnimatePresence>
                                        {openIndex === i && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-gray-400 text-sm mt-3 overflow-hidden"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                </div>
                            ))}

                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 80, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="w-full flex justify-center"
                    >
                        <img
                            src={FQimg}
                            alt="faq"
                            className="w-[80%] md:w-[70%] rounded-2xl rotate-3 
                            shadow-[0_20px_60px_rgba(37,99,235,0.4)]"
                        />
                    </motion.div>

                </div>

            </div>

            {/* CTA SECTION */}
            <div className="w-full flex justify-center py-20 px-4 bg-[#020617]">
                <div className="w-full max-w-6xl rounded-2xl overflow-hidden relative h-[280px] flex items-center justify-center">

                    <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-90"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{
                            opacity: 1,
                            x: [-200, 30, -10, 0],
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: false }}
                        className="relative z-20 text-center px-6"
                    >
                        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
                            Explore our innovative marketing solutions
                        </h2>

                        <p className="text-gray-200 mb-6">
                            Looking for a marketing partner? We’re here to help!
                        </p>

                        <button onClick={() => { navigate("/contact-us") }} className="bg-white cursor-pointer px-6 py-3 rounded-full shadow-md font-medium hover:scale-105 transition">
                            Discover more
                        </button>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default Home;