import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/industries/Retail&e-Commerce/heroimg.png";
import { HeartHandshake, Gauge, Brain, ChevronDown } from "lucide-react";
import enhanceExperience from "../../assets/industries/Retail&e-Commerce/enhanceExperience.jpg";
import protectTheBrand from "../../assets/industries/Retail&e-Commerce/protectTheBrand.jpg";
import driveRevenue from "../../assets/industries/Retail&e-Commerce/driveRevenue.jpg";
import improveTheProduct from "../../assets/industries/Retail&e-Commerce/improveTheProduct.jpg";
import preventTheFraud from "../../assets/industries/Retail&e-Commerce/preventTheFraud.jpg";
import BackButton from "../../utils/BackButton ";

/* ================= COUNTER ================= */
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

/* ================= STATS DATA ================= */
const stats = [
    {
        value: 1,
        prefix: "No.",
        title: "Vendor performance",
        desc: "For an e-commerce and tech conglomerate",
    },
    {
        value: 40,
        title: "Languages supported",
        desc: "From 13 locations around the world",
    },
    {
        value: 93,
        suffix: "%",
        title: "Average QA score",
        desc: "For eCommerce and retail campaigns",
    },
    {
        value: 170,
        suffix: "%",
        title: "Conversion rate",
        desc: "For a global platform",
    },
];

/* ================= HELP DATA ================= */
const helpData = [
    {
        icon: <HeartHandshake size={40} />,
        title: "Creating brand advocates; caring for our teams",
        desc: "We build elite teams through customized recruitment, rigorous training and immersing our frontline in your brand. And, our Wellness & Resiliency experts take care of our people, ensuring health and top performance.",
    },
    {
        icon: <Gauge size={40} />,
        title: "Operating with speed, agility and precision",
        desc: "Understanding the rapid pace of change in retail, we combine agility at scale with our advanced AI tools, empowering you to adapt quickly and seamlessly while ensuring a consistent and exceptional customer experience.",
    },
    {
        icon: <Brain size={40} />,
        title: "Applying industry expertise",
        desc: "With deep industry knowledge, our teams excel at helping you reimagine processes, enhance policies and reinvent interactions to achieve cost efficiencies and maintain a competitive edge.",
    },
];

/* ================= F&Q DATA ================= */
const servicesData = [
    {
        title: "Enhance the experience",
        content: {
            desc: "The best support is about providing the kind of experience that turns customers into evangelists.",
            list: [
                "Omni-channel care",
                "B2B & B2C",
                "Phone, email, chat, social, SMS",
                "Tech support",
                "VIP premium support",
                "Merchant onboarding",
                "Account management",
                "Agent chat/email assist",
                "Pattern recognition",
                "Language translation",
            ],
            img: enhanceExperience,
        },
    },
    {
        title: "Protect the brand",
        content: {
            desc: "Regulating and monitoring content preserves brand reputation and protects your customers and partners.",
            list: [
                "UGC moderation",
                "Posts, comments, reviews, photos, product descriptions",
                "Community safety",
                "Business integrity",
                "Content detection",
                "Account recovery",
                "Contextual review",
                "Multilingual moderation",
                "Auto tagging",
                "Conversational AI",
            ],
            img: protectTheBrand,
        },
    },
    {
        title: "Prevent fraud",
        content: {
            desc: "A combination of human expertise and intelligent technology reliably reduces regulatory risks, while helping predict and prevent the next threat.",
            list: [
                "Know-your-everything",
                "Identity verification",
                "Transaction monitoring",
                "Regulatory compliance",
                "Fraud detection & response",
                "Fraud detection tooling",
                "Customer identification program (CIP)",
                "Risk assessment",
            ],
            img: preventTheFraud,
        },
    },
    {
        title: "Improve the product",
        content: {
            desc: "From look and feel to marketing and more, we help you with many steps in the product lifecycle.",
            list: [
                "Graphic design & digital art",
                "Item creation/data entry",
                "Copyright",
                "Image enhancement",
                "Attribute management",
                "Marketing support",
                "LLM training",
                "Reinforcement learning with human feedback (RLHF)",
                "Prompt engineering",
            ],
            img: improveTheProduct,
        },
    },
    {
        title: "Drive revenue",
        content: {
            desc: "We build growth mindset-oriented teams todeliver market‑leading sales results and exceptional experiences.",
            list: [
                "Inbound/outbound sales",
                "Upselling / cross - selling",
                "Lead validation & research",
                "Customer retention & winback",
                "Appointment setting",
                "Sales consultation",

            ],
            img: driveRevenue,
        },
    },
];



const RetaileCommerce = () => {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <>
            <BackButton />

            {/* ================= HERO ================= */}
            <section className="bg-[#0b0033] text-white py-16 md:py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* LEFT */}
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-yellow-400 tracking-widest text-sm font-semibold mb-4">
                            RETAIL & ECOMMERCE
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
                            Brand passion that <br className="hidden sm:block" />
                            drives lasting impact
                        </h1>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                            In retail and ecommerce, standing out is a must. Our elite teams,
                            empowered by advanced tech, deliver precision support and
                            personalized experiences that spark engagement, drive sales and
                            lead to lasting loyalty.
                        </p>

                        <button onClick={() => { navigate("/contact-us") }} className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/40">
                            Speak to an expert
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 flex justify-center relative">

                        {/* circles */}
                        <div className="absolute w-[120%] h-[120%] border border-dashed border-cyan-400 rounded-full top-[-10%] left-[-10%] hidden md:block"></div>
                        <div className="absolute w-[110%] h-[110%] border border-purple-500 rounded-full top-[-5%] left-[-5%] hidden md:block"></div>

                        {/* image */}
                        <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[420px] lg:h-[520px] rounded-[50%_50%_40%_40%] overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-500 shadow-2xl">

                            <img
                                src={hero}
                                alt="Retail"
                                className="w-full h-full object-cover"
                            />

                            <span className="absolute bottom-4 left-4 text-xs text-white">
                                Cyrus, LX Leader, Philippines
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section ref={sectionRef} className="bg-[#0b0033] py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer rounded-2xl p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
              transition-all duration-300 hover:scale-105"
                        >
                            {/* inner card */}
                            <div className="bg-gradient-to-br from-blue-400/90 to-purple-600/90 rounded-2xl p-6 h-full 
              backdrop-blur-md transition-all duration-300 
              group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">

                                <h2 className="text-4xl md:text-5xl font-light mb-3">
                                    {item.prefix}
                                    <Counter
                                        end={item.value}
                                        suffix={item.suffix}
                                        startCounting={startCount}
                                    />
                                </h2>

                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-white/80 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </section>

            { /* ================= HELP DATA ================= */}
            <section className="bg-[#0b0033] text-white py-20 px-4 relative overflow-hidden">

                {/* CURVED BORDER */}
                <div className="hidden md:block absolute top-0 right-0 w-[700px] h-[700px] border border-cyan-400/40 rounded-full translate-x-1/3 -translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* HEADING */}
                    <div className="max-w-3xl mb-16">
                        <p className="text-yellow-400 tracking-widest text-sm font-semibold mb-4">
                            HOW WE HELP
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                            Omnichannel support <br />
                            wherever customers are
                        </h2>

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            We deliver scalable customer-facing and back-office services tailored to your
                            needs, whether you're a global enterprise or growing startup. Our passionate
                            teams provide exceptional support, drive cost efficiencies and offer insightful
                            recommendations to enhance your brand experience.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {helpData.map((item, index) => (
                            <div
                                key={index}
                                className="group border border-dashed border-purple-500 rounded-2xl p-8 text-center
              transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                            >

                                {/* ICON */}
                                <div className="flex justify-center mb-6 text-yellow-400 group-hover:scale-110 transition">
                                    {item.icon}
                                </div>

                                {/* TITLE */}
                                <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-snug">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            { /* ================= F&Q DATA ================= */}
            <section className="bg-[#0b0033] text-white py-20 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* HEADING */}
                    <div className="text-center mb-16">
                        <p className="text-yellow-400 tracking-widest text-sm font-semibold mb-3">
                            WHAT WE DO
                        </p>
                        <h2 className="text-3xl md:text-5xl">Our services</h2>
                    </div>

                    {/* ACCORDION */}
                    {servicesData.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index} className="border-t border-yellow-500/40">

                                {/* HEADER */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center hover:bg-white/5 py-6 text-left group"
                                >
                                    <span className="text-lg md:text-2xl">
                                        {item.title}
                                    </span>

                                    <ChevronDown
                                        className={`text-yellow-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* CONTENT */}
                                <div
                                    className={`grid md:grid-cols-2 gap-8 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1000px] pb-6" : "max-h-0"
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

                                                <button onClick={() => { navigate("/contact-us") }} className="text-yellow-400 font-medium">
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

export default RetaileCommerce;