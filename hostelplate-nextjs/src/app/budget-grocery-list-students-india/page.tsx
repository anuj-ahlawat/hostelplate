import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const BASE = "https://www.hostelplate.live";
const SLUG = "/budget-grocery-list-students-india/";
const CANONICAL = `${BASE}${SLUG}`;

export const metadata: Metadata = {
  title: "Budget Grocery List for Students in India (About ₹860)",
  description:
    "A weekly budget grocery list for hostel and PG students in India with approximate rupee prices. Covers breakfast, lunch and snacks.",
  keywords: [
    "budget grocery list students India",
    "hostel grocery shopping",
    "cheap groceries India",
    "weekly grocery list hostel",
    "student grocery list under 1000 rupees",
    "soya chunks bulk buy India",
  ],
  authors: [{ name: "HostelPlate", url: BASE }],
  alternates: {
    canonical: CANONICAL,
    languages: { "en-IN": CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Budget Grocery List for Students in India (About ₹860) | HostelPlate",
    description:
      "A weekly budget grocery list for hostel and PG students in India with approximate rupee prices. Covers breakfast, lunch and snacks.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Budget grocery list for hostel students India" }],
    publishedTime: "2026-10-09T00:00:00Z",
    modifiedTime: "2026-10-09T00:00:00Z",
    authors: [BASE],
    section: "Groceries",
    tags: ["grocery list", "budget", "India", "hostel", "weekly shopping"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Grocery List for Students in India | HostelPlate",
    description: "Weekly grocery list for hostel students. ~₹860 for protein-rich breakfasts, lunches and snacks.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const STAPLES = [
  { item: "Oats", qty: "1 kg", price: 110 },
  { item: "Soya chunks", qty: "500 g", price: 80 },
  { item: "Peanuts", qty: "500 g", price: 90 },
  { item: "Roasted chana", qty: "500 g", price: 70 },
  { item: "Whole moong", qty: "500 g", price: 70 },
  { item: "Poha", qty: "500 g", price: 40 },
  { item: "Besan", qty: "500 g", price: 55 },
  { item: "Toor or moong dal", qty: "500 g", price: 65 },
  { item: "Peanut butter", qty: "340 g", price: 120 },
  { item: "Bananas", qty: "1 dozen", price: 60 },
];

const staplesTotal = STAPLES.reduce((s, r) => s + r.price, 0);

const FAQ_ITEMS = [
  {
    q: "How much does a weekly grocery list for a student cost in India?",
    a: "A basic high-protein vegetarian list costs roughly ₹800 to ₹900 for the first week, including staples and fresh items. Later weeks cost less because staples last.",
  },
  {
    q: "What groceries should a hostel student buy?",
    a: "Oats, soya chunks, peanuts, roasted chana, moong, poha, besan, dal, peanut butter, bananas, curd and basic vegetables.",
  },
];

export default function GroceryListPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hostelplate.live/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Budget Grocery List for Students in India",
                  item: "https://www.hostelplate.live/budget-grocery-list-students-india/",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Budget Grocery List for Students in India",
              description: metadata.description,
              inLanguage: "en-IN",
              datePublished: "2026-10-09",
              dateModified: "2026-10-09",
              image: "https://www.hostelplate.live/og-image.png",
              author: { "@type": "Organization", name: "HostelPlate" },
              publisher: { "@id": "https://www.hostelplate.live/#org" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />

      <div className="wrap page-wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <span>Budget Grocery List for Students in India</span>
        </nav>

        <div className="page-hero">
          <span className="tag">Groceries</span>
          <h1>Budget Grocery List for Students in India</h1>
          <p>
            This starter list covers high-protein breakfasts, lunches and
            snacks for a hostel student. Prices are approximate and change by
            city, so treat the total as a guide.
          </p>
        </div>

        <div className="article-content">
          <h2>Staples (last 1 to 2 weeks)</h2>
          <div className="plan-table-scroll" style={{ marginBottom: "32px" }}>
            <div className="plan-table-wrap">
              <table className="plan-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Approx. price</th>
                  </tr>
                </thead>
                <tbody>
                  {STAPLES.map((s) => (
                    <tr key={s.item}>
                      <td>{s.item}</td>
                      <td className="muted">{s.qty}</td>
                      <td className="plan-cost">₹{s.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}>
                      <strong>Staples total</strong>
                    </td>
                    <td className="plan-cost">
                      <strong>₹{staplesTotal}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <h2>Fresh items (about ₹100 a week)</h2>
          <p>
            Curd, onion, tomato, cucumber, lemon and one seasonal vegetable.
            Buy these from a local vendor twice a week.
          </p>

          <h2>Money-saving tips</h2>
          <ul>
            <li>
              Most staples last more than a week, so your second week costs much
              less.
            </li>
            <li>Split bulk packs with a roommate.</li>
            <li>
              Buy peanuts and chana loose from a local shop instead of branded
              packs.
            </li>
          </ul>

          <h2>Common questions</h2>
          <FAQAccordion items={FAQ_ITEMS} />

          <div className="related-section">
            <h2>More from HostelPlate</h2>
            <div className="related-links">
              <Link className="related-link" href="/high-protein-meals-under-100-rupees">
                High Protein Meals Under ₹100
              </Link>
              <Link className="related-link" href="/no-cook-meals-for-hostel">
                No-Cook Meals for Hostel
              </Link>
              <Link className="related-link" href="/kettle-recipes-for-hostel-students">
                Kettle Recipes for Hostel Students
              </Link>
            </div>
          </div>

          <div className="disclaimer">
            Prices and protein values are approximate and vary by city, brand
            and portion.
          </div>
        </div>
      </div>
    </>
  );
}
