import { color, font, container } from "../theme";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(242, 241, 237, 0.86)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${color.line}`,
      }}
    >
      <div
        style={{
          ...container,
          margin: "0 auto",
          height: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#top"
          style={{ fontFamily: font.mono, fontSize: 14, color: color.blue, textDecoration: "none", fontWeight: 500 }}
        >
          srinivasa<span style={{ color: color.inkFaint }}>.dev</span>
        </a>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{ color: color.inkSoft, textDecoration: "none", fontSize: 14, fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}