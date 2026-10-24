import { color, font, container, sectionLabel } from "../theme";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" style={{ padding: "72px 0", borderTop: `1px solid ${color.line}` }}>
      <div style={{ ...container, margin: "0 auto" }}>
        <span style={sectionLabel}>01 / about</span>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <h2
            style={{
              flex: "1 1 280px",
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: "clamp(26px, 3.6vw, 36px)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              margin: 0,
              color: color.ink,
            }}
          >
            Full Stack engineering, with a growing focus on applied AI.
          </h2>
          <div style={{ flex: "2 1 420px" }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: color.inkSoft, margin: "0 0 18px" }}>
              {profile.summary}
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: color.inkSoft, margin: 0 }}>
              What I care about most is the part after "it works on my machine" -- real deployment, real
              testing, and the messy realities of production: an LLM call returning a 404 over a stale model
              name, a frontend timeout shorter than real model latency, a free-tier host with no
              background-worker support. Those are problems I've actually hit and fixed in the projects below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}