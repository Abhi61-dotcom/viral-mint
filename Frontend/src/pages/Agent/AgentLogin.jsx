import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgentLogin() {
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

      const res = await fetch("https://viral-mint.onrender.com/api/admin/agent-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 IMPORTANT
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        navigate("/agent");
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
          Agent Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-5 p-3 bg-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-2 rounded-lg font-medium transition ${loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}