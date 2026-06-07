import { useEffect, useState } from "react";

export default function AgentDashboard() {
    const [data, setData] = useState([]);
    const [agent, setAgent] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
    });


    const fetchAgent = async () => {
        try {
            const res = await fetch("https://viral-mint.onrender.com/api/agent/me", {
                credentials: "include",
            });

            const data = await res.json();
            setAgent(data);
        } catch (err) {
            console.error(err);
        }
    };

    const filteredData = data.filter((item) => {
        const text = `${item.firstName} ${item.lastName} ${item.email} ${item.company}`.toLowerCase();

        const matchSearch = text.includes(search.toLowerCase());

        const matchFilter =
            filter === "all" ||
            (filter === "called" && item.called) ||
            (filter === "pending" && !item.called);

        return matchSearch && matchFilter;
    });

    const fetchData = async () => {
        const res = await fetch("https://viral-mint.onrender.com/api/agent/my-contacts", {
            credentials: "include",
        });
        const result = await res.json();
        setData(Array.isArray(result) ? result : []);
    };

    const markCalled = async (id) => {
        await fetch(`https://viral-mint.onrender.com/api/agent/contact/${id}/called`, {
            method: "PUT",
            credentials: "include",
        });
        fetchData();
    };

    const handleLogout = async () => {
        await fetch("https://viral-mint.onrender.com/api/admin/logout", {
            method: "POST",
            credentials: "include",
        });
        window.location.href = "/agent-login";
    };

    const handleChangePassword = async () => {
        try {
            const res = await fetch("https://viral-mint.onrender.com/api/agent/change-password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(passwordData),
            });

            const data = await res.json();

            if (res.ok) {
                alert("Password changed successfully ✅");
                setShowPasswordModal(false);
                setPasswordData({ oldPassword: "", newPassword: "" });
            } else {
                alert(data.message || "Error changing password ❌");
            }
        } catch (err) {
            console.error(err);
        }
    };

    // 🔥 AUTO REFRESH + FAKE REALTIME NOTIFICATION
    useEffect(() => {
        fetchData();
        fetchAgent(); // 👈 ADD THIS

        const interval = setInterval(() => {
            fetchData();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen text-white p-4 md:p-6">

            {/* 🔍 SEARCH + FILTER */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">

                <input
                    type="text"
                    placeholder="Search leads..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 rounded bg-gray-800 w-full md:w-64 outline-none"
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-gray-800 p-2 rounded outline-none"
                >
                    <option value="all">All</option>
                    <option value="called">Called</option>
                    <option value="pending">Pending</option>
                </select>

            </div>

            {/* HEADER */}
            <div className="flex flex-wrap justify-between items-center gap-3 mb-6">

                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    Welcome,
                    <span className="text-indigo-400">
                        {agent?.name || "Agent"}
                    </span>

                    {/* <span className="bg-green-600 px-2 py-1 text-xs md:text-sm rounded">
                        {data.length} Leads
                    </span> */}
                </h1>

                <div className="flex items-center gap-3">

                    {/* 🔔 NOTIFICATION */}
                    {/* <div className="relative">

                        <button
                            onClick={() => setShowNotif(!showNotif)}
                            className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
                        >
                            🔔
                            {notifications.length > 0 && (
                                <span className="ml-1 text-red-500 text-xs">
                                    ({notifications.length})
                                </span>
                            )}
                        </button>

                        {showNotif && (
                            <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded shadow-lg p-3 z-50 max-h-60 overflow-y-auto">

                                {notifications.length === 0 ? (
                                    <p className="text-gray-400 text-sm">
                                        No notifications
                                    </p>
                                ) : (
                                    notifications.map((n, i) => (
                                        <div key={i} className="border-b border-gray-700 py-2 text-sm">
                                            <p>{n.message}</p>
                                            <span className="text-xs text-gray-400">{n.time}</span>
                                        </div>
                                    ))
                                )}

                            </div>
                        )}

                    </div> */}

                    {/* change password */}
                    <button
                        onClick={() => setShowPasswordModal(true)}
                        className="bg-indigo-600 px-3 py-2 rounded hover:bg-indigo-700"
                    >
                        Change Password 🔒
                    </button>

                    {/* LOGOUT */}
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 px-3 py-2 rounded hover:bg-red-700"
                    >
                        Logout 🚪
                    </button>

                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                <div className="bg-gray-800 p-5 rounded-xl shadow hover:scale-105 transition">
                    <p className="text-gray-400">Total Leads</p>
                    <h2 className="text-2xl md:text-3xl font-bold">{data.length}</h2>
                </div>

                <div className="bg-green-700 p-5 rounded-xl shadow hover:scale-105 transition">
                    <p>Called</p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {data.filter(d => d.called).length}
                    </h2>
                </div>

                <div className="bg-yellow-600 p-5 rounded-xl shadow hover:scale-105 transition">
                    <p>Pending</p>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {data.filter(d => !d.called).length}
                    </h2>
                </div>

            </div>

            {/* LEADS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                {filteredData.map(item => (
                    <div
                        key={item._id}
                        className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition"
                    >

                        <h2 className="text-lg font-semibold mb-2">
                            {item.firstName} {item.lastName}
                        </h2>

                        <div className="text-sm space-y-1 text-gray-300">
                            <p>📧 {item.email}</p>
                            <p>📞 {item.phone}</p>
                            <p>🏢 {item.company}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3 text-xs">
                            <span className="bg-blue-600 px-2 py-1 rounded">
                                {item.industry}
                            </span>

                            <span className="bg-purple-600 px-2 py-1 rounded">
                                {item.service}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                            {item.message}
                        </p>

                        <div className="mt-4 flex justify-between items-center">

                            <span
                                className={`text-xs px-2 py-1 rounded ${item.called
                                    ? "bg-green-500"
                                    : "bg-yellow-500 text-black"
                                    }`}
                            >
                                {item.called ? "Called ✅" : "Pending ⏳"}
                            </span>

                            {!item.called && (
                                <button
                                    onClick={() => markCalled(item._id)}
                                    className="bg-blue-600 px-3 py-1 text-xs rounded hover:bg-blue-700"
                                >
                                    Mark Done
                                </button>
                            )}

                        </div>

                    </div>
                ))}

            </div>

            {/* EMPTY */}
            {filteredData.length === 0 && (
                <p className="text-center text-gray-400 mt-10">
                    No leads found 🚫
                </p>
            )}


            {/* password modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 w-[90%] sm:w-96 shadow-xl">

                        <h2 className="text-lg font-semibold mb-4 text-center">
                            Change Password 🔒
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleChangePassword();
                            }}
                        >

                            <input
                                type="password"
                                placeholder="Current Password"
                                value={passwordData.oldPassword}
                                onChange={(e) =>
                                    setPasswordData({ ...passwordData, oldPassword: e.target.value })
                                }
                                className="w-full mb-3 p-2 bg-white/5 border border-white/10 rounded outline-none"
                            />

                            <input
                                type="password"
                                placeholder="New Password"
                                value={passwordData.newPassword}
                                onChange={(e) =>
                                    setPasswordData({ ...passwordData, newPassword: e.target.value })
                                }
                                className="w-full mb-4 p-2 bg-white/5 border border-white/10 rounded outline-none"
                            />

                            <div className="flex gap-2">
                                <button
                                    type="submit"
                                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 py-2 rounded"
                                >
                                    Update
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowPasswordModal(false)}
                                    className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}