import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import BackButton from "../../utils/BackButton ";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react"; // ✅ ADD

const TalkToExpert = () => {
    const { type } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false); // ✅ ADD

    const links = [
        {
            label: "For job seekers",
            path: "/contact-us/job",
        },
        {
            label: "For former employees",
            path: "/contact-us/employee",
        },
        {
            label: "For employment verification",
            path: "/contact-us/verification",
        },
    ];

    

    const sendData = async (data, resetForm) => {
        if (loading) return; // ✅ ADD (double click block)

        setLoading(true); // ✅ ADD

        try {
            await axios.post("http://localhost:8000/api/contact", data);

            toast.success("Message sent successfully ✅");
            resetForm();
        } catch (err) {
            toast.error("Something went wrong ❌");
            console.error(err);
        } finally {
            setLoading(false); // ✅ ADD
        }
    };
    return (
        <section className="w-full min-h-screen bg-[#0B0033] text-white py-16 px-4 md:px-16">
            <BackButton />

            {/* MAIN GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* FORM CARD */}
                <ContactForm onSubmit={sendData} loading={loading} /> {/* ✅ UPDATE */}


                {/* RIGHT SIDE LINKS */}
                <div className="text-white mt-6 lg:mt-0">
                    <h3 className="text-lg md:text-xl font-semibold mb-6">
                        Need help with something else?
                    </h3>

                    <div className="flex flex-col gap-4">
                        {links.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => navigate(item.path)}
                                className="group cursor-pointer flex items-center justify-between border-b border-white/10 pb-2"
                            >
                                <span className="text-pink-400 group-hover:text-white transition">
                                    {item.label}
                                </span>

                                <span className="text-pink-400 group-hover:translate-x-1 transition">
                                    →
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* INPUT STYLES */}
            <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
          transition: 0.2s;
        }
        .input:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
        }
      `}</style>
        </section>
    );
};

export default TalkToExpert;