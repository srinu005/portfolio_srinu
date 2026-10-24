import { color, font, container, shadow, buttonPrimary, buttonSecondary } from "../theme";
import { profile } from "../data";

// Soft blue + teal washes blended into the cloud-white page -- analogous colors,
// kept low-opacity so it reads calm rather than decorative.
const HERO_BLEND = [
  "radial-gradient(760px 420px at 88% 8%, rgba(94, 150, 230, 0.20), transparent 62%)",
  "radial-gradient(640px 380px at 4% 34%, rgba(27, 111, 128, 0.09), transparent 64%)",
].join(", ");

const dot = { width: 10, height: 10, borderRadius: "50%", background: "#C6D2E6" };

export default function Hero() {
  return (
    <section id="top" style={{ padding: "88px 0 72px", backgroundImage: HERO_BLEND }}>
      <div
        style={{
          ...container,
          margin: "0 auto",
          display: "flex",
          gap: 56,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 460px" }}>
          <span style={{ fontFamily: font.mono, fontSize: 14, color: color.teal }}>Hi, I'm</span>
          <h1
            style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              margin: "8px 0 14px",
              color: color.ink,
            }}
          >
            {profile.name}
          </h1>
          <h2
            style={{
              fontFamily: font.display,
              fontWeight: 500,
              fontSize: "clamp(18px, 2.4vw, 24px)",
              color: color.blue,
              margin: "0 0 22px",
            }}
          >
            {profile.title}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: color.inkSoft, maxWidth: 560, margin: 0 }}>
            {profile.tagline}
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary" style={buttonPrimary}>
              View Projects
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary" style={buttonSecondary}>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary" style={buttonSecondary}>
              LinkedIn
            </a>
           
          </div>
        </div>

        <div
          style={{
            flex: "1 1 340px",
            background: color.bgCard,
            border: `1px solid ${color.line}`,
            borderRadius: 8,
            boxShadow: shadow.card,
            fontFamily: font.mono,
            fontSize: 13.5,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 7,
              padding: "11px 14px",
              borderBottom: `1px solid ${color.line}`,
              background: color.bgRaised,
            }}
          >
            <span style={dot} />
            <span style={dot} />
            <span style={dot} />
          </div>
          
          </div>
        </div>
    
    </section>
  );
}