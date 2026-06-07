import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock, BadgeCheck, Clock, Smile, FileText, } from "lucide-react";
import Centered from "../../assets/servicesAssets/Centered.png"
import Shield from "../../assets/servicesAssets/Shield.png"
import DetectAi from "../../assets/servicesAssets/DetectAi.png"

const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
};

const data = [
    {
        icon: <ShieldCheck size={28} />,
        title: "Protecting users and communities",
        desc: "Shielding users and supporting safety across formats, we remove harmful content while preserving positive engagement — creating safer digital spaces so communities thrive.",
    },
    {
        icon: <Lock size={28} />,
        title: "Securing GenAI systems",
        desc: "Through human-in-the-loop enforcement, we power AI systems to deliver accurate outputs and avoid egregious content, ensuring models remain safe, ethical and aligned with user expectations.",
    },
    {
        icon: <BadgeCheck size={28} />,
        title: "Preserving online platform integrity",
        desc: "Helping marketplaces protect users, content and revenue streams, we reduce platform risk by verifying identities, moderating listings and ads, tackling fraud and scams.",
    },
    {
        icon: <Clock size={28} />,
        title: "Accelerating safety with advanced tech",
        desc: "We combine AI, human expertise, proprietary digital protection systems and deepfake detection tools to drive faster moderation, empower teams and defend against synthetic threats.",
    },
    {
        icon: <Smile size={28} />,
        title: "Ensuring moderator well-being",
        desc: "Our in-house teams of clinicians, researchers and certified mental health professionals design and execute programs proven to improve well-being and performance metrics while significantly reducing attrition.",
    },
    {
        icon: <FileText size={28} />,
        title: "Managing complex digital policy",
        desc: "Through intelligence-driven insights, regulatory consulting and risk assessments, we help platforms get ahead of evolving policies, mitigate threats and stay compliant.",
    },
];


const TrustAndSafety = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* head */}
            <section className="bg-[#0B0233] text-white min-h-screen flex items-center px-6 md:px-16 py-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="text-yellow-400 font-semibold tracking-wide mb-4">
                            TRUST & SAFETY
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Safeguard your platform <br />
                            Protect your users
                        </h1>

                        <p className="text-gray-300 mb-8 max-w-lg">
                            Backed by scientific research, frontline experts and scaled
                            operational excellence, we help platforms protect users,
                            meet compliance requirements and build lasting resilience.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium">
                            Speak to an expert
                        </button>
                    </div>

                    {/* RIGHT IMAGE + SHAPES */}
                    <div className="relative flex justify-center items-center">

                        {/* Outer dashed circle */}
                        <div className="absolute w-[420px] h-[420px] border border-dashed border-cyan-400 rounded-full"></div>

                        {/* Purple circle */}
                        <div className="absolute w-[460px] h-[460px] border border-purple-500 rounded-full opacity-50"></div>

                        {/* Image container */}
                        <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-transparent">
                            <img
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                alt="person"
                                className="w-full h-full object-cover"
                            />

                            {/* Caption */}
                            <span className="absolute bottom-4 right-4 text-sm text-white">
                                Gary, IT, USA
                            </span>
                        </div>

                        {/* Colored square accents */}
                        <div className="absolute w-[420px] h-[420px] border border-blue-500 rounded-2xl"></div>
                        <div className="absolute w-[380px] h-[380px] border border-pink-500 rounded-2xl"></div>
                    </div>
                </div>
            </section>

            {/* card */}
            <section className="bg-[#0B0233] py-20 px-6 md:px-16">
                <div onClick={() => navigate("/contact")} className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 ">

                    {/* CARD 1 */}
                    <div className="bg-gradient-to-b from-purple-600 to-pink-300 p-8 rounded-3xl text-white transition-all duration-300 hover:shadow-xl shadow-orange-300 hover:-translate-y-1">
                        <h2 className="text-6xl font-bold mb-4">
                            <Counter end={99} suffix="%" />
                        </h2>
                        <h3 className="text-xl font-semibold mb-3">
                            Image generation accuracy
                        </h3>
                        <p className="text-purple-100 mb-6">
                            Specialized moderation boosts efficiency, quality and policy
                            compliance of AI prompts and outputs.
                        </p>
                        <button className="text-white font-medium">
                            Learn more &gt;
                        </button>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-gradient-to-b from-purple-600 to-pink-300 p-8 rounded-3xl text-white transition-all duration-300 hover:shadow-xl shadow-orange-300 hover:-translate-y-1">
                        <h2 className="text-6xl font-bold mb-4">
                            <Counter end={30} suffix="%" />
                        </h2>
                        <h3 className="text-xl font-semibold mb-3">
                            Lower overall attrition
                        </h3>
                        <p className="text-purple-100 mb-6">
                            Science-based wellness program improves team resiliency and
                            retention in safety ops.
                        </p>
                        <button className="text-white font-medium">
                            Learn more &gt;
                        </button>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-gradient-to-b from-purple-600 to-pink-300 p-8 rounded-3xl text-white transition-all duration-300 hover:shadow-xl shadow-orange-300 hover:-translate-y-1">
                        <h2 className="text-6xl font-bold mb-4">
                            <Counter end={200} suffix="k" />
                        </h2>
                        <h3 className="text-xl font-semibold mb-3">
                            Red teaming prompts developed
                        </h3>
                        <p className="text-purple-100 mb-6">
                            Stress testing AI systems to reveal hidden risks and edge-case
                            failures to protect users.
                        </p>
                        <button className="text-white font-medium">
                            Learn more &gt;
                        </button>
                    </div>

                </div>
            </section>

            {/* Trust services */}
            <section className="bg-[#0B0233] py-20 px-6 md:px-16 text-white relative overflow-hidden">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-3">
                        TRUST & SAFETY SERVICES
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
                        Trusted and tested partner to market leaders
                    </h2>
                </div>

                {/* Grid */}
                <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-9">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-blue-600 to-blue-500 p-8 rounded-2xl 
            transition-all duration-300 
            hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 
            cursor-pointer group"
                        >
                            {/* Icon */}
                            <div className="mb-5 text-white opacity-90 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl text-black font-semibold mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-blue-100 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* subtle background circle (premium feel) */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] border border-cyan-400/30 rounded-full blur-2xl"></div>
            </section>

            {/* our Tools */}
            <section className="bg-[#0B0233] py-20 px-6 md:px-16 text-white">

                {/* Heading */}
                <div className="text-center mb-16 ">
                    <h2 className="text-3xl md:text-5xl font-semibold border-2 border-dashed border-white/40 px-6 py-4 rounded-full inline-block">
                        Our Tools
                    </h2>
                </div>

                {/* Images */}
                <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-10">

                    <img
                        src={Centered}
                        alt="Centered"
                        className="h-24 md:h-32 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />

                    <img
                        src={Shield}
                        alt="Shield"
                        className="h-24 md:h-32 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />

                    <img
                        src={DetectAi}
                        alt="Detect AI"
                        className="h-24 md:h-32 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />

                </div>
            </section>

        </>
    );
};

export default TrustAndSafety;