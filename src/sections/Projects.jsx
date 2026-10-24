import { color, font, container, tag, sectionLabel, buttonPrimary, buttonSecondary } from "../theme";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "72px 0", borderTop: `1px solid ${color.line}` }}>
      <div style={{ ...container, margin: "0 auto" }}>
        <span style={sectionLabel}>03 / projects</span>
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
          Things I've built and shipped.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  return (
    <article
      className="project-card"
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
          {p.name}
        </h3>
        <span style={{ fontFamily: font.mono, fontSize: 12.5, color: color.inkFaint }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p style={{ fontFamily: font.mono, fontSize: 13.5, color: color.teal, margin: "6px 0 16px" }}>{p.tagline}</p>

      <p style={{ fontSize: 15.5, lineHeight: 1.7, color: color.inkSoft, margin: "0 0 18px" }}>{p.description}</p>

      <ul style={{ margin: "0 0 20px", padding: "0 0 0 20px", color: color.inkSoft, fontSize: 14.5, lineHeight: 1.7 }}>
        {p.highlights.map((h) => (
          <li key={h} style={{ marginBottom: 6 }}>
            {h}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
        {p.tech.map((t) => (
          <span key={t} style={tag}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{ ...buttonPrimary, padding: "9px 18px", fontSize: 14 }}>
            {p.demoLabel} &#8599;
          </a>
        )}
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ ...buttonSecondary, padding: "9px 18px", fontSize: 14 }}
        >
          Source Code &#8599;
        </a>
      </div>
    </article>
  );
}