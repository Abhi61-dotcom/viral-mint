import React from "react";
import { useEffect, useRef, useState } from "react";
import teamVideo from "../assets/careers/teamCareers.mp4"
import careersimg from "../assets/careers/careers.jpg"
import { FiChevronDown } from "react-icons/fi";
import { Globe, Shield, HeartPulse, PartyPopper, Star, Briefcase, Sparkles } from "lucide-react";

const benefits = [
    { icon: <Globe />, title: "World-class sites and facilities" },
    { icon: <Shield />, title: "Life insurance" },
    { icon: <HeartPulse />, title: "Healthcare coverage" },
    { icon: <PartyPopper />, title: "Birthday leave and paid time off" },
    { icon: <Star />, title: "Engagement and experience rewards" },
    { icon: <Briefcase />, title: "Career development programs" },
    { icon: <Sparkles />, title: "Wellness programs" },
];

const data = [
    {
        title: "Continuous Learning & Growth",
        content:
            "We believe every project is a chance to learn. From digital marketing strategies to SaaS tools and IT innovations, we help you grow with hands-on experience, mentorship, and real exposure."
    },
    {
        title: "Deliver Excellence Always",
        content:
            "We focus on delivering measurable results across all services—marketing campaigns, SaaS solutions, IT services, and manpower support. Excellence is our standard."
    },
    {
        title: "Ownership & Leadership",
        content:
            "We empower you to take ownership of your work. You don’t just execute tasks—you lead ideas, drive impact, and grow into leadership roles."
    },
    {
        title: "Emotional Intelligence at Work",
        content:
            "We value communication, empathy, and mutual respect. A strong team culture helps us perform better and build meaningful professional relationships."
    },
    {
        title: "Teamwork Drives Success",
        content:
            "Collaboration is key. Our teams across digital, tech, and business functions work together to deliver powerful outcomes."
    },
    {
        title: "Think Bold. Act Fast.",
        content:
            "We encourage creativity and fast execution. New ideas are always welcome, and we move quickly to turn them into real results."
    }
];

const Careers = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* hero */}
            <section className="w-full min-h-screen bg-[#070326] text-white px-6 md:px-16 py-16 flex items-center">

                <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="text-yellow-400 font-semibold tracking-widest mb-4">
                            CAREERS
                        </p>

                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                            Greatness starts here
                        </h1>

                        <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                            With state-of-the-art workspaces, outstanding benefits and some of
                            the best teammates in the world — we put our frontline first,
                            period. No matter where you are in the world, we’re committed to
                            investing in your career and future.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition">
                                Join Us
                            </button>

                            <button className="px-6 py-3 rounded-full border border-gray-400 hover:bg-white hover:text-black transition">
                                About Us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="relative flex justify-center items-center">

                        {/* Glow Circle */}
                        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

                        {/* Border Circle */}
                        <div className="absolute w-[320px] md:w-[520px] h-[320px] md:h-[520px] border-3 border-double border-blue-600 rounded-[10%_60%_10%_40%]"></div>

                        {/* Image */}
                        <div className="relative w-[260px] md:w-[450px] h-[260px] md:h-[450px] rounded-[10%_10%_10%_40%]  overflow-hidden">
                            <img
                                src={careersimg}
                                alt="team"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* disclaimer */}
            <section className="w-full bg-black text-white py-12 md:py-16 px-6 md:px-16 relative">

                {/* Top Border */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#2a0b6b]"></div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#2a0b6b]"></div>

                <div className="max-w-6xl">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                        Disclaimer
                    </h2>

                    {/* Warning */}
                    <p className="text-yellow-400 font-semibold tracking-wider mb-6 text-sm md:text-base">
                        BEWARE OF RECRUITMENT SCAMS
                    </p>

                    {/* Content */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 max-w-4xl">
                        During the application process, TaskUs will never ask you for:{" "}
                        <span className="font-semibold text-white">
                            payment of any kind or your bank information.
                        </span>
                    </p>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        We will only contact you via our{" "}
                        <span className="font-semibold text-white">
                            official channels.
                        </span>
                    </p>

                </div>
            </section>

            {/* life at CMO */}
            <section className="w-full bg-[#070326] text-white px-6 md:px-16 py-16 relative overflow-hidden">

                {/* Outer Curved Border */}
                <div className="absolute right-0 top-10 w-[85%] h-[85%] border border-purple-500/30 rounded-[120px] md:rounded-[200px]"></div>

                <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

                    {/* LEFT IMAGE */}
                    <div className="relative flex justify-center md:justify-start">

                        {/* Image Border Shape */}
                        <div className="p-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-[120px] md:rounded-[200px]">

                            <div className="bg-[#070326] rounded-[120px] md:rounded-[200px] overflow-hidden">
                                <video
                                    src={teamVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                ></video>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        <p className="text-yellow-400 font-semibold tracking-widest mb-4 text-sm">
                            LIFE AT VIRTUAL CMO
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
                            Lead Your Growth with Us
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
                            Your brand deserves more than just marketing — it needs strategic leadership. Our Viral mint services bring you expert guidance, data-driven decisions, and scalable growth strategies without the cost of a full-time executive.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
                            We work as an extension of your team to define vision, optimize campaigns, and drive measurable results. From brand positioning to performance marketing, we ensure every move aligns with your business goals and delivers real impact.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">

                            <button className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                                Apply now
                            </button>

                            <button className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                                Social Impact & Inclusion
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            {/* benefits */}
            <section className="w-full bg-[#070326] text-white py-16 px-6 md:px-16 relative overflow-hidden">

                {/* Dotted Circular Border */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <div className="w-[90%] h-[90%] border-3 border-dashed border-blue-700 rounded-[200px]"></div>
                </div>

                {/* Heading */}
                <div className="text-center mb-14 relative z-10">
                    <p className="text-yellow-400 tracking-widest text-sm mb-3 font-semibold">
                        WHAT SETS US APART
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                        Growth-Driven Advantages
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        From day one, we act as your strategic partner — guiding, optimizing, and executing marketing that actually drives results.
                    </p>
                </div>

                {/* Cards Layout */}
                <div className="relative z-10 flex flex-col items-center gap-10">

                    {/* Top Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                        {benefits.slice(0, 4).map((item, i) => (
                            <div key={i} className="bg-blue-600 rounded-2xl p-6 min-h-[180px] flex flex-col justify-between">
                                <div className="text-yellow-400 mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                        {benefits.slice(4).map((item, i) => (
                            <div key={i} className="bg-blue-600 rounded-2xl p-6 min-h-[180px] flex flex-col justify-between">
                                <div className="text-yellow-400 mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#0b0220] text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-yellow-400 text-sm tracking-widest mb-2">
                        WHAT MAKES US US
                    </p>
                    <h2 className="text-4xl font-semibold mb-4">
                        Careers at Viral mint
                    </h2>
                    <p className="text-gray-300 mb-10">
                        Join a team where innovation meets execution. We empower people to grow,
                        lead, and create impact across digital marketing, SaaS, IT services,
                        manpower, and financial solutions.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-yellow-500/40 py-4"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-left text-lg font-medium"
                            >
                                {item.title}

                                {/* Arrow Icon */}
                                <FiChevronDown
                                    className={`text-yellow-400 text-2xl transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Careers;