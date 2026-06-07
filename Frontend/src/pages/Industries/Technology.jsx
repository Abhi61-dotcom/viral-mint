import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import hero from "../../assets/industries/Technology/heroimg.png";
import { FaArrowRight, FaUserTie, FaBrain } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

// 🔢 Counter Component (in-view animation)
const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 2000;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                            observer.unobserve(el);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [end]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

// services
const services = [
    {
        title: "Tech support",
        content:
            "End-to-end IT and technical support services ensuring smooth operations, fast issue resolution, and minimal downtime."
    },
    {
        title: "Digital customer experience",
        content:
            "We design and optimize customer journeys across digital channels to improve engagement, satisfaction, and retention."
    },
    {
        title: "AI data services",
        content:
            "Leverage AI-driven insights, data processing, and automation to improve decision-making and business efficiency."
    },
    {
        title: "Revenue generation, retention and protection",
        content:
            "We help businesses grow revenue while ensuring customer retention and safeguarding long-term value."
    }
];


const Technology = () => {
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            {/* head */}
            <section className="bg-[#0b0033] text-white py-16 md:py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* LEFT */}
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-yellow-400 tracking-widest text-sm font-semibold mb-4">
                            TECHNOLOGY
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
                            Built for startups <br className="hidden sm:block" />
                            Trusted by enterprise
                        </h1>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            Not all CX issues are equal. We deploy AI to automate simple tasks and build expert teams for complex needs, scaling high-value support, delivering excellence and driving growth.
                        </p>

                        <button onClick={() => { navigate("/contact-us") }} className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/40">
                            Speak to an expert
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 flex justify-center relative">

                        {/* Dashed Outer Circle */}
                        <div className="absolute w-[120%] h-[120%] border border-dashed border-cyan-400 rounded-full top-[-10%] left-[-10%] hidden md:block"></div>

                        {/* Inner Solid Circle */}
                        <div className="absolute w-[110%] h-[110%] border border-purple-500 rounded-full top-[-5%] left-[-5%] hidden md:block"></div>

                        {/* Square Outline (top-right like screenshot) */}
                        <div className="hidden md:block absolute top-0 right-15 w-[80%] h-[89%] border-2 rounded-[20%_10%_8%_10%] border-cyan-400"></div>

                        {/* Image Shape */}
                        <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[420px] lg:h-[520px] rounded-[30%_10%_30%_10%] overflow-hidden bg-gradient-to-br from-pink-500 to-red-400 shadow-2xl">

                            <img
                                src={hero}
                                alt="Technology"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                </div>
            </section>

            {/* stats */}
            <section className="bg-[#0b0220] py-16 px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* Card 1 */}
                    <div className="rounded-2xl p-8 bg-gradient-to-br from-[#59c3ff] to-[#7b5cff] text-white">
                        <h2 className="text-6xl font-light mb-4">
                            No.1
                        </h2>
                        <h3 className="text-xl font-medium mb-2">
                            Vendor partner
                        </h3>
                        <p className="text-sm text-black/80">
                            Trusted by top digital & SaaS brands
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl p-8 bg-gradient-to-br from-[#59c3ff] to-[#7b5cff] text-white">
                        <h2 className="text-6xl font-light mb-4">
                            <Counter end={114} suffix="%" />
                        </h2>
                        <h3 className="text-xl font-medium mb-2">
                            Revenue goal per call
                        </h3>
                        <p className="text-sm text-black/80">
                            Driving growth for SaaS & IT clients
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl p-8 bg-gradient-to-br from-[#59c3ff] to-[#7b5cff] text-white">
                        <h2 className="text-6xl font-light mb-4">
                            <Counter end={95} suffix="%" />
                        </h2>
                        <h3 className="text-xl font-medium mb-2">
                            Average CSAT (vs. 85% target)
                        </h3>
                        <p className="text-sm text-black/80">
                            High satisfaction across all services
                        </p>
                    </div>

                </div>
            </section>

            {/* HOw We Help */}
            <section className="bg-[#0b0220] text-white py-20 px-6 relative overflow-hidden">

                {/* curved background line */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-blue-400/30 rounded-full translate-x-1/3 -translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <p className="text-yellow-400 text-sm tracking-widest mb-2">
                        HOW WE HELP
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                        Automating the simple, <br />
                        humanizing the complex
                    </h2>

                    <p className="text-gray-300 max-w-2xl mb-12">
                        We boost customer service efficiency with AI for routine tasks and
                        effectiveness through smart escalation, expert training and empowered
                        teams equipped to handle complex issues with skill and context.
                    </p>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="border border-dashed border-purple-500/40 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
                            <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
                                <FaUserTie />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Frontline focus
                            </h3>
                            <p className="text-gray-300 text-sm">
                                With a people-first culture, AI tools, and training, we empower teams to excel,
                                boosting satisfaction, retention, and performance across services.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-dashed border-purple-500/40 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
                            <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
                                <FaBrain />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                AI innovation
                            </h3>
                            <p className="text-gray-300 text-sm">
                                We leverage AI and SaaS solutions to optimize workflows, improve productivity,
                                and bring innovation into real business impact.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-dashed border-purple-500/40 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
                            <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
                                <FaArrowRight />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Process evolution
                            </h3>
                            <p className="text-gray-300 text-sm">
                                We continuously refine processes using data insights, enabling smarter
                                decisions and better outcomes across digital, IT, and manpower solutions.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-[#0b0220] text-white py-20 px-6 relative overflow-hidden">

                {/* Top Heading Box */}
                <div className="max-w-3xl mx-auto text-center border border-dashed border-blue-400 rounded-xl py-10 mb-12">
                    <p className="text-yellow-400 text-sm tracking-widest mb-2">
                        WHAT WE DO
                    </p>
                    <h2 className="text-4xl font-semibold">
                        Our services
                    </h2>
                </div>

                {/* Accordion */}
                <div className="max-w-7xl mx-auto">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-yellow-500/40 py-6"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-left text-xl"
                            >
                                {item.title}

                                {/* Arrow */}
                                <FiChevronUp
                                    className={`text-yellow-400 text-2xl transition-transform duration-300 ${activeIndex === index ? "rotate-0" : "rotate-180"
                                        }`}
                                />
                            </button>

                            {/* Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-300 text-sm max-w-3xl">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Curve */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[40px] border-b border-blue-400 rounded-b-full mb-5"></div>

            </section>
        </>
    );
};

export default Technology;