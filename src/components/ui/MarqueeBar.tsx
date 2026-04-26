"use client";

const items = [
  "DIGITAL MARKETING",
  "WEB DEVELOPMENT",
  "BRAND STRATEGY",
  "SEO & GROWTH",
  "MOBILE APPS",
  "UI/UX DESIGN",
  "SOCIAL MEDIA",
  "META ADS",
  "REACT DEVELOPMENT",
];

export default function MarqueeBar() {
  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center gap-6 whitespace-nowrap">
        <span className="font-poppins font-[900] text-[1.2rem] tracking-[0.15em] text-[var(--muted)]">
          {item}
        </span>
        <span
          className="inline-block w-[5px] h-[5px] rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </span>
    ));

  return (
    <div
      className="w-full overflow-hidden mt-6"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(165,106,189,0.02)",
      }}
    >
      <div className="flex items-center h-14 gap-6 animate-marquee">
        <div className="flex items-center gap-6 shrink-0">{renderItems()}</div>
        <div className="flex items-center gap-6 shrink-0">{renderItems()}</div>
      </div>
    </div>
  );
}
