import React from 'react'
import { useNavigate } from "react-router-dom";
import { MessageSquare, Monitor, Phone, Edit } from "lucide-react";
import Director from "../../assets/whoWeAre/OurTechnology/vianyThakur.png"
import powerTech1 from "../../assets/whoWeAre/OurTechnology/powerTech1.jpg"
import powerTech2 from "../../assets/whoWeAre/OurTechnology/powerTech2.jpg"
import Twilio from "../../assets/whoWeAre/OurTechnology/TwilioLogo.png"
import Zendesk from "../../assets/whoWeAre/OurTechnology/zendeskLogo.png"

const OurTechnology = () => {
    const navigate=useNavigate()
    const tools = [
        {
            title: "AssistAI",
            desc: "This private LLM is trained only on your knowledge base. It augments teammates’ capabilities by providing relevant answers to their inquiries.",
            icon: <MessageSquare size={28} />,
        },
        {
            title: "PromptAI",
            desc: "This tool suggests chat responses in real time, eliminating the time-consuming process of having to search knowledge bases and free-write responses.",
            icon: <Monitor size={28} />,
        },
        {
            title: "CallAI",
            desc: "This desktop application seamlessly analyzes voice interactions in real-time so agents can focus on the conversation and not worry about taking notes.",
            icon: <Phone size={28} />,
        },
        {
            title: "AuthorAI",
            desc: "This tool enhances writing proficiency by making grammar and spelling corrections as well as revisions for style and clarity.",
            icon: <Edit size={28} />,
        },
    ];
    return (
        <>
            <div className="bg-[#0B0033]">
                {/* first */}
                <section className="bg-[#0B0033] text-white md:py-30 px-6 md:px-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">

                        {/* LEFT CONTENT */}
                        <div className="flex-1 text-center pt-5 md:text-left">
                            <p className="text-yellow-400 font-semibold tracking-wider mb-4">
                                OUR TECHNOLOGY
                            </p>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Smarter tools <br />
                                Stronger results
                            </h1>

                            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto md:mx-0">
                                By integrating machine learning algorithms, real-time monitoring
                                dashboards and predictive analytics, we empower our workforce to be
                                more proactive and customer-centric, ultimately driving more
                                business value.
                            </p>

                            <button onClick={() => { navigate("/contact") }} className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium">
                                Speak to an expert
                            </button>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex-1 relative flex items-center justify-center mt-10 md:mt-0 min-h-[350px] md:min-h-[500px]">

                            {/* Dashed Circle */}
                            <div className="absolute w-[220px] h-[300px] md:w-[420px] md:h-[520px] border-dashed border-2 border-blue-700 rounded-full">
                            </div>

                            {/* Rectangle Shape */}
                            <div className="absolute w-[200px] h-[220px] md:w-[400px] md:h-[450px] border-4 border-purple-500 shadow-xl shadow-purple-400/30 rounded-lg">
                            </div>

                            {/* Image Container */}
                            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[200px] md:w-[350px] md:h-[400px]  bg-yellow-400 rounded-[0%_0%_50%_0%] overflow-hidden shadow-xl z-10">

                                <img
                                    src={Director}
                                    alt="profile"
                                    className="w-full h-full object-cover"
                                />

                                <p className="absolute bottom-3 left-3 text-xs md:text-sm text-white">
                                    Vinay Thakur , Managing Director
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* second */}
                <section className="bg-[#0B0033] text-white py-20 px-6 md:px-16 relative overflow-hidden">

                    {/* Top Content */}
                    <div className="max-w-4xl mx-auto text-center border border-dashed border-cyan-400 p-8 md:p-12 rounded-lg">

                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                            Where people <br /> power technology
                        </h2>

                        <p className="text-gray-300 text-lg">
                            Across all of our services — CX, AI & Data, Trust & Safety,
                            Financial Crime & Compliance, Training and Sales — people lead the
                            way, while technology drives efficiency and scale. Together we
                            accelerate transformation.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

                        <img
                            src={powerTech1}
                            alt="team"
                            className="w-full h-[250px] md:h-[350px] object-cover"
                        />

                        <img
                            src={powerTech2}
                            alt="team"
                            className="w-full h-[250px] md:h-[350px] object-cover"
                        />
                    </div>

                    {/* Bottom Curve Shape */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[500px] h-[150px] border-b-2 border-dashed border-cyan-400 rounded-b-full"></div>
                </section>

                {/* third */}
                <section className="bg-gradient-to-r  mt-5 from-purple-700 to-purple-500 py-16 px-6 md:px-16 text-white">

                    {/* Heading */}
                    <h2 className="w-full text-center text-2xl md:text-6xl font-medium mb-12 tracking-widest">
                        Our innovation partners
                    </h2>

                    {/* Logos */}
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

                        {/* Partner 1 */}
                        <img
                            src={Zendesk}
                            alt="zendesk"
                            className="h-12 md:h-16 w-[140px] object-contain opacity-90 hover:opacity-100 transition filter brightness-0 invert"
                        />

                        {/* Partner 2 */}
                        <img
                            src={Twilio}
                            alt="Twilio"
                            className="h-12 md:h-16 w-[140px] object-contain opacity-90 hover:opacity-100 transition filter brightness-0 invert"
                        />
                    </div>
                </section>

                {/* fourth */}
                <section className="bg-[#0B0033] text-white py-20 px-6 md:px-16 relative overflow-hidden">

                    {/* Top Box */}
                    <div className="max-w-5xl mx-auto text-center border border-dashed border-cyan-400 p-8 md:p-12 rounded-lg">

                        <p className="text-yellow-400 font-semibold mb-4 tracking-wider">
                            AI TOOLS
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                            Enhancing customer experience
                        </h2>

                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Lower AHT and costs, fewer human errors, increased accuracy,
                            consistency, quality and security, our GenAI platform, TaskGPT,
                            powers tools that help teammates drive higher CSAT.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="bg-blue-600 rounded-2xl p-6 md:p-8 shadow-lg hover:scale-105 transition duration-300"
                            >
                                <div className="mb-6 text-white">{tool.icon}</div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {tool.title}
                                </h3>

                                <p className="text-sm text-blue-100 leading-relaxed">
                                    {tool.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Curve */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[700px] h-[200px] border-b-2 border-dashed border-cyan-400 rounded-b-full"></div>
                </section>
            </div>
        </>
    )
}

export default OurTechnology