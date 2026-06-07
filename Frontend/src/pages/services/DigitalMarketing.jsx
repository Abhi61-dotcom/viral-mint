import React from "react";
import { motion } from "framer-motion";
import urbanWear from "../../assets/servicesAssets/urbanWear.png";
import dmPageVideo from "../../assets/servicesAssets/dmPageVideo.mp4";
import { Link } from "react-router-dom";
import BackButton from "../../utils/BackButton ";

const DigitalMarketing = () => {

  const data = [
    { value: "971+", label: "PROJECTS DELIVERED" },
    { value: "67+", label: "STARTUPS SCALED" },
    { value: "23+", label: "GLOBAL CLIENTS" },
    { value: "9+", label: "YEARS OF EXPERIENCE" },
  ];

  const projects = [
    {
      title: "Urban Wear's",
      slug: "urbanwear",
      category: "DIGITAL MARKETING / E-COMMERCE",
      img: urbanWear,
    },
    {
      title: "Radisson Blu Hotels & Resorts",
      slug: "radisson-blu",
      category: "DIGITAL MARKETING / HOTELS",
      img: "/images/p2.jpg",
    },
    {
      title: "ROG – Republic of Gamers (ASUS)",
      slug: "asus-rog",
      category: "DIGITAL MARKETING / GAMING / TECHNOLOGY",
      img: "/images/p3.jpg",
    },
    {
      title: "CAE Simulation Training Pvt. Ltd.",
      slug: "cae-simulation",
      category: "AVIATION / DEVELOPMENT / DIGITAL MARKETING",
      img: "/images/p4.jpg",
    },
    {
      title: "SAME – Aircraft Maintenance Engineering",
      slug: "same-ame",
      category: "AVIATION / DESIGN / DEVELOPMENT / DIGITAL MARKETING",
      img: "/images/p5.jpg",
    },
    {
      title: "Casa Decor",
      slug: "casa-decor",
      category: "DEVELOPMENT / DIGITAL MARKETING / E-COMMERCE",
      img: "/images/p6.jpg",
    },
  ];

  return (
    <div className="bg-[#020617] text-white">
      <BackButton/>

      {/* 🔥 HERO */}
      <section className="w-full h-screen relative">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={dmPageVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-semibold font-['Sora'] leading-tight "
          >
            Scale Your Brand With{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Performance-Driven Marketing
            </span>
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-xl text-lg leading-relaxed">
            We design data-driven marketing systems that consistently generate
            high-quality leads, optimize conversions, and drive measurable growth.
          </p>

          <p className="mt-3 text-gray-400 max-w-xl text-sm">
            Built for brands that want predictable results — not guesswork.
          </p>
        </div>
      </section>

      {/* 🔥 ABOUT */}
      <section className="py-24 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Digital Marketing Solutions
            </h2>

            <p className="text-gray-400 mt-6">
              We go beyond traditional marketing and build high-impact digital ecosystems
              that drive real business growth through strategy, creativity, and performance.
            </p>

            <p className="text-gray-400 mt-4">
              Whether you're launching a new venture or scaling an existing brand,
              we help you unlock opportunities and dominate your digital presence.
            </p>

            <p className="text-gray-400 mt-4">
              Give your offline business a powerful digital transformation
              and create a brand that stands out in today’s competitive market.
            </p>

            <button className="mt-8 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition">
              Reach Us
            </button>
          </div>

          <div>
            <p className="text-gray-400 mb-4">
              We position your brand in front of the right audience with precision targeting,
              compelling messaging, and optimized user journeys.
            </p>

            <p className="text-gray-400 mb-4">
              Our expertise includes SEO, PPC advertising, social media marketing,
              online reputation management, and full-funnel campaign strategies.
            </p>

            <p className="text-gray-400 mb-4">
              By understanding user behavior and analytics deeply,
              we craft strategies that convert attention into real business growth.
            </p>

            <p className="text-gray-400">
              Our mission is simple — to build a digital presence that drives engagement,
              builds trust, and delivers consistent ROI.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 STATS */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {data.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <h2 className="text-5xl font-semibold text-white">
                {item.value}
              </h2>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 VIDEO CTA */}
      <section className="px-6 md:px-16 py-16 ">
        <div className="relative rounded-2xl overflow-hidden ">

          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src={dmPageVideo} />
          </video>

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 p-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold">
                Let’s Build a Brand That Leads the Market
              </h2>
              <p className="text-gray-300 mt-3 max-w-lg">
                Ready to scale your business with strategies that deliver real results?
                Let’s create something impactful together.
              </p>
            </div>

            <button className="bg-blue-600 px-6 py-3 rounded-full">
              Start Your Growth Journey
            </button>
          </div>

        </div>
      </section>

      {/* 🔥 PROJECTS */}
      <section className="py-24 px-6 md:px-16">

        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Our Work Speaks for Itself
        </h2>

        <p className="text-gray-400 mb-12 max-w-xl">
          Explore how we’ve helped brands transform their digital presence
          and achieve measurable growth through strategic execution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <Link key={i} to={`/project/${item.slug}`}>
              <div className="relative group rounded-2xl overflow-hidden">

                <img
                  src={item.img}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.category}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </section>

    </div>
  );
};

export default DigitalMarketing;