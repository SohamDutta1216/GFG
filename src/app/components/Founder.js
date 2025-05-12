import React from "react";

export default function Founder({ image, alt, instaHandle, instaUrl, bio }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4vw",
      margin: "4rem 0",
      flexWrap: "wrap"
    }}>
      {/* Left: Image and handle */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 220 }}>
        <div style={{ width: 350, height: 350, overflow: "hidden", marginBottom: "1.5rem", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", flexShrink: 0 }}>
          <img
            src={image}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>
      </div>
      {/* Right: Bio */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <a
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            marginBottom: "1rem",
            width: "400px"
          }}
        >
          {instaHandle}
        </a>
        <div
          style={{
            minWidth: 200,
            maxWidth: 400,
            fontSize: "1.5rem",
            fontFamily: "Aileron, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
            textAlign: "center",
            fontWeight: 500,
            padding: "1rem",
            width: "400px"
          }}
        >
          {bio}
        </div>
      </div>
    </div>
  );
} 