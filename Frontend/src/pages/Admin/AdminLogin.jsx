import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please fill all fields ❌");
    }

    try {
      setLoading(true);

      const res = await fetch("https://viral-mint.onrender.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 MUST
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        navigate("/admin"); // 🔥 SPA navigation (better than window.location)
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white px-4">

      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl w-full max-w-sm shadow-xl">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >

          {/* EMAIL */}
          <input
            type="email"
            required
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            required
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-5 p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-medium transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  );
}