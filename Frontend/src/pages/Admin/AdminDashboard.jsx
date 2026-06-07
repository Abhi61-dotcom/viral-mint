import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [loading, setLoading] = useState(false);
    const [showAgents, setShowAgents] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("latest");
    const [openId, setOpenId] = useState(null);
    const [agents, setAgents] = useState([]);
    const [showAgentForm, setShowAgentForm] = useState(false);
    const [agentForm, setAgentForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [showResetModal, setShowResetModal] = useState(false);
    const [selectedAgentId, setSelectedAgentId] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const [agentSearch, setAgentSearch] = useState("");
    const [debouncedAgents, setDebouncedAgents] = useState([]);

    const createAgent = async () => {
        const url = agentForm.id
            ? `http://localhost:8000/api/admin/agent/${agentForm.id}`
            : "http://localhost:8000/api/admin/create-agent";

        const method = agentForm.id ? "PUT" : "POST";

        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(agentForm),
        });

        const data = await res.json();

        alert(data.message);

        setShowAgentForm(false);

        setAgentForm({
            name: "",
            email: "",
            password: "",
        });

        fetchAgents();
    };

    const fetchData = async () => {
        try {
            setLoading(true);

            const res = await fetch("http://localhost:8000/api/admin/contacts", {
                credentials: "include",
            });

            const result = await res.json();
            setData(Array.isArray(result) ? result : []);

        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const deleteItem = async (id) => {
        await fetch(`http://localhost:8000/api/admin/contact/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        fetchData();
    };

    const markCalled = async (id) => {
        await fetch(`http://localhost:8000/api/admin/contact/${id}/called`, {
            method: "PUT",
            credentials: "include",
        });
        fetchData();
    };

    const handleLogout = async () => {
        await fetch("http://localhost:8000/api/admin/logout", {
            method: "POST",
            credentials: "include",
        });

        window.location.href = "/admin-panel";
    };

    const fetchAgents = async () => {
        const res = await fetch("http://localhost:8000/api/admin/agents", {
            credentials: "include",
        });
        const result = await res.json();
        setAgents(Array.isArray(result) ? result : []);
    };

    // Delete Agent
    const deleteAgent = async (id) => {
        if (!confirm("Are you sure to delete this agent?")) return;

        await fetch(`http://localhost:8000/api/admin/agent/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        fetchAgents();
    };

    // Edit Agent detail
    const handleEdit = (agent) => {
        setShowAgentForm(true);

        setAgentForm({
            name: agent.name,
            email: agent.email,
            password: "",
            id: agent._id,
        });
    };

    const assignAgent = async (contactId, agentId) => {
        console.log("ASSIGN:", contactId, agentId); // debug

        const res = await fetch(`http://localhost:8000/api/admin/contact/${contactId}/assign`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ agentId }),
        });

        const data = await res.json();
        console.log("RESPONSE:", data);

        fetchData(); // refresh
    };

    const handleResetPassword = async () => {
        if (!newPassword || newPassword.length < 6) {
            return alert("Min 6 characters required ❌");
        }

        const res = await fetch(
            `http://localhost:8000/api/admin/agent/${selectedAgentId}/reset-password`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ newPassword }),
            }
        );

        const data = await res.json();

        alert(data.message);

        setShowResetModal(false);
        setNewPassword("");
    };

    //Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            const filtered = agents.filter((agent) =>
                `${agent.name} ${agent.email}`
                    .toLowerCase()
                    .includes(agentSearch.toLowerCase())
            );

            setDebouncedAgents(filtered);
        }, 300);

        return () => clearTimeout(timer);
    }, [agentSearch, agents]);

    useEffect(() => {
        const loadData = async () => {
            await fetchData();
            await fetchAgents();
        };

        loadData();
    }, []);

    // 🔥 FIX SEARCH DEBOUNCE
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const handleClick = () => setShowAgents(false);
        if (showAgents) {
            window.addEventListener("click", handleClick);
        }
        return () => window.removeEventListener("click", handleClick);
    }, [showAgents]);

    // 🔍 FILTER + SEARCH + SORT
    const filteredData = data
        .filter((item) => {
            const name =
                item.name ||
                `${item.firstName || ""} ${item.lastName || ""}`;

            const text = `${name} ${item.email}`.toLowerCase();

            const matchesSearch = text.includes(debouncedSearch.toLowerCase());

            const matchesFilter =
                filter === "all" ||
                (filter === "called" && item.called) ||
                (filter === "pending" && !item.called);

            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            if (sort === "latest") return new Date(b.createdAt) - new Date(a.createdAt);
            if (sort === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
            return 0;
        });

    return (
        <div className="bg-gray-900 min-h-screen text-white p-6">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    Admin Dashboard
                </h1>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 p-2 rounded-xl shadow-lg">

                    <button
                        onClick={fetchData}
                        disabled={loading}
                        className="px-3 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 transition text-sm flex items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                {/* Spinner */}
                                <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></span>
                                Loading...
                            </>
                        ) : (
                            <>🔄 Refresh</>
                        )}
                    </button>

                    <button
                        onClick={() => setShowAgentForm(true)}
                        className="px-3 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 transition text-sm"
                    >
                        + Add Agent
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowAgents(!showAgents);
                        }}
                        className="px-3 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition text-sm"
                    >
                        👥 Agents
                    </button>

                    <div className="h-6 w-px bg-white/10 mx-1"></div>

                    <button
                        onClick={handleLogout}
                        className="px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition text-sm"
                    >
                        🚪 Logout
                    </button>

                </div>
            </div>

            {/* AGENTS DROPDOWN */}
            {showAgents && (
                <div
                    onClick={(e) => e.stopPropagation()} // 🔥 FIX (dropdown close issue)
                    className="absolute right-2 sm:right-6 top-24 w-[95%] sm:w-80 md:w-96 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 z-50"
                >

                    {/* HEADER */}
                    <h2 className="text-lg font-semibold mb-3 tracking-wide">
                        All Agents
                    </h2>

                    {/* 🔍 SEARCH BAR */}
                    <div className="mb-3 relative">

                        {/* ICON */}
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                            🔍
                        </span>

                        <input
                            type="text"
                            placeholder="Search agent..."
                            value={agentSearch}
                            onChange={(e) => setAgentSearch(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>


                    {/* LIST */}
                    <div className="space-y-3 max-h-72 overflow-y-auto pr-1">

                        {(agentSearch ? debouncedAgents : agents).map((agent) => (

                            <div
                                key={agent._id}
                                className="bg-white/5 hover:bg-white/10 transition p-3 rounded-xl border border-white/5"
                            >

                                {/* INFO */}
                                <p className="font-medium text-sm sm:text-base">
                                    {agent.name}
                                </p>

                                <p className="text-xs text-gray-400 break-all">
                                    {agent.email}
                                </p>

                                {/* ACTIONS */}
                                <div className="flex flex-wrap gap-2 mt-3">

                                    <button
                                        onClick={() => handleEdit(agent)}
                                        className="flex-1 min-w-[70px] bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 py-1.5 rounded-md text-xs transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteAgent(agent._id)}
                                        className="flex-1 min-w-[70px] bg-red-500/10 hover:bg-red-500/20 text-red-400 py-1.5 rounded-md text-xs transition"
                                    >
                                        Delete
                                    </button>

                                    <button
                                        onClick={() => {
                                            setSelectedAgentId(agent._id);
                                            setShowResetModal(true);
                                        }}
                                        className="w-full sm:w-auto bg-red-500/10 text-red-400 px-2 py-1.5 rounded-md text-xs hover:bg-red-500/20 transition"
                                    >
                                        Reset Password
                                    </button>

                                </div>

                            </div>
                        ))}

                        {/* ❌ NO RESULT */}
                        {agentSearch && debouncedAgents.length === 0 && (
                            <p className="text-center text-gray-400 text-sm py-4">
                                No agents found 🚫
                            </p>
                        )}

                    </div>
                </div>
            )}

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

                <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 backdrop-blur-lg border border-indigo-500/10 p-4 rounded-2xl shadow hover:scale-[1.03] transition">
                    <p className="text-white text-sm">Total</p>
                    <h2 className="text-2xl font-semibold mt-1">{data.length}</h2>
                </div>

                <div className="bg-gradient-to-br bg-green-700 backdrop-blur-lg border border-green-500/10 p-4 rounded-2xl shadow hover:scale-[1.03] transition">
                    <p className="text-white text-sm">Called</p>
                    <h2 className="text-2xl font-semibold mt-1">
                        {data.filter(d => d.called).length}
                    </h2>
                </div>

                <div className="bg-gradient-to-br bg-yellow-600 border border-yellow-500/10 p-4 rounded-2xl shadow hover:scale-[1.03] transition">
                    <p className="text-white text-sm">Pending</p>
                    <h2 className="text-2xl font-semibold mt-1">
                        {data.filter(d => !d.called).length}
                    </h2>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-lg border border-purple-500/10 p-4 rounded-2xl shadow hover:scale-[1.03] transition">
                    <p className="text-white text-sm">Today</p>
                    <h2 className="text-2xl font-semibold mt-1">
                        {data.filter(d =>
                            new Date(d.createdAt).toDateString() === new Date().toDateString()
                        ).length}
                    </h2>
                </div>

            </div>


            {/* CONTROLS */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

                {/* SEARCH */}
                <div className="relative w-full lg:w-72">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#0f172a]/80 backdrop-blur-md border border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        🔍
                    </span>
                </div>

                {/* FILTER + SORT GROUP */}
                <div className="flex flex-wrap items-center gap-2 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 p-2 rounded-xl shadow">

                    <button
                        onClick={() => setFilter("all")}
                        className="px-3 py-1.5 rounded-lg text-sm bg-white/5 hover:bg-white/10 transition"
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter("called")}
                        className="px-3 py-1.5 rounded-lg text-sm bg-green-500/10 text-green-400 hover:bg-green-500/20 transition"
                    >
                        Called
                    </button>

                    <button
                        onClick={() => setFilter("pending")}
                        className="px-3 py-1.5 rounded-lg text-sm bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 transition"
                    >
                        Pending
                    </button>

                    <div className="h-5 w-px bg-white/10 mx-1"></div>

                    <select
                        onChange={(e) => setSort(e.target.value)}
                        className="bg-[#0f172a] text-white px-3 py-2 rounded-xl border border-white/10 text-sm outline-none appearance-none"
                    >
                        <option value="latest" className="bg-[#0f172a] text-white">
                            Latest
                        </option>
                        <option value="oldest" className="bg-[#0f172a] text-white">
                            Oldest
                        </option>
                    </select>

                </div>

            </div>



            {/* TABLE - WORKS FOR ALL SCREENS */}
            <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                        <thead className="bg-[#0f172a]">
                            <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">

                                <th className="p-3 text-center">Name</th>
                                <th className="text-center hidden sm:table-cell">Email</th>
                                <th className="text-center hidden md:table-cell">Phone</th>
                                <th className="text-center hidden lg:table-cell">Company</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Assign</th>
                                <th className="text-center">Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            {filteredData.map((item) => {
                                const name =
                                    item.name ||
                                    `${item.firstName || ""} ${item.lastName || ""}`;

                                return (
                                    <>
                                        <tr
                                            key={item._id}
                                            onClick={() =>
                                                setOpenId(openId === item._id ? null : item._id)
                                            }
                                            className="border-b border-white/5 hover:bg-white/[0.04] transition cursor-pointer text-center"
                                        >

                                            {/* NAME */}
                                            <td className="p-3 font-medium text-white max-w-[140px] truncate">
                                                {name || "No Name"}
                                            </td>

                                            {/* EMAIL */}
                                            <td className="hidden sm:table-cell text-gray-300 max-w-[180px] truncate">
                                                {item.email}
                                            </td>

                                            {/* PHONE */}
                                            <td className="hidden md:table-cell text-gray-300">
                                                {item.phone}
                                            </td>

                                            {/* COMPANY */}
                                            <td className="hidden lg:table-cell text-gray-300 max-w-[140px] truncate">
                                                {item.company}
                                            </td>

                                            {/* STATUS */}
                                            <td>
                                                {item.called ? (
                                                    <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs">
                                                        Called
                                                    </span>
                                                ) : (
                                                    <span className="bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-md text-xs">
                                                        Pending
                                                    </span>
                                                )}
                                            </td>

                                            {/* ASSIGN */}
                                            <td onClick={(e) => e.stopPropagation()}>
                                                <select
                                                    value={item.assignedTo?._id || ""}
                                                    onChange={(e) =>
                                                        assignAgent(item._id, e.target.value)
                                                    }
                                                    className="bg-[#0f172a] text-white border border-white/10 rounded-md px-2 py-1 text-xs outline-none max-w-[120px]"
                                                >
                                                    <option value="">Assign</option>
                                                    {agents.map((agent) => (
                                                        <option key={agent._id} value={agent._id}>
                                                            {agent.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>

                                            {/* ACTION */}
                                            <td>
                                                <div className="flex justify-center gap-2">

                                                    {!item.called && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                markCalled(item._id);
                                                            }}
                                                            className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md text-xs"
                                                        >
                                                            Done
                                                        </button>
                                                    )}

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            deleteItem(item._id);
                                                        }}
                                                        className="bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-xs"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                        {/* EXPAND (mobile pe hidden data show karega) */}
                                        {openId === item._id && (
                                            <tr className="bg-white/5">
                                                <td colSpan="7" className="p-4">

                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">

                                                        <div className="text-center">
                                                            <p className="text-gray-400 text-xs">Email</p>
                                                            <p>{item.email}</p>
                                                        </div>

                                                        <div className="text-center">
                                                            <p className="text-gray-400 text-xs">Phone</p>
                                                            <p>{item.phone}</p>
                                                        </div>

                                                        <div className="text-center">
                                                            <p className="text-gray-400 text-xs">Company</p>
                                                            <p>{item.company}</p>
                                                        </div>

                                                        <div className="col-span-2 sm:col-span-3 text-center">
                                                            <p className="text-gray-400 text-xs">Message</p>
                                                            <p>{item.message}</p>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr>
                                        )}
                                    </>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>


            {/* MODAL */}
            {showAgentForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">

                    <div className="bg-[#0f172a] border border-white/10 p-6 rounded-2xl w-[90%] sm:w-96 shadow-2xl">

                        <h2 className="text-xl font-semibold mb-4">Add Agent</h2>

                        <input
                            placeholder="Name"
                            value={agentForm.name}
                            onChange={(e) =>
                                setAgentForm({ ...agentForm, name: e.target.value })
                            }
                            className="w-full mb-3 p-2 bg-white/5 border border-white/10 rounded-lg outline-none"
                        />

                        <input
                            placeholder="Email"
                            value={agentForm.email}
                            onChange={(e) =>
                                setAgentForm({ ...agentForm, email: e.target.value })
                            }
                            className="w-full mb-3 p-2 bg-white/5 border border-white/10 rounded-lg outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={agentForm.password}
                            onChange={(e) =>
                                setAgentForm({ ...agentForm, password: e.target.value })
                            }
                            className="w-full mb-4 p-2 bg-white/5 border border-white/10 rounded-lg outline-none"
                        />

                        <div className="flex gap-2">
                            <button
                                onClick={createAgent}
                                className="flex-1 bg-indigo-500 hover:bg-indigo-600 transition px-4 py-2 rounded-lg"
                            >
                                Create
                            </button>

                            <button
                                onClick={() => setShowAgentForm(false)}
                                className="flex-1 bg-red-500/80 hover:bg-red-600 transition px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* reset password form  */}
            {showResetModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 w-[90%] sm:w-96 shadow-xl">

                        <h2 className="text-lg font-semibold mb-4 text-center">
                            Reset Agent Password 🔐
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleResetPassword();
                            }}
                        >

                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
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
                                    onClick={() => {
                                        setShowResetModal(false);
                                        setNewPassword("");
                                    }}
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