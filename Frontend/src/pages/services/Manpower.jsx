import React from "react";
import { Code, Palette, Megaphone, Briefcase, Users, Headphones, CheckCircle } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import manpowerVideo from "../../assets/servicesAssets/manpower hero video.mp4"
import hiringProcess from "../../assets/servicesAssets/manpower-Hiring-process.jpg"
import BackButton from "../../utils/BackButton ";

const Manpower = () => {
    const navigate = useNavigate()
    const icons = [
        <Code />,
        <Palette />,
        <Megaphone />,
        <Briefcase />,
        <Users />,
        <Headphones />,
    ];
    return (
        <div className="bg-[#020617] text-white">
            <BackButton/>

            {/*  HERO */}
            <section className="h-screen flex items-center px-6 md:px-16 relative overflow-hidden">

                {/* VIDEO BACKGROUND */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={manpowerVideo} />
                </video>

                {/*  DARK OVERLAY */}
                <div className="absolute inset-0 bg-[#020617]/50"></div>

                {/*  CONTENT */}
                <div className="max-w-3xl relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-semibold leading-tight text-white"
                    >
                        Build Your Team With{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Top Global Talent
                        </span>
                    </motion.h1>

                    <p className="text-gray-300 mt-6 text-lg">
                        We help businesses hire pre-vetted professionals across industries,
                        enabling faster growth and operational excellence.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button
                            onClick={() => navigate("/contact")} className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition">
                            Hire Talent
                        </button>
                        <button onClick={() => { navigate("/who-we-are/advantage") }}  className="px-6 py-3 border border-gray-400 rounded-full hover:border-white transition">
                            Learn More
                        </button>
                    </div>
                </div>

            </section>

            {/*  STATS */}
            <section className="py-20 px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {["500+", "120+", "30+", "10+"].map((item, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.05 }}>
                        <h2 className="text-5xl font-semibold">{item}</h2>
                        <p className="text-gray-400 mt-2">Professionals</p>
                    </motion.div>
                ))}
            </section>

            {/*  TALENT CATEGORIES */}
            <section className="py-24 px-6 md:px-16">

                {/*  HEADING */}
                <h2 className="text-3xl md:text-5xl font-semibold mb-12">
                    Specialized{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Talent Solutions
                    </span>
                </h2>

                {/*  CARDS */}
                <div className="grid md:grid-cols-3 gap-6">

                    {[
                        {
                            title: "Engineering Talent",
                            desc: "Full-stack developers, backend engineers, and system architects to build scalable platforms.",
                        },
                        {
                            title: "Creative Specialists",
                            desc: "UI/UX designers and brand strategists to elevate your product experience.",
                        },
                        {
                            title: "Growth Experts",
                            desc: "Performance marketers and strategists focused on acquisition and scaling.",
                        },
                        {
                            title: "Business Development",
                            desc: "Sales professionals and deal-makers to drive revenue growth.",
                        },
                        {
                            title: "HR & Operations",
                            desc: "People managers and operations experts to streamline processes.",
                        },
                        {
                            title: "Customer Success",
                            desc: "Support teams focused on retention and long-term engagement.",
                        },
                    ].map((item, i) => {

                        const ref = useRef(null);

                        const handleMouseMove = (e) => {
                            const rect = ref.current.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            ref.current.style.setProperty("--x", `${x}px`);
                            ref.current.style.setProperty("--y", `${y}px`);

                            //  3D TILT
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

                                {/* SPOTLIGHT */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                                    style={{
                                        background: `radial-gradient(300px circle at var(--x) var(--y), rgba(99,102,241,0.15), transparent 40%)`,
                                    }}
                                />

                                {/*  ICON */}
                                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl 
          bg-gradient-to-br from-blue-500 to-purple-500 
          shadow-lg shadow-purple-500/20 text-white">
                                    {icons[i]}
                                </div>

                                {/*  TITLE */}
                                <h3 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h3>

                                {/*  DESC */}
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </section>

            {/*  PROCESS (DIFFERENT STYLE) */}
            <section className="py-24 px-6 md:px-16">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-16">
                            Our Hiring Process
                        </h2>

                        <div className="space-y-10">
                            {[
                                "Requirement Analysis",
                                "Talent Shortlisting",
                                "Interview & Selection",
                                "Onboarding & Scaling",
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-center gap-6 group"
                                >

                                    {/* NUMBER */}
                                    <div className="w-12 h-12 rounded-full 
            bg-gradient-to-br from-blue-500 to-purple-500 
            flex items-center justify-center 
            text-white font-semibold 
            shadow-md group-hover:scale-110 transition">
                                        {i + 1}
                                    </div>

                                    {/* TEXT */}
                                    <h3 className="text-xl text-white group-hover:text-purple-300 transition">
                                        {step}
                                    </h3>

                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT (IMAGE) */}
                    <div className="relative">

                        {/* IMAGE */}
                        <img
                            src={hiringProcess}
                            alt="Hiring Process"
                            className="rounded-2xl w-full object-cover"
                        />

                        {/* GLASS OVERLAY */}
                        <div className="absolute inset-0 rounded-2xl 
      bg-gradient-to-tr from-purple-500/20 to-blue-500/20"></div>

                        {/* FLOATING CARD */}
                        <div className="absolute bottom-6 left-6 
      bg-white/10 backdrop-blur-lg 
      border border-white/20 
      px-4 py-2 rounded-lg">
                            <p className="text-sm text-white">
                                Fast & Efficient Hiring
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/*  WHY CHOOSE US */}
            <section className="py-24 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Our Talent Network
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-lg">
                        We connect you with highly qualified professionals who align with your
                        business goals, ensuring productivity, efficiency, and long-term success.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="grid gap-6">

                    {[
                        {
                            title: "Pre-vetted Talent",
                            desc: "Carefully screened professionals ready to deliver from day one.",
                        },
                        {
                            title: "Fast Hiring",
                            desc: "Reduce hiring time with our streamlined selection process.",
                        },
                        {
                            title: "Flexible Models",
                            desc: "Scale your workforce up or down based on your needs.",
                        },
                        {
                            title: "Global Reach",
                            desc: "Access talent from across the world without limitations.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative p-5 rounded-2xl 
        
        bg-white/5 backdrop-blur-lg 
        border border-white/10 
        
        shadow-[0_10px_30px_rgba(0,0,0,0.4)] 
        hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)]
        
        transition-all duration-300 overflow-hidden"
                        >

                            {/*  GLOW */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
        bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>

                            {/* ICON + CONTENT */}
                            <div className="relative z-10 flex items-start gap-4">

                                {/* ICON */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg 
          bg-gradient-to-br from-blue-500 to-purple-500 
          text-white shadow-md">
                                    <CheckCircle size={18} />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="text-white font-semibold text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section>

            {/*  CTA */}
            <section className="py-24 px-6 md:px-16 text-center">

                <h2 className="text-3xl md:text-5xl font-semibold">
                    Ready to Build Your Dream Team?
                </h2>

                <p className="text-gray-400 mt-4">
                    Let’s help you hire faster and smarter.
                </p>

                <button onClick={() => navigate("/contact")} className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    Get Started
                </button>

            </section>

        </div>
    );
};

export default Manpower;