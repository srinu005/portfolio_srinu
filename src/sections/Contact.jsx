import { color, font, container, sectionLabel, buttonPrimary, buttonSecondary } from "../theme";
import { profile } from "../data";

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "72px 0 56px", borderTop: `1px solid ${color.line}`, background: "linear-gradient(180deg, #F2F1ED 0%, #E3EBF8 100%)" }}>
      <div style={{ ...container, margin: "0 auto" }}>
        <span style={sectionLabel}>06 / contact</span>
        <h2
          style={{
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: "clamp(28px, 4.4vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 18px",
            color: color.ink,
            maxWidth: 640,
          }}
        >
          Open to AI/ML and full-stack engineering roles.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: color.inkSoft, maxWidth: 540, margin: "0 0 30px" }}>
          If you're hiring, or just want to talk about something I've built, the best way to reach me is email.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={`mailto:${profile.email}`} className="btn-primary" style={buttonPrimary}>
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary" style={buttonSecondary}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary" style={buttonSecondary}>
            GitHub
          </a>
        </div>

        <p style={{ marginTop: 64, fontFamily: font.mono, fontSize: 12.5, color: color.inkFaint }}>
          &copy; {CURRENT_YEAR} {profile.name} &middot; Hyderabad, India
        </p>
      </div>
    </section>
  );
}