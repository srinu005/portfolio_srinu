import { color, font, container, tag, sectionLabel, buttonPrimary, buttonSecondary } from "../theme";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "72px 0", borderTop: `1px solid ${color.line}` }}>
      <div style={{ ...container, margin: "0 auto" }}>
        <span style={sectionLabel}>05 / achievements</span>
        <h2
          style={{
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: "clamp(26px, 3.6vw, 36px)",
            letterSpacing: "-0.015em",
            margin: "0 0 40px",
            color: color.ink,
          }}
        >
          Notable achievements.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} achievement={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ achievement: a, index }) {
  return (
    <article
      className="achievement-card"
      style={{
        background: color.bgCard,
        border: `1px solid ${color.line}`,
        borderRadius: 6,
        padding: "30px 32px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline" }}>
        <h3
          style={{
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: 26,
            letterSpacing: "-0.01em",
            margin: 0,
            color: color.ink,
          }}
        >
          {a.title}
        </h3>
        <span style={{ fontFamily: font.mono, fontSize: 12.5, color: color.inkFaint }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p style={{ fontFamily: font.mono, fontSize: 13.5, color: color.teal, margin: "6px 0 16px" }}>{a.issuer}</p>

      <p style={{ fontSize: 15.5, lineHeight: 1.7, color: color.inkSoft, margin: "0 0 18px" }}>{a.description}</p>

      <ul style={{ margin: "0 0 20px", padding: "0 0 0 20px", color: color.inkSoft, fontSize: 14.5, lineHeight: 1.7 }}>
        {a.highlights.map((h) => (
          <li key={h} style={{ marginBottom: 6 }}>
            {h}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {a.demo && (
          <a href={a.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{ ...buttonPrimary, padding: "9px 18px", fontSize: 14 }}>
            {a.demoLabel} &#8599;
          </a>
        )}
        
      </div>
    </article>
  );
}