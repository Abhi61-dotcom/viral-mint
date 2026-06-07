import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
    const [isAuth, setIsAuth] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch("https://viral-mint.onrender.com/api/auth/me", {
                    credentials: "include",
                });

                if (res.status !== 200) {
                    setIsAuth(false);
                    return;
                }

                const data = await res.json();
                setUserRole(data.role);

                if (!role || data.role === role) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }

            } catch {
                setIsAuth(false);
            }
        };

        checkAuth();
    }, [role]);

    if (isAuth === null) return <p className="text-center mt-10">Loading...</p>;

    
    if (!isAuth) {
        if (role === "admin") {
            return <Navigate to="/admin-panel" replace />;
        }
        if (role === "agent") {
            return <Navigate to="/agent-login" replace />;
        }
        return <Navigate to="/" replace />;
    }

    return children;
}