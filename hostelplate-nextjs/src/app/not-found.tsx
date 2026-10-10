import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — 404",
  description: "This page doesn't exist. Find hostel meal plans, kettle recipes and budget grocery guides on HostelPlate.",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "🏠 Home" },
  { href: "/high-protein-meals-under-100-rupees", label: "💪 High Protein Meals" },
  { href: "/no-cook-meals-for-hostel", label: "🥗 No-Cook Meals" },
  { href: "/kettle-recipes-for-hostel-students", label: "🫖 Kettle Recipes" },
  { href: "/budget-grocery-list-students-india", label: "🛒 Grocery List" },
];

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "clamp(5rem, 15vw, 10rem)",
          lineHeight: 1,
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          color: "var(--gold)",
          margin: "0 0 8px",
          letterSpacing: "-0.04em",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontFamily: "var(--font-display)",
          margin: "0 0 12px",
        }}
      >
        Page not found
      </h1>
      <p
        className="muted"
        style={{ maxWidth: "44ch", marginBottom: "40px", fontSize: "1.05rem" }}
      >
        This page doesn&apos;t exist. Maybe it was moved, or the link is
        wrong. Here are some pages that definitely do exist:
      </p>
      <nav
        aria-label="Suggested pages"
        style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}
      >
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="related-link">
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
