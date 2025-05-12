"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);
  const [showAccepted, setShowAccepted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("gfg_admin_logged_in") !== "true") {
      router.push("/admin");
      return;
    }
    fetch("/api/submit", { method: "GET" })
      .then(res => res.json())
      .then(data => {
        setSubmissions(data.submissions || []);
        setLoading(false);
      });
  }, [router]);

  const toggleAccepted = async (id, current) => {
    setUpdating(id);
    const res = await fetch("/api/submit", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, accepted: !current }),
    });
    if (res.ok) {
      setSubmissions(submissions => submissions.map(s => s.id === id ? { ...s, accepted: !current } : s));
    }
    setUpdating(null);
  };

  const filtered = submissions.filter(s => s.accepted === showAccepted);

  if (loading) return <div style={{ color: "#db4a2b", textAlign: "center", marginTop: 80 }}>Loading submissions...</div>;

  return (
    <div style={{ maxWidth: 900, margin: "120px auto 32px auto", padding: 24, background: "#fff", borderRadius: 10, border: "2px solid #db4a2b" }}>
      <h2 style={{ color: "#db4a2b", textAlign: "center", marginBottom: 24 }}>All Submissions</h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <button
          onClick={() => setShowAccepted(false)}
          style={{
            background: !showAccepted ? "#db4a2b" : "#fff",
            color: !showAccepted ? "#fff" : "#db4a2b",
            border: "1.5px solid #db4a2b",
            borderRadius: 6,
            padding: "6px 18px",
            fontWeight: 700,
            cursor: "pointer",
            marginRight: 8,
            minWidth: 120,
            transition: "all 0.2s"
          }}
        >
          Not Accepted
        </button>
        <button
          onClick={() => setShowAccepted(true)}
          style={{
            background: showAccepted ? "#db4a2b" : "#fff",
            color: showAccepted ? "#fff" : "#db4a2b",
            border: "1.5px solid #db4a2b",
            borderRadius: 6,
            padding: "6px 18px",
            fontWeight: 700,
            cursor: "pointer",
            minWidth: 120,
            transition: "all 0.2s"
          }}
        >
          Accepted
        </button>
      </div>
      {filtered.length === 0 ? (
        <div style={{ color: "#db4a2b", textAlign: "center" }}>No submissions found.</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filtered.map((s) => (
            <li key={s.id} style={{ borderBottom: "1px solid #db4a2b", padding: "16px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <div><strong>Name:</strong> {s.name}</div>
                <div><strong>Email:</strong> {s.email}</div>
                <div><strong>Medium:</strong> {s.medium}</div>
                <div><strong>Bio:</strong> {s.bio}</div>
                <div><strong>Shown:</strong> {s.shown ? "Yes" : "No"}</div>
                <div><strong>Native New Yorker:</strong> {s.native ? "Yes" : "No"}</div>
                <div><strong>Instagram:</strong> {s.instagram}</div>
                <div><strong>TikTok:</strong> {s.tiktok}</div>
                <div><strong>Website:</strong> {s.website}</div>
                <div><strong>Notes:</strong> {s.notes}</div>
                <div><strong>Find:</strong> {s.find}</div>
                <div style={{ margin: "8px 0" }}>
                  <strong>Accepted:</strong> {" "}
                  <button
                    onClick={() => toggleAccepted(s.id, s.accepted)}
                    style={{
                      background: s.accepted ? "#db4a2b" : "#fff",
                      color: s.accepted ? "#fff" : "#db4a2b",
                      border: "1.5px solid #db4a2b",
                      borderRadius: 6,
                      padding: "4px 12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      minWidth: 70,
                      transition: "all 0.2s",
                      opacity: updating === s.id ? 0.6 : 1,
                    }}
                    disabled={updating === s.id}
                  >
                    {s.accepted ? "Accepted" : "Not Accepted"}
                  </button>
                </div>
              </div>
              {s.image && (
                <div style={{ minWidth: 120, textAlign: "right" }}>
                  <a href={s.image} target="_blank" rel="noopener noreferrer">
                    <img src={s.image} alt="Artwork" style={{ maxWidth: 120, maxHeight: 120, borderRadius: 8, border: "1.5px solid #db4a2b" }} />
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 