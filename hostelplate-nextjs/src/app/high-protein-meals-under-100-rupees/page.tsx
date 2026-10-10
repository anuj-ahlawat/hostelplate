import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const BASE = "https://www.hostelplate.live";
const SLUG = "/high-protein-meals-under-100-rupees/";
const CANONICAL = `${BASE}${SLUG}`;

export const metadata: Metadata = {
  title: "High Protein Meals Under ₹100 for Hostel Students",
  description:
    "Seven high-protein vegetarian meals under 100 rupees each, with cost and protein per serving. Made with a kettle, induction plate or no cooking.",
  keywords: [
    "high protein vegetarian meals under 100 rupees",
    "cheap protein meals India",
    "soya chunks recipe hostel",
    "paneer bhurji budget",
    "rajma rice hostel",
    "high protein student meals India",
  ],
  authors: [{ name: "HostelPlate", url: BASE }],
  alternates: {
    canonical: CANONICAL,
    languages: { "en-IN": CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "High Protein Meals Under ₹100 for Hostel Students",
    description:
      "Seven high-protein vegetarian meals under 100 rupees each, with cost and protein per serving. Made with a kettle, induction plate or no cooking.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "High protein hostel meals under ₹100" }],
    publishedTime: "2026-10-09T00:00:00Z",
    modifiedTime: "2026-10-09T00:00:00Z",
    authors: [BASE],
    section: "Meal plans",
    tags: ["high protein", "vegetarian", "budget meals", "hostel", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Protein Meals Under ₹100 for Hostel Students | HostelPlate",
    description: "Seven high-protein vegetarian meals under 100 rupees each. Made with a kettle, induction plate or no cooking.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const MEALS = [
  { name: "Soya chunk pulao", equipment: "Induction", cost: 38, protein: 28 },
  { name: "Soya chunk curd bowl", equipment: "Kettle", cost: 32, protein: 26 },
  { name: "Paneer bhurji + 2 roti", equipment: "Induction", cost: 55, protein: 24 },
  { name: "Rajma rice", equipment: "Induction", cost: 35, protein: 20 },
  { name: "Chana masala + roti", equipment: "Induction", cost: 32, protein: 19 },
  { name: "Peanut butter banana sandwich", equipment: "No cook", cost: 20, protein: 14 },
  { name: "Sprout chaat + curd", equipment: "No cook", cost: 25, protein: 16 },
];

const FAQ_ITEMS = [
  {
    q: "Can I get enough protein as a vegetarian student on a budget?",
    a: "Yes. Soya chunks, dal, besan, chana, peanuts and curd can give 60 to 80 g of protein a day for roughly ₹100 to ₹150 in total.",
  },
  {
    q: "What is the cheapest source of protein in India?",
    a: "Soya chunks are usually the cheapest per gram of protein, followed by besan, dals and peanuts.",
  },
];

export default function HighProteinPage() {
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
                  name: "High Protein Meals Under 100 Rupees",
                  item: "https://www.hostelplate.live/high-protein-meals-under-100-rupees/",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "High Protein Meals Under 100 Rupees for Hostel Students",
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
          <span>High Protein Meals Under 100 Rupees</span>
        </nav>

        <div className="page-hero">
          <span className="tag">Meal plans</span>
          <h1>High Protein Meals Under ₹100 for Hostel Students</h1>
          <p>
            You can reach 60 to 80 g of protein a day in a hostel without
            spending more than ₹100 per meal. The trick is to buy the cheapest
            protein sources and build every meal around them.
          </p>
        </div>

        <div className="article-content">
          <h2>Seven meals, with cost and protein</h2>
          <div className="plan-table-scroll" style={{ marginBottom: "32px" }}>
            <div className="plan-table-wrap">
              <table className="plan-table">
                <thead>
                  <tr>
                    <th>Meal</th>
                    <th>Equipment</th>
                    <th>Approx. cost</th>
                    <th>Protein</th>
                  </tr>
                </thead>
                <tbody>
                  {MEALS.map((m) => (
                    <tr key={m.name}>
                      <td>{m.name}</td>
                      <td>
                        <span className="tag" style={{ marginBottom: 0 }}>
                          {m.equipment}
                        </span>
                      </td>
                      <td className="plan-cost">₹{m.cost}</td>
                      <td className="plan-protein">{m.protein} g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2>Cheapest protein per rupee</h2>
          <ol>
            <li>
              <strong>Soya chunks:</strong> about 50 g protein per 100 g dry,
              the best value by far.
            </li>
            <li>
              <strong>Besan and dals:</strong> cheap, filling and easy to batch
              cook.
            </li>
            <li>
              <strong>Roasted chana and peanuts:</strong> need no cooking and
              last for days.
            </li>
            <li>
              <strong>Curd:</strong> an easy protein add-on to any meal.
            </li>
            <li>
              <strong>Paneer:</strong> good but costlier, so use it once or
              twice a week.
            </li>
          </ol>

          <h2>How to keep a meal under ₹100</h2>
          <ul>
            <li>Buy staples in bulk instead of by the day.</li>
            <li>Cook a base once (rice, dal or soya) and change the toppings.</li>
            <li>Use seasonal vegetables from the local sabzi vendor.</li>
            <li>
              Skip packaged protein bars and powders until the staples are
              covered.
            </li>
          </ul>

          <h2>Common questions</h2>
          <FAQAccordion items={FAQ_ITEMS} />

          <div className="related-section">
            <h2>More from HostelPlate</h2>
            <div className="related-links">
              <Link className="related-link" href="/no-cook-meals-for-hostel">
                No-Cook Meals for Hostel
              </Link>
              <Link className="related-link" href="/kettle-recipes-for-hostel-students">
                Kettle Recipes for Hostel Students
              </Link>
              <Link className="related-link" href="/budget-grocery-list-students-india">
                Budget Grocery List for Students
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
