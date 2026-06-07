import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import cultureimg1 from "../../assets/whoWeAre/peopleCulture1.jpg"
import cultureimg2 from "../../assets/whoWeAre/peopleCulture2.jpg"
import hero1 from "../../assets/whoWeAre/hero1.avif"
import hero2 from "../../assets/whoWeAre/hero2.avif"
import hero3 from "../../assets/whoWeAre/hero3.avif"

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import ScrollToTop from "../../utils/ScrollToTop";

const OurPeople = () => {
    const navigate = useNavigate()

    const teamData = [
        {
            name: "Abhishek Choudhary",
            role: "Developer",
            desc: "Growing up, I was always the quiet one in the room, content to observe and listen rather than speak up.",
            img: "/team1.png",
        },
        {
            name: "Vipul Thakur",
            role: " Managing Director",
            desc: "The mere thought of standing in front of my peers made my heart race, but I knew it was time to face my fears.",
            img: "/team3.png",
        },
        {
            name: "Kajal",
            role: "CMO",
            desc: "As I began speaking, I felt the initial tremors in my voice, but with each passing moment, something happened.",
            img: "/team4.png",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#1a1f2e] to-[#2a2f3f] flex flex-col items-center justify-center px-6">
            <ScrollToTop />

            <div className="max-w-7xl w-full 
min-h-[600px] md:h-[670px] 
grid grid-cols-1 md:grid-cols-2 
gap-10 md:gap-16 
items-center px-4 md:px-0">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white space-y-6 text-center md:text-left"
                >
                    <h1 className="text-3xl text-amber-400 sm:text-4xl md:text-6xl font-semibold leading-tight">
                        Leadership Team
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
                        Our Vision
                    </h1>

                    <p className="text-gray-300 max-w-md text-base sm:text-lg leading-relaxed mx-auto md:mx-0">
                        To empower people to deliver ridiculously good innovation to the world’s best companies
                    </p>

                    <button onClick={() => { navigate("/contact-us") }} className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/30 hover:scale-105">
                        Let’s Work Together
                    </button>
                </motion.div>

                {/* RIGHT VISUAL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full flex justify-center items-center mt-10 md:mt-0"
                >

                    {/* MAIN IMAGE */}
                    <img
                        src={hero1}
                        className="relative z-10 
      w-[220px] sm:w-[260px] md:w-[420px] 
      h-[300px] sm:h-[340px] md:h-[360px]
      object-cover 
      rounded-[30px] md:rounded-[40px] 
      shadow-2xl"
                    />

                    {/* LEFT SMALL IMAGE */}
                    <motion.div
                        className="absolute left-[0px] sm:left-[10px] md:left-[40px] top-[30px] md:top-[40px] z-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <img
                            src={hero2}
                            className="w-[70px] sm:w-[90px] md:w-[140px] 
        h-[70px] sm:h-[90px] md:h-[140px]
        object-cover
        rounded-[20px] md:rounded-[30px]
        shadow-lg"
                        />
                    </motion.div>

                    {/* RIGHT TOP IMAGE */}
                    <motion.div
                        className="absolute right-[0px] sm:right-[10px] md:right-[40px] top-[-40px] md:top-[-80px] z-20"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <img
                            src={hero3}
                            className="w-[80px] sm:w-[100px] md:w-[140px] 
        h-[100px] sm:h-[120px] md:h-[160px]
        object-cover
        rounded-[20px] md:rounded-[30px]
        shadow-lg"
                        />
                    </motion.div>

                    {/* RIGHT BOTTOM IMAGE */}
                    <motion.div
                        className="absolute right-[20px] sm:right-[40px] md:right-[60px] bottom-[-40px] md:bottom-[-70px] z-20"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <img
                            src={hero3}
                            className="w-[90px] sm:w-[110px] md:w-[170px] 
        h-[110px] sm:h-[130px] md:h-[200px]
        object-cover
        rounded-[20px] md:rounded-[30px]
        shadow-lg"
                        />
                    </motion.div>

                </motion.div>

            </div>

            {/* TEAM SECTION */}
            <section className="min-h-screen bg-gradient-to-r from-[#2a003f] to-[#0b001a] text-white py-16 rounded-4xl px-6 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold">Our Team</h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-7xl mx-auto">

                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.07 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-pink-500/30"
                        >

                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-40 flex items-end justify-center">
                                {/* <motion.img
                                    src={member.img}
                                    alt={member.name}
                                    className="h-44 object-contain -mb-6"
                                    whileHover={{ scale: 1.1 }}
                                /> */}
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-400 text-sm mb-3">{member.role}</p>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {member.desc}
                                </p>

                                <div className="flex justify-center gap-3">
                                    <span className="border border-pink-500 p-2 rounded-md hover:bg-pink-500 transition cursor-pointer hover:scale-110">
                                        <FaLinkedinIn />
                                    </span>
                                    <span className="border border-pink-500 p-2 rounded-md hover:bg-pink-500 transition cursor-pointer hover:scale-110">
                                        <FaTwitter />
                                    </span>
                                    <span className="border border-pink-500 p-2 rounded-md hover:bg-pink-500 transition cursor-pointer hover:scale-110">
                                        <FaFacebook />
                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </section>


            {/* culture */}
            <section className="w-full bg-gradient-to-br from-[#0b0f1a] via-[#1a1f2e] to-[#2a2f3f] mt-3 py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                            Build a Strong <span className="text-[#d38639]">Corporate Culture</span>
                        </h2>

                        <p className="text-gray-400 text-sm sm:text-base max-w-lg">
                            Our culture is built around people, collaboration, and continuous
                            growth. We believe that a strong culture empowers individuals to
                            perform at their best.
                        </p>

                        <p className="text-gray-500 text-sm sm:text-base max-w-lg">
                            We create an environment where creativity thrives, teams feel
                            supported, and innovation becomes a daily habit.
                        </p>

                        <button onClick={() => { navigate("/who-we-are/about") }} className="bg-[#d38639] text-black px-6 py-3 text-sm font-medium tracking-wide hover:bg-[#b06c2e] transition rounded-md shadow-md">
                            Explore Culture
                        </button>
                    </div>

                    {/* RIGHT DESIGN */}
                    <div className="relative flex justify-center">

                        {/* MAIN CARD */}
                        <div className="bg-[#1a1f2e] p-4 rounded-xl shadow-xl w-full max-w-md">
                            <img
                                src={cultureimg1}
                                alt="culture"
                                className="rounded-lg w-full h-[300px] object-cover"
                            />

                            <div className="mt-4">
                                <p className="text-gray-300 text-sm">
                                    We focus on meaningful connections and growth at every level.
                                </p>
                            </div>
                        </div>

                        {/* FLOATING IMAGE */}
                        <div className="absolute -bottom-6 -left-6 bg-[#2a2f3f] p-2 rounded-xl shadow-lg hidden sm:block">
                            <img
                                src={cultureimg2}
                                alt="culture"
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                        </div>

                        {/* DECOR BOX */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#d38639] rounded-xl blur-2xl opacity-30"></div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default OurPeople;