"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("gfg_admin_logged_in", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ border: "2px solid #db4a2b", borderRadius: 10, padding: 32, background: "#fff", minWidth: 320 }}>
        <h2 style={{ color: "#db4a2b", textAlign: "center", marginBottom: 24 }}>Admin Login</h2>
        <div style={{ marginBottom: 16 }}>
          <label style={{ color: "#db4a2b", fontWeight: 600 }}>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 4, border: "1.5px solid #db4a2b" }}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ color: "#db4a2b", fontWeight: 600 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 4, border: "1.5px solid #db4a2b" }}
            required
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 10, background: "#db4a2b", color: "#fff", border: "none", borderRadius: 4, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Login</button>
      </form>
    </div>
  );
} 