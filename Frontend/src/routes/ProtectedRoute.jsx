import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children, role }) {
  const [ok, setOk] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/auth/me", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        if (data.role === role) setOk(true);
        else setOk(false);
      })
      .catch(() => setOk(false));
  }, []);

  if (ok === null) return <p>Loading...</p>;

  return ok ? children : <Navigate to="/" />;
}