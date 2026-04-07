"use client";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
    >
      {/* Orb 1 — top-left, zinc glow */}
      <div
        style={{
          position: "absolute",
          width: "70vw",
          height: "70vw",
          top: "-20vw",
          left: "-10vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(113,113,122,0.06) 0%, transparent 70%)",
          animation: "orb-drift-1 25s ease-in-out infinite",
          willChange: "transform",
        }}
        className="dark:[background:radial-gradient(circle_at_center,rgba(113,113,122,0.07)_0%,transparent_70%)]"
      />

      {/* Orb 2 — bottom-right, zinc glow */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          bottom: "-15vw",
          right: "-10vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(107,114,128,0.04) 0%, transparent 70%)",
          animation: "orb-drift-2 32s ease-in-out infinite",
          willChange: "transform",
        }}
        className="dark:[background:radial-gradient(circle_at_center,rgba(82,82,91,0.06)_0%,transparent_70%)]"
      />

      {/* Orb 3 — center, very faint accent */}
      <div
        style={{
          position: "absolute",
          width: "50vw",
          height: "50vw",
          top: "40%",
          left: "25%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(156,163,175,0.03) 0%, transparent 70%)",
          animation: "orb-drift-1 40s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
    </div>
  );
}
