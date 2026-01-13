"use client";

export default function Home() {
  const handleGetStarted = () => {
    alert("Get Started clicked");
  };

  const handleLogin = () => {
    alert("Login clicked");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>IdeaForge</h1>

      <p style={{ maxWidth: 500, textAlign: "center", opacity: 0.8 }}>
        Turn ideas into real products faster. Validate, build, and launch in one place.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={handleGetStarted}
          style={{
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>

        <button
          onClick={handleLogin}
          style={{
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
