import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ onSubmit, loading }) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        email: "",
        country: "",
        industry: "",
        service: "",
        message: "",
        agreed: false,
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = () => {

        if (!form.agreed) {
            setError("Please accept privacy policy");
            return;
        }

        if (!form.firstName || !form.email || !form.phone || !form.company || !form.industry || !form.service) {
            setError("Please fill all required fields");
            return;
        }

        setError("");


        const resetForm = () => {
            setForm({
                firstName: "",
                lastName: "",
                phone: "",
                company: "",
                email: "",
                country: "",
                industry: "",
                service: "",
                message: "",
                agreed: false,
            });
        };

        // console.log("onSubmit:", onSubmit);
        onSubmit(form, resetForm);
    };

    return (
        <div className="lg:col-span-2 bg-gray-800/80 backdrop-blur-xl text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10">

            {/* INPUT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="*First Name"
                    className="input"
                />

                <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="*Last Name"
                    className="input"
                />

                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="*Phone"
                    className="input"
                />

                <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="*Company"
                    className="input"
                />

                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="*Email"
                    className="input"
                />

                <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="input"
                >
                    <option value="" className="text-black bg-white">
                        *Country
                    </option>
                    <option className="text-black bg-white">
                        India
                    </option>
                    <option className="text-black bg-white">
                        USA
                    </option>
                </select>

                <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="input col-span-1 md:col-span-2"
                >
                    <option value="" className="text-black bg-white">*Industry</option>
                    <option className="text-black bg-white">Education Tech</option>
                    <option className="text-black bg-white">Professional Services</option>
                    <option className="text-black bg-white">Retail, Consumer Products, and e-Commerce</option>
                    <option className="text-black bg-white">Software and High Technology</option>
                    <option className="text-black bg-white">Media and Entertainment</option>
                    <option className="text-black bg-white">Social Media</option>
                    <option className="text-black bg-white">Gaming</option>
                    <option className="text-black bg-white">Other</option>
                </select>

                <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input col-span-1 md:col-span-2"
                >
                    <option value="" className="text-black bg-white">
                        *Services you're interested in
                    </option>
                    <option className="text-black bg-white">
                        Digital Customer Experience
                    </option>
                    <option className="text-black bg-white">
                        GenAI Data Services
                    </option>
                    <option className="text-black bg-white">
                        Financial Crimes + Compliance
                    </option>
                    <option className="text-black bg-white">
                        Trust + Safety
                    </option>
                    <option className="text-black bg-white">
                        Wellness as a Service
                    </option>
                    <option className="text-black bg-white">
                        Learning as a Service
                    </option>
                    <option className="text-black bg-white">
                        Sales Outsourcing
                    </option>
                </select>

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="*How can we help?"
                    className="input col-span-1 md:col-span-2 h-28 resize-none"
                ></textarea>
            </div>

            {/* CHECKBOX */}
            <div className="mt-6 flex items-start gap-2 text-sm">
                <input
                    type="checkbox"
                    name="agreed"
                    checked={form.agreed}
                    onChange={handleChange}
                    className="mt-1 accent-blue-500"
                />
                <p className="text-gray-300 leading-relaxed">
                    I understand that my information will be used in accordance with applicable data privacy law and TaskUs' Data{" "}
                    <span
                        onClick={() => navigate("/privacy-policy")}
                        className="text-blue-400 underline cursor-pointer hover:text-blue-300"
                    >
                        Privacy Policy
                    </span>.
                </p>
            </div>

            {error && <p className="text-red-400 mt-3">{error}</p>}

            {/* BUTTON */}
            <button
                onClick={handleSubmit}
                disabled={loading}
                className={`mt-6 w-full sm:w-auto px-8 py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-300
        ${loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 shadow-lg shadow-blue-500/30"
                    }`}
            >
                {loading && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? "Submitting..." : "Submit"}
            </button>

            {/* STYLE */}
            <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 14px;
          outline: none;

          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);

          backdrop-filter: blur(10px);
          transition: all 0.25s ease;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .input:focus {
          border-color: #60a5fa;
          box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.3);
          background: rgba(255, 255, 255, 0.12);
        }

        select.input {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg fill='white' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.5 7l4.5 4 4.5-4' stroke='white' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
        }
    `}</style>
        </div>
    );
};

export default ContactForm;