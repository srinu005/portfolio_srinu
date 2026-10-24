import { color, font, container, tag, tagTeal, sectionLabel } from "../theme";
import { skills, currentlyLearning } from "../data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "72px 0", borderTop: `1px solid ${color.line}`, background: color.bluewash }}>
      <div style={{ ...container, margin: "0 auto" }}>
        <span style={sectionLabel}>02 / skills</span>
        <h2
          style={{
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: "clamp(26px, 3.6vw, 36px)",
            letterSpacing: "-0.015em",
            margin: "0 0 36px",
            color: color.ink,
          }}
        >
          Tools I work with.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h2
                style={{
                  fontFamily: font.mono,
                  fontSize: 13,
                  fontWeight: 500,
                  color: color.black,
                  margin: "0 0 12px",
                  letterSpacing: "0.02em",
                }}
              >
                {group}
              </h2>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {items.map((s) => (
                  <span key={s} style={tag}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            padding: "16px 20px",
            background: color.bgCard,
            border: `1px dashed ${color.line}`,
            borderRadius: 4,
            display: "flex",
            gap: 14,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: font.mono, fontSize: 13, color: color.inkFaint }}>currently learning</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {currentlyLearning.map((s) => (
              <span key={s} style={tagTeal}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}