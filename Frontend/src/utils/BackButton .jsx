import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="fixed top-26 left-6 z-50 group flex items-center gap-2 px-4 py-2 rounded-full

      bg-white/5 backdrop-blur-2xl border border-white/10
      text-white/90

      shadow-[0_8px_30px_rgba(0,0,0,0.4)]
      hover:shadow-[0_10px_40px_rgba(99,102,241,0.3)]

      hover:bg-white/10 hover:border-purple-400/40
      hover:scale-105

      transition-all duration-300"
        >

            {/* ICON */}
            <ArrowLeft
                size={18}
                className="text-white/80 group-hover:-translate-x-1 transition duration-300"
            />


            {/* GLOW EFFECT */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

        </button>
    );
};

export default BackButton;