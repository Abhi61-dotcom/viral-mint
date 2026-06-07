import React from 'react'
import { Cog, Sparkles, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hero1 from "../../assets/whoWeAre/OurAdvantage/hero1.png"
import AnalystReport from "../../assets/whoWeAre/OurAdvantage/analystReport.jpeg"

const OurAdvantage = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="bg-[#0b0033] text-white min-h-screen flex items-center px-6 md:px-16 py-16">

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">

                    {/* LEFT */}
                    <div className="max-w-2xl">
                        <p className="text-yellow-400 text-sm font-semibold tracking-wider mb-4">
                            OUR ADVANTAGE
                        </p>

                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                            Teams that transform experience
                        </h1>

                        <p className="text-[#bdb7d9] leading-relaxed mb-8">
                            We combine global reach, the agility to scale and an edge that comes
                            with putting people first. With tech-enhanced specialists from across
                            CX, AI, Trust & Safety and FinCrime & Compliance, our teams deliver
                            the performance the world’s most innovative brands demand.
                        </p>

                        <button onClick={() => { navigate("/contact-us") }} className="cursor-pointer bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full font-medium">
                            Speak to an expert
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px]">

                        {/* dashed big circle */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400 scale-110"></div>

                        {/* square outline */}
                        <div className="absolute w-[80%] h-[80%] border-2 border-pink-500 top-10 -right-10"></div>

                        {/* curved image container */}
                        <div
                            className="w-full h-full overflow-hidden relative"
                            style={{
                                borderTopRightRadius: "220px",
                                borderBottomLeftRadius: "220px",
                                borderTopLeftRadius: "40px",
                                borderBottomRightRadius: "40px",
                                background: "#f472b6",
                            }}
                        >
                            <img
                                src={hero1}
                                alt="person"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* caption */}
                        <p className="absolute bottom-6 right-6 text-xs">
                            Darien, Sales, USA
                        </p>
                    </div>

                </div>
            </section>


            <section className="bg-[#0b0033] py-20 px-6 md:px-16 relative overflow-hidden">

                {/* TOP dashed line */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[70%] border-t-2 border-dashed border-cyan-400"></div>

                {/* BOTTOM curved dashed */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] border-b-2 border-dashed border-cyan-400 rounded-b-full"></div>

                {/* CARDS */}
                <div className="grid md:grid-cols-3 gap-8 relative z-10">

                    {/* CARD 1 */}
                    <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
                        <Heart className="mb-6" size={32} />

                        <h3 className="text-2xl font-semibold mb-4">
                            Caring for our people
                        </h3>

                        <p className="text-sm leading-relaxed text-blue-100">
                            With a culture rooted in frontline care and community service –
                            including dedicated Wellness & Resiliency experts – we empower
                            teammates to thrive, grow and succeed.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
                        <Cog className="mb-6" size={32} />

                        <h3 className="text-2xl font-semibold mb-4">
                            Innovating from the start
                        </h3>

                        <p className="text-sm leading-relaxed text-blue-100">
                            From day one, we built a different kind of services company –
                            people first, tech amplified and always evolving. That foundation
                            positions us to lead with confidence in the AI era.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
                        <Sparkles className="mb-6" size={32} />

                        <h3 className="text-2xl font-semibold mb-4">
                            Driving excellence
                        </h3>

                        <p className="text-sm leading-relaxed text-blue-100">
                            We prove excellence everyday through our outcomes: more satisfied
                            customers, safer communities, stronger operations and higher
                            business value.
                        </p>
                    </div>

                </div>
            </section>


            <section className="relative bg-[#0b0033] py-24 px-6 md:px-16 overflow-hidden">

                {/* RIGHT curved dashed arc */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-purple-500 rounded-full opacity-60"></div>

                {/* MAIN WRAPPER */}
                <div className="relative flex flex-col md:flex-row items-center gap-12">

                    {/* LEFT IMAGE CARD */}
                    <div className="relative z-10">
                        <div className="bg-[#1a0a4a] border-4 rounded-br-4xl p-4 rounded-[30px] shadow-2xl">
                            <img
                                src={AnalystReport}
                                alt="report"
                                className="rounded-[20px] w-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative max-w-xl text-white">

                        {/* Blur overlay box */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl"></div>

                        <div className="relative z-10 p-8">
                            <p className="text-yellow-400 font-semibold text-sm mb-2 tracking-wider">
                                ANALYST REPORT
                            </p>

                            <p className="text-xs mb-3 bg-black inline-block px-2 py-1 rounded">
                                to access this content
                            </p>

                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                                A consistent <br /> Trust & Safety Leader
                            </h2>

                            <p className="text-[#d1cbe8] mb-6">
                                Recognized as a “Leader” in Everest Group’s Trust and Safety
                                Services PEAK Matrix® Assessment for three consecutive years
                            </p>

                            {/* <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
                                Download the report
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* CENTER GRAY OVERLAY (like screenshot) */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none"></div>

            </section>
        </>
    )
}

export default OurAdvantage