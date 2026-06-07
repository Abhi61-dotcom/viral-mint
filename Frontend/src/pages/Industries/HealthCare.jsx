import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BrainCircuit, BarChart3, Star, ChevronDown } from "lucide-react";
import hero from "../../assets/industries/Healthcare/heroimg.png";
import memberPatient from "../../assets/industries/HealthCare/memberPatientSupport.jpg"
import providerPayor from "../../assets/industries/HealthCare/providerPayorServices.jpg"
import specialityCare from "../../assets/industries/HealthCare/speciality&care.jpg"

/* ================= COUNTER ================= */
const Counter = ({ end, suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      startVal += increment;
      if (startVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return <span>{count}{suffix}</span>;
};

/* ================= STATS ================= */
const stats = [
  {
    value: 100,
    prefix: "90–",
    suffix: "%",
    title: "CSAT",
    desc: "For a behavioral telehealth platform",
  },
  {
    value: 58,
    suffix: "%",
    title: "More tickets per hour",
    desc: "For a health insurance company",
  },
  {
    value: 66,
    suffix: "%",
    title: "Lower cost to serve",
    desc: "For a telehealth platform",
  },
];

/* ================= health HELP DATA ================= */
const helpData = [
  {
    icon: <BrainCircuit size={42} />,
    title: "Caring patient and member experiences",
    desc: "We care for our teams so they can care for others combining Wellness & Resiliency programs, premium benefits, science-backed training and AI tools to empower people and deliver with expertise and empathy.",
  },
  {
    icon: <BarChart3 size={42} />,
    title: "Operational excellence & revenue enhancement",
    desc: "Our experienced teams help providers and payors sustain exceptional care while meeting demand – optimizing staffing, boosting productivity and maximizing reimbursements with full compliance.",
  },
  {
    icon: <Star size={42} />,
    title: "Specialized services for your specialty",
    desc: "Specialty and wellness providers balance patient satisfaction with limited resources. We deliver the support, tech and scale to improve experiences, streamline operations and fuel growth.",
  },
];

/* ================= F&Q ================= */
const servicesData = [
  {
    title: "Member & patient support",
    content: {
      desc: "We deliver a human-centric, omnichannel experience to simplify care navigation, improve engagement and deliver better outcomes at reduced costs.",
      sections: [
        {
          heading: "PATIENT SUPPORT",
          list: [
            "Care navigation",
            "Testing support",
            "Membership inquiries",
            "Medication disputes & questions",
            "Medication education & supply questions",
            "Post-visit follow-up",
            "Billing",
          ],
        },
        {
          heading: "MEMBER SUPPORT",
          list: [
            "Enrollment",
            "Eligibility",
            "Provider identification",
            "Prescription refill",
            "Pre-sales consultancy",
          ],
        },
      ],
      img: memberPatient,
    },
  },
  {
    title: "Provider & payor services",
    content: {
      desc: "We integrate AI to drive efficiencies and deliver frictionless, high‑quality support for patients and members.",
      sections: [
        {
          heading: "PROVIDER",
          list: [
            "Prior authorization",
            "Insurance verification",
            "Claims & billing",
            "Data quality/data entry",
            "Records management"
          ],
        },
        {
          heading: "PAYOR",
          list: [
            "Network management/provider credentialing",
            "Care management",
            "Utilization management",
            "Benefits administration",
            "Regulatory & compliance programs",
            "Enrollment & welcome season support"
          ],
        },
      ],
      img: providerPayor,
    },
  },
  {
    title: "Specialty & care management",
    content: {
      desc: "We boost user adoption and drive value for your healthcare and wellness platforms with our scalable support infrastructure.",
      sections: [
        {
          heading: "SERVICES",
          list: [
            "Sales & subscriber growth",
            "User onboarding & engagement",
            "Technical support",
            "Data capture & tagging",
            "Community moderation",
            "Advanced data analytics"
          ],
        },
      ],
      img: specialityCare,
    },
  },
];


const HealthCare = () => {
  const navigate = useNavigate()
  const [start, setStart] = useState(false);
  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => ref.current && observer.unobserve(ref.current);
  }, []);
  return (
    <>
      {/* hero section */}
      <section className="bg-[#0b0033] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-yellow-400 tracking-widest text-sm font-semibold mb-4">
              HEALTHCARE
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
              Making healthcare <br className="hidden sm:block" />
              work better <br className="hidden sm:block" />
              for everyone
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Outstanding support is the bridge to better healthcare. Focusing on
              team well-being and community engagement, we create experiences that
              satisfy patients and members, energize providers and help payors
              thrive.
            </p>

            <button onClick={() => { navigate("/contact-us") }} className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/40">
              Speak to an expert
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center relative">

            {/* Outer dashed circle */}
            <div className="absolute w-[120%] h-[120%] border border-dashed border-cyan-400 rounded-full top-[-10%] left-[-10%] hidden md:block"></div>

            {/* Inner circle */}
            <div className="absolute w-[110%] h-[110%] border border-purple-500 rounded-full top-[-5%] left-[-5%] hidden md:block"></div>

            {/* Image shape */}
            <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[420px] lg:h-[520px] rounded-[10%_10%_40%_40%] overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500 shadow-2xl">

              <img
                src={hero}
                alt="Healthcare"
                className="w-full h-full object-cover"
              />

              <span className="absolute bottom-4 left-4 text-xs text-white">
                Faith, Quality, Philippines
              </span>
            </div>

            {/* decorative square borders */}
            <div className="hidden md:block absolute right-0 top-10 w-20 h-20 border border-pink-500"></div>
            <div className="hidden md:block absolute right-10 bottom-0 w-20 h-20 border border-green-400"></div>

          </div>

        </div>
      </section>

      {/* stats */}
      <section ref={ref} className="bg-[#0b0033] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={start ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"
            >
              {/* CARD */}
              <div className="bg-gradient-to-br from-[#4facfe] to-[#6a5acd] rounded-2xl p-6 h-full 
            transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]">

                {/* VALUE */}
                <h2 className="text-4xl md:text-5xl text-white font-bold mb-3">
                  {item.prefix}
                  <Counter end={item.value} suffix={item.suffix} start={start} />
                </h2>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-100">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Health Help */}
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
              Amplifying healthcare CX
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Patients, members, payors and providers all want optimal issue resolution.
              We take full ownership, blending expert teams, advanced AI and community
              engagement to deliver seamless, empathetic experiences.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {helpData.map((item, index) => (
              <div
                key={index}
                className="group border border-dashed border-purple-500 rounded-2xl p-8 text-center
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
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

      {/* F&Q */}
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
                  className="w-full flex justify-between items-center py-6 text-left hover:bg-white/5 transition"
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
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1000px] pb-6" : "max-h-0"
                    }`}
                >
                  {item.content && (
                    <div className="grid md:grid-cols-2 gap-8">

                      {/* LEFT */}
                      <div>
                        <p className="text-gray-300 mb-4">
                          {item.content.desc}
                        </p>

                        {/* SECTIONS */}
                        {item.content.sections.map((sec, i) => (
                          <div key={i} className="mb-4">
                            <p className="text-yellow-400 text-sm font-semibold mb-2">
                              {sec.heading}
                            </p>

                            <ul className="list-disc list-inside text-sm space-y-1">
                              {sec.list.map((li, j) => (
                                <li key={j}>{li}</li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <button className="text-yellow-400 font-medium mt-4">
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

                    </div>
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

export default HealthCare;