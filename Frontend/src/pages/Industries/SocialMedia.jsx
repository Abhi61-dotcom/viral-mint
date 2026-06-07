import React, { useEffect, useState, useRef } from "react";
import { Users, Gem, BadgeCheck, ChevronDown } from "lucide-react";
import main from "../../assets/industries/SocialMedia/socialMedaiMain.png"
import contentModeration from "../../assets/industries/SocialMedia/ContentModeration.jpg"
import costumerExperience from "../../assets/industries/SocialMedia/CostumerExperience.jpg"
import dataOperation from "../../assets/industries/SocialMedia/dataOperations.jpg"
import fraudPrevention from "../../assets/industries/SocialMedia/fraudPrevention.jpg"


const Counter = ({ end, suffix = "", startCounting }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

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
    }, [end, startCounting]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
};

const servicesData = [
    {
        title: "Content moderation",
        content: {
            desc: "We apply expert practices developed by our peer-recognized Trust & Safety leaders that span across a wide range of policy areas and content types.",
            list: [
                "User safety",
                "Platform & business integrity",
                "Actor integrity",
                "Live & recorded content moderation",
                "Platform & community moderation",
            ],
            img:contentModeration,
        },
    },
    {
        title: "Data operations and enrichment",
        content: {
            desc: "Our teams handle large volumes of data and content, using the latest technologies for better efficiency and accuracy.",
            list: [
                "Data operations & enrichment",
                "Data labeling services",
                "Content creation & collection",
            ],
            img: dataOperation,
        },
    },
    {
        title: "Customer experience",
         content: {
            desc: "Our teams handle large volumes of data and content, using the latest technologies for better efficiency and accuracy.",
            list: [
                "Data operations & enrichment",
                "Data labeling services",
                "Content creation & collection",
            ],
            img: costumerExperience,
        },
    },
    {
        title: "Fraud prevention",
         content: {
            desc: "Our teams handle large volumes of data and content, using the latest technologies for better efficiency and accuracy.",
            list: [
                "Data operations & enrichment",
                "Data labeling services",
                "Content creation & collection",
            ],
            img: fraudPrevention,
        },
    },
];
const SocialMedia = () => {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="bg-[#0B0233] text-white min-h-screen flex items-center px-6 md:px-16 py-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* LEFT */}
                    <div className="text-center md:text-left">
                        <p className="text-yellow-400 font-semibold tracking-wide mb-4">
                            SOCIAL MEDIA
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Digital trust <br />
                            Delivered worldwide
                        </h1>

                        <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                            We power leading digital platforms with mission-critical moderation
                            and AI data services at scale, while prioritizing team well-being.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium">
                            Speak to an expert
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center items-center mt-10 md:mt-0">

                        <div className="hidden md:block absolute w-[420px] h-[420px] border border-dashed border-cyan-400 rounded-full"></div>
                        <div className="hidden md:block absolute w-[460px] h-[460px] border border-purple-500 rounded-full opacity-50"></div>

                        <div className="relative w-[260px] h-[300px] sm:w-[300px] sm:h-[340px] md:w-[380px] md:h-[420px] rounded-[200px] overflow-hidden">
                            <img
                                src={main}
                                alt="person"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute bottom-4 left-4 text-xs sm:text-sm text-white">
                                Bhavya, Ops, India
                            </span>
                        </div>

                        <div className="hidden md:block absolute w-[420px] h-[420px] border border-blue-500 rounded-2xl"></div>
                        <div className="hidden md:block absolute w-[380px] h-[380px] border border-pink-500 rounded-2xl"></div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section
                ref={sectionRef}
                className="bg-[#0B0233] py-16 px-6 md:px-16"
            >
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* CARD */}
                    <div className="cursor-pointer bg-gradient-to-r from-blue-400/90 to-purple-500/90 backdrop-blur-md p-8 rounded-2xl text-white 
          transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-95">

                        <h2 className="text-5xl md:text-6xl font-bold mb-3">
                            <Counter end={96} suffix="%" startCounting={startCount} />
                        </h2>

                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            Precision average
                        </h3>

                        <p className="text-white/80 text-sm">
                            For a social media tech company
                        </p>
                    </div>

                    {/* CARD */}
                    <div className="cursor-pointer bg-gradient-to-r from-blue-400/90 to-purple-500/90 backdrop-blur-md p-8 rounded-2xl text-white 
          transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-95">

                        <h2 className="text-5xl md:text-6xl font-bold mb-3">
                            <Counter end={93} suffix="%" startCounting={startCount} />
                        </h2>

                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            Moderation quality score
                        </h3>

                        <p className="text-white/80 text-sm">
                            For a social media tech company
                        </p>
                    </div>

                    {/* CARD */}
                    <div className="cursor-pointer bg-gradient-to-r from-blue-400/90 to-purple-500/90 backdrop-blur-md p-8 rounded-2xl text-white 
          transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-95">

                        <h2 className="text-5xl md:text-6xl font-bold mb-3">
                            <Counter end={50} suffix="%" startCounting={startCount} />
                        </h2>

                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            Attrition reduction
                        </h3>

                        <p className="text-white/80 text-sm">
                            For a social media tech company
                        </p>
                    </div>

                </div>
            </section>

            {/* how we help */}
            <section className="bg-[#0B0233] text-white py-20 px-6 md:px-16 relative overflow-hidden">

                {/* CURVED BORDER */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-cyan-400/40 rounded-full translate-x-1/3 -translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* HEADING */}
                    <div className="mb-16 max-w-3xl">
                        <p className="text-yellow-400 font-semibold tracking-wide mb-3">
                            HOW WE HELP
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            Global reach, local understanding
                        </h2>

                        <p className="text-gray-300">
                            Supporting 30+ languages, and specialized regional coverage, our secure,
                            multi-geo operations support thousands of specialists who maintain platform
                            safety while adhering to diverse regulatory environments.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* CARD 1 */}
                        <div className="group border border-dashed border-purple-500 rounded-2xl p-8 text-center 
          transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">

                            <div className="flex justify-center mb-5 text-yellow-400 group-hover:scale-110 transition">
                                <Users size={40} />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Resilient teams <br /> Revolutionary results
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Our proprietary frontline well-being model sustains operations in challenging
                                content environments. With evidence-based support and thoughtful work design,
                                we deliver superior quality without the burnout so common in the industry.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="group border border-dashed border-purple-500 rounded-2xl p-8 text-center 
          transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">

                            <div className="flex justify-center mb-5 text-yellow-400 group-hover:scale-110 transition">
                                <Gem size={40} />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Precision at scale <br /> Trust acceleration
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                With benchmarks 30% above industry standards and rapid training, our teams
                                deliver operational excellence, supporting millions of accurate decisions daily
                                so platforms can confidently enforce community norms across operations.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="group border border-dashed border-purple-500 rounded-2xl p-8 text-center 
          transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">

                            <div className="flex justify-center mb-5 text-yellow-400 group-hover:scale-110 transition">
                                <BadgeCheck size={40} />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                Safe experience <br /> Brand assurance
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                We protect digital communities with 99.8% accuracy, removing scams, graphic
                                violence and other harmful content before it reaches users, safeguarding both
                                brand reputation and user trust.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* what we do our services */}
            <section className="bg-[#0B0233] text-white py-20 px-6 md:px-16">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-3">
                        WHAT WE DO
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Our services
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">

                    {servicesData.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index} className="border-t border-yellow-500/40">

                                {/* HEADER */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center py-6 text-left"
                                >
                                    <span className="text-xl md:text-2xl">
                                        {item.title}
                                    </span>

                                    <ChevronDown
                                        className={`text-yellow-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* CONTENT */}
                                <div
                                    className={`grid md:grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[600px] pb-6" : "max-h-0"
                                        }`}
                                >
                                    {item.content && (
                                        <>
                                            {/* LEFT TEXT */}
                                            <div>
                                                <p className="text-gray-300 mb-4">
                                                    {item.content.desc}
                                                </p>

                                                <p className="text-yellow-400 text-sm font-semibold mb-2">
                                                    SERVICES
                                                </p>

                                                <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                                                    {item.content.list.map((li, i) => (
                                                        <li key={i}>{li}</li>
                                                    ))}
                                                </ul>

                                                <button className="text-yellow-400 font-medium">
                                                    Speak to an expert &gt;
                                                </button>
                                            </div>

                                            {/* RIGHT IMAGE */}
                                            <div>
                                                <img
                                                    src={item.content.img}
                                                    alt=""
                                                    className="w-full h-64 md:h-full object-cover rounded-[30px]"
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>
        </>
    );
};

export default SocialMedia;