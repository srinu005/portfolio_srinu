// Design tokens. Light theme: Cloud Dancer (soft white) base, deep navy text,
// calm blue + teal accents. Every text/background pair below was checked
// against WCAG AA (>= 4.5:1) -- keep that in mind if you change a hex value.

export const color = {
  // Surfaces
  bg: "#F2F1ED",        // Cloud Dancer-style soft white (page)
  bgRaised: "#EEF3FB",  // light blue-grey (card header bars)
  bgCard: "#FFFFFF",    // white cards
  blueWash: "#EAF0FA",  // faint blue band for alternating sections

  // Lines
  line: "#DCE1EA",
  lineStrong: "#A9B8D1",

  // Text
  ink: "#14284B",       // deep navy
  inkSoft: "#44546A",
  inkFaint: "#5A687C",

  // Accents
  blue: "#2B5BBA",
  blueDark: "#1E4690",
  blueSoft: "#E6EEFB",
  blueLine: "#C6D6F3",
  teal: "#1B6F80",
  tealSoft: "#DDEFF1",
  tealLine: "#B7DADF",
};

export const font = {
  display: "'Space Grotesk', -apple-system, sans-serif",
  body: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
};

export const shadow = {
  card: "0 1px 2px rgba(20, 40, 75, 0.05), 0 10px 28px rgba(20, 40, 75, 0.06)",
};

export const container = {
  maxWidth: 1080,
  padding: "0 28px",
};

export const tag = {
  display: "inline-block",
  padding: "4px 11px",
  borderRadius: 4,
  fontFamily: font.mono,
  fontSize: 12.5,
  color: color.blueDark,
  background: color.blueSoft,
  border: `1px solid ${color.blueLine}`,
};

export const tagTeal = {
  ...tag,
  color: color.teal,
  background: color.tealSoft,
  border: `1px solid ${color.tealLine}`,
};

export const buttonPrimary = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "11px 22px",
  background: color.blue,
  color: "#FFFFFF",
  border: "1.5px solid transparent",
  borderRadius: 6,
  fontFamily: font.body,
  fontWeight: 600,
  fontSize: 15,
  textDecoration: "none",
  cursor: "pointer",
};

export const buttonSecondary = {
  ...buttonPrimary,
  background: "#FFFFFF",
  color: color.ink,
  border: `1.5px solid ${color.lineStrong}`,
};

export const sectionLabel = {
  fontFamily: font.mono,
  fontSize: 13,
  color: color.teal,
  letterSpacing: "0.04em",
  marginBottom: 10,
  display: "block",
};