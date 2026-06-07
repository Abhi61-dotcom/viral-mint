import React from "react";
import ContactForm from "../components/ContactForm";
import { useState } from "react"; // ✅ ADD
import toast from "react-hot-toast"; // ✅ ADD
import bg from "../assets/contactBgVideo.mp4"
import img from "../assets/contactIng.jpg"

const Contact = () => {

  const [loading, setLoading] = useState(false); // ✅ ADD

  const handleSubmit = async (formData, resetForm) => { // ✅ UPDATE (resetForm add)
    if (loading) return; // ✅ ADD

    setLoading(true); // ✅ ADD

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Form submitted successfully ✅");
        resetForm();
      } else {
        toast.error(data.message || "Something went wrong ❌");
      }

    } catch (err) {
      console.error(err);
      toast.error("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-10 bg-gray-900">

      {/* ✅ VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bg} />
      </video>

      {/* ✅ GRADIENT OVERLAY (more premium look) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>

      {/* ✅ MAIN WRAPPER */}
      <div className="w-full max-w-7xl mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-center">

        {/* ✅ FORM SECTION (Glass Effect) */}
        <div className="w-full max-w-4xl mx-auto lg:mx-0">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">

            {/* Optional Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              We'd love to hear from you. Fill out the form and we'll get back soon.
            </p>

            <ContactForm onSubmit={handleSubmit} loading={loading} />
          </div>
        </div>

        {/* ✅ RIGHT IMAGE */}
        <div className="hidden lg:block w-full h-[350px] md:h-[500px] lg:h-[620px]">
          <div className="relative w-full h-full">

            {/* subtle glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-2xl"></div>

            <img
              src={img}
              alt="Contact"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;