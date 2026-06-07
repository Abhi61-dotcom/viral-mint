import React ,{useState} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layers, Radio, Shield, ChevronDown } from "lucide-react";

// Counter Component
const Counter = ({ value, suffix = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toFixed(value < 1 ? 2 : 0)}
      {suffix}
    </span>
  );
};

const servicesData = [
  {
    title: "Banks, credit unions & credit card processors",
    content: {
      desc: "We tailor solutions for enterprise banks, credit unions and other financial institutions ensuring safe and innovative experiences that align with brand objectives and customer/member preferences.",
      services: [
        "Acquisition",
        "Back office: data entry, document imaging & management",
        "Billing & collections",
        "Clearance & settlement",
        "Digital transformation",
        "Fincrime & compliance",
        "Fraud, disputes & chargebacks",
        "Identity management",
        "Onboarding",
        "Retention",
        "Servicing",
      ],
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
    },
  },
  { title: "FinTech" },
  { title: "Payment processors" },
  { title: "Cryptocurrency & NFT" },
  { title: "InsurTech/Warranty" },
];

const FinancialServices = () => {
  const data = [
    {
      value: 0.09,
      suffix: "%",
      title: "Average error rate",
      desc: "Vs. 25% previous outsourcer for a modern card-issuing platform",
    },
    {
      value: 50,
      suffix: "%",
      title: "Disputes reduction",
      desc: "For a fintech company",
    },
    {
      value: 93,
      suffix: "%",
      title: "CSAT",
      desc: "And top vendor performance for a B2B credit card issuer",
    }]

  const data2 = [
    {
      icon: <Layers size={40} />,
      title: "Quality that compounds value",
      desc: "Caring for customers starts with caring for the frontline. Our focus on teammates drives retention, cutting ramp-up costs while reducing errors, strengthening compliance and improving results.",
    },
    {
      icon: <Radio size={40} />,
      title: "Meaningful interactions scaled across channels",
      desc: "Our teams uncover opportunities to evolve service models so you can move and deliver at the pace of opportunity. We design personalized, accessible experiences that help your customers achieve their financial goals.",
    },
    {
      icon: <Shield size={40} />,
      title: "Protection for customers and the bottom line",
      desc: "Beyond top certifications, our Fincrime & Compliance specialists customize protection frameworks and integrate advanced safeguards to mitigate vulnerabilities while preserving your freedom to innovate.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (

    <>
      {/* head */}
      <section className="bg-[#0B0033] text-white min-h-screen flex items-center px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-yellow-400 font-semibold tracking-wide mb-4">
              FINANCIAL SERVICES
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              Transform more <br /> Risk less
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Where relentless pressure to innovate converges with compliance and
              high customer expectations, our expert teams turn the challenges
              into market advantages, delivering secure, breakthrough experiences.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium">
              Speak to an expert
            </button>
          </div>

          {/* RIGHT IMAGE DESIGN */}
          <div className="relative flex justify-center md:justify-end">

            {/* Outer dashed border */}
            <div className="absolute w-[320px] h-[420px] md:w-[420px] md:h-[520px] border-2 border-dashed border-cyan-400 rounded-[40%] top-0 right-10"></div>

            {/* Circle outline */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-purple-400 rounded-full right-0 top-10"></div>

            {/* Colored square outline */}
            <div className="absolute w-[120px] h-[120px] border border-green-400 right-0 top-24"></div>

            {/* Image container */}
            <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[480px] bg-cyan-400 rounded-[45%] overflow-hidden z-10">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="person"
                className="w-full h-full object-cover"
              />

              {/* Caption */}
              <p className="absolute bottom-4 left-4 text-sm text-white">
                Chesca, Marketing, Philippines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="bg-[#0B0033] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl p-8 text-white relative overflow-hidden
            bg-gradient-to-br from-blue-400 to-purple-500
            shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Big Number */}
              <h2 className="text-5xl md:text-6xl font-light mb-4">
                <Counter value={item.value} suffix={item.suffix} />
              </h2>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>

              {/* subtle glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How we help */}
      <section className="bg-[#0B0033] text-white py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-hidden">

        {/* Curved border (responsive + behind content) */}
        <div className="absolute
    w-[850px] h-[300px] 
    sm:w-[1000px] sm:h-[400px] 
    md:w-[1400px] md:h-[500px] 
    border-[6px] md:border-8 border-purple-400 
    rounded-bl-[150px] md:rounded-bl-[250px] 
    opacity-40 z-0">
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HEADER */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-yellow-400 pt-2 md:pt-5 font-semibold mb-3 tracking-wide text-sm md:text-base">
              HOW WE HELP
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-4 md:mb-6">
              Elevating experience while <br className="hidden sm:block" />
              strengthening security
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Our DCX, Fincrime & Compliance and Trust & Safety teams integrate
              advanced protection into emerging tech and seamless support into
              new service channels, so you can accelerate digital transformation
              confidently.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data2.map((item, i) => (
              <div
                key={i}
                className="group relative border border-dashed bg-[#3d0fe3] border-purple-400 rounded-2xl p-6 md:p-8 
          transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="text-yellow-400 mb-4 md:mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*  */}
      <section className="bg-[#0B0033] text-white py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12">
            <p className="text-yellow-400 font-semibold tracking-wide mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-5xl font-light">
              Our services
            </h2>
          </div>

          {/* ACCORDION */}
          <div className="space-y-4">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="border-t border-yellow-400/40 pt-6"
              >
                {/* HEADER ROW */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg md:text-xl font-medium">
                    {item.title}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${activeIndex === index
                      ? "max-h-[1000px] mt-6"
                      : "max-h-0"
                    }`}
                >
                  {item.content && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">

                      {/* LEFT TEXT */}
                      <div>
                        <p className="text-gray-300 mb-4 text-sm md:text-base">
                          {item.content.desc}
                        </p>

                        <h4 className="text-yellow-400 font-semibold mb-2">
                          SERVICES
                        </h4>

                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                          {item.content.services.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>

                        <button className="mt-6 text-yellow-400 hover:underline">
                          Speak to an expert →
                        </button>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="w-full h-[250px] md:h-[300px] overflow-hidden rounded-[40px]">
                        <img
                          src={item.content.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FinancialServices;