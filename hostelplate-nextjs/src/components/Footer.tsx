import Link from "next/link";

const BLOG_LINKS = [
  { href: "/high-protein-meals-under-100-rupees", label: "High Protein Meals" },
  { href: "/no-cook-meals-for-hostel", label: "No-Cook Meals" },
  { href: "/kettle-recipes-for-hostel-students", label: "Kettle Recipes" },
  { href: "/budget-grocery-list-students-india", label: "Grocery List" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-copy">
            © 2026 HostelPlate · hostelplate.live
          </p>
          <p className="footer-copy" style={{ marginTop: "4px" }}>
            Prices are approximate and for guidance only.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {BLOG_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
