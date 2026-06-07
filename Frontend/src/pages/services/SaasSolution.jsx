import React from "react";
import { useNavigate } from "react-router-dom";
import { Lightbulb, PencilRuler, Code2, Rocket } from "lucide-react";
import saasVideo from "../../assets/servicesAssets/saasSolution.mp4";
import saasCta from "../../assets/servicesAssets/SaasCta.jpg"
import BackButton from "../../utils/BackButton ";

const SaasSolution = () => {
  const navigate = useNavigate();
  const process = [
    {
      icon: <Lightbulb size={28} />,
      step: "01",
      title: "Discovery & Strategy",
      desc: "We deeply understand your business model, goals, and target audience to create a solid SaaS roadmap.",
    },
    {
      icon: <PencilRuler size={28} />,
      step: "02",
      title: "UI/UX & Architecture",
      desc: "We design intuitive user interfaces and build scalable system architecture for long-term growth.",
    },
    {
      icon: <Code2 size={28} />,
      step: "03",
      title: "Development & Integration",
      desc: "We develop robust SaaS applications with modern tech stacks and seamless API integrations.",
    },
    {
      icon: <Rocket size={28} />,
      step: "04",
      title: "Launch & Scaling",
      desc: "We deploy, monitor, and continuously scale your product for performance and success.",
    },
  ];

  const features = [
    "Custom SaaS Product Development",
    "Cloud Infrastructure & DevOps",
    "Secure API Integrations",
    "Multi-tenant Architecture",
    "Real-time Analytics",
    "Maintenance & Scaling",
  ];

  const stats = [
    { value: "120+", label: "SaaS Products Built" },
    { value: "50+", label: "Global Clients" },
    { value: "99.9%", label: "Uptime" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <>
      <BackButton />
      {/* HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center px-6 md:px-16 overflow-hidden bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#1E293B]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100">
          <source src={saasVideo} type="video/mp4" />
        </video>

        {/* BLUR OVERLAY */}
        <div className="absolute inset-0  bg-[#020617]/80"></div>

        <div className="relative z-10 max-w-6xl">
          {/* <p className="text-sm text-blue-400 mb-3">// SAAS SOLUTIONS</p> */}

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Build Scalable SaaS Platforms That Drive Real Business Growth
          </h1>

          <p className="text-gray-300 max-w-2xl mb-8">
            We help startups and enterprises design, develop, and scale powerful SaaS products with modern cloud architecture and high-performance systems.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-white hover:scale-105 transition shadow-lg shadow-purple-500/30"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/who-we-are/about")}
              className="border border-white/20 px-6 py-3 cursor-pointer rounded-lg text-gray-300 hover:bg-white hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full py-14 px-6 md:px-16 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#1E293B]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <h2 className="text-3xl md:text-5xl font-bold text-white">{item.value}</h2>
              <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full py-20 px-6 md:px-16 bg-[#020617]">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our SaaS Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end SaaS development services designed for performance, scalability, and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-xl hover:shadow-purple-500/10 transition">
              <h3 className="font-semibold text-lg text-white mb-2">{item}</h3>
              <p className="text-gray-400 text-sm">
                Built with modern technologies and scalable architecture.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#1E293B]">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Development Process
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A proven step-by-step approach to build scalable and high-performance SaaS platforms.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-10">

          {/* LINE (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-white/10"></div>

          {process.map((item, i) => (
            <div key={i} className="relative text-center">

              {/* ICON */}
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30">
                {item.icon}
              </div>

              {/* STEP */}
              <p className="text-blue-400 mt-4 font-semibold">
                {item.step}
              </p>

              {/* TITLE */}
              <h3 className="text-white font-semibold text-lg mt-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm mt-2 px-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* PRICING */}
      <section className="w-full py-20 px-6 md:px-16 bg-[#020617]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pricing Plans
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "₹49K",
              features: [
                "✔ Basic SaaS Architecture",
                "✔ Single Module Development",
                "✔ Basic Cloud Deployment",
                "✔ Standard UI/UX",
                "✔ Email Support",
              ],
            },
            {
              name: "Growth",
              price: "₹99K",
              features: [
                "✔ Advanced SaaS Architecture",
                "✔ Multi-Module Development",
                "✔ Cloud + DevOps Setup",
                "✔ API Integrations",
                "✔ Analytics Dashboard",
                "✔ Priority Support",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "✔ Full SaaS Ecosystem",
                "✔ Multi-tenant Architecture",
                "✔ High Scalability System",
                "✔ Advanced Security & Compliance",
                "✔ Custom Integrations",
                "✔ Dedicated Team Support",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl backdrop-blur-md border border-white/10 transition 
    ${i === 1 ? "scale-105 bg-gradient-to-b from-blue-500/20 to-purple-500/20 shadow-xl" : "bg-white/5"}`}
            >

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

              <h2 className="text-3xl font-bold text-white mb-6">
                {plan.price}
              </h2>

              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              <button onClick={() => { navigate("/contact") }} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:scale-105 transition">
                Connect...
              </button>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 md:px-16 py-20 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#1E293B]">

        <div className="relative rounded-2xl overflow-hidden border border-white/10">

          {/* 🎥 VIDEO */}
          <img
            src={saasCta}  
            alt="saas background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 🎨 GRADIENT OVERLAY (NO HEAVY BLUR) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

          {/* ✨ CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-14 text-white">

            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="text-blue-400 text-sm mb-2">
// BUILD WITH EXPERTS
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Let’s Build Something Powerful Together
              </h2>

              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Our team delivers enterprise-grade SaaS solutions designed for performance, security, and long-term growth.
              </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 rounded-lg font-medium hover:scale-105 transition shadow-lg shadow-purple-500/30"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/who-we-are/about")}
                className="border border-white/20 px-7 py-3 rounded-lg text-gray-300 hover:bg-white hover:text-black transition"
              >
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default SaasSolution;