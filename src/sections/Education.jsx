import { color, font, container, shadow, sectionLabel } from "../theme";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" style={{ padding: "72px 0", borderTop: `1px solid ${color.line}`, background: color.blueWash }}>
      <div style={{ ...container, margin: "0 auto" }}>
        <span style={sectionLabel}>04 / education</span>
        <h2
          style={{
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: "clamp(26px, 3.6vw, 36px)",
            letterSpacing: "-0.015em",
            margin: "0 0 32px",
            color: color.ink,
          }}
        >
          Academic background.
        </h2>

        <div
          style={{
            background: color.bgCard,
            border: `1px solid ${color.line}`,
            borderRadius: 8,
            boxShadow: shadow.card,
            padding: "28px 32px",
            display: "flex",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1 1 320px" }}>
            <h3 style={{ fontFamily: font.display, fontWeight: 600, fontSize: 20, margin: "0 0 6px", color: color.ink }}>
              {education.degree}
            </h3>
            <p style={{ margin: "0 0 4px", color: color.inkSoft, fontSize: 15 }}>{education.school}</p>
            <p style={{ margin: 0, color: color.inkFaint, fontFamily: font.mono, fontSize: 13 }}>
              Graduated {education.graduated}
            </p>
          </div>

          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            <Stat label="CGPA" value={education.cgpa} />
            <Stat label="GATE CS 2026 rank" value="27,094" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 30, color: color.blue, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: font.mono, fontSize: 12, color: color.inkFaint, marginTop: 6 }}>{label}</div>
    </div>
  );
}