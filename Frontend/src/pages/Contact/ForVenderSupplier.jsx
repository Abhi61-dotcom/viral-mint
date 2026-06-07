import React from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react"; // ✅ ADD

const ForVenderSupplier = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // ✅ ADD

  // ✅ CLEAN submit (no captcha)
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
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-16">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT FORM */}
        <ContactForm onSubmit={sendData} loading={loading} /> {/* ✅ UPDATE */}

        {/* RIGHT SIDE */}
        <div className="text-white flex flex-col justify-center">

          <h3 className="text-xl font-semibold mb-6">
            Need help with something else?
          </h3>

          <div className="flex flex-col gap-4 text-pink-400">

            <div
              onClick={() => navigate("/contact-us")}
              className="flex items-center justify-between cursor-pointer group"
            >
              <span className="group-hover:text-white transition">
                Talk to an expert
              </span>
              <span className="group-hover:translate-x-1 transition">›</span>
            </div>

            <div
              onClick={() => navigate("/contact-us/job")}
              className="flex items-center justify-between cursor-pointer group"
            >
              <span className="group-hover:text-white transition">
                For job seekers
              </span>
              <span className="group-hover:translate-x-1 transition">›</span>
            </div>

            <div
              onClick={() => navigate("/contact-us/verification")}
              className="flex items-center justify-between cursor-pointer group"
            >
              <span className="group-hover:text-white transition">
                For employment verification
              </span>
              <span className="group-hover:translate-x-1 transition">›</span>
            </div>

          </div>
        </div>

      </div>

      {/* Tailwind custom class */}
      <style>{`
        .form-input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s ease;
        }
        .form-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ForVenderSupplier;