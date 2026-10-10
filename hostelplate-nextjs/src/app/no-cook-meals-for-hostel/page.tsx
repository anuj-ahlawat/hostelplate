import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const BASE = "https://www.hostelplate.live";
const SLUG = "/no-cook-meals-for-hostel/";
const CANONICAL = `${BASE}${SLUG}`;

export const metadata: Metadata = {
  title: "No Cook Meals for Hostel: 6 Easy Ideas Under ₹30",
  description:
    "Six no-cook hostel meals ready in 5 minutes: sprouts, curd bowls and sandwiches with cost and protein. No kettle or stove needed.",
  keywords: [
    "no cook meals hostel",
    "hostel food without cooking",
    "sprout chaat recipe",
    "no cook meals students India",
    "easy hostel meals",
    "quick meals hostel room",
  ],
  authors: [{ name: "HostelPlate", url: BASE }],
  alternates: {
    canonical: CANONICAL,
    languages: { "en-IN": CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "No Cook Meals for Hostel: 6 Easy Ideas Under ₹30 | HostelPlate",
    description:
      "Six no-cook hostel meals ready in 5 minutes: sprouts, curd bowls and sandwiches with cost and protein. No kettle or stove needed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "No-cook hostel meals for students" }],
    publishedTime: "2026-10-09T00:00:00Z",
    modifiedTime: "2026-10-09T00:00:00Z",
    authors: [BASE],
    section: "No cook",
    tags: ["no cook", "hostel meals", "sprouts", "budget", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Cook Meals for Hostel: 6 Easy Ideas Under ₹30 | HostelPlate",
    description: "Six no-cook hostel meals ready in 5 minutes. No kettle or stove needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const MEALS = [
  { name: "Sprout chaat", time: "5 min*", cost: 15, protein: 12 },
  { name: "Peanut butter banana sandwich", time: "3 min", cost: 20, protein: 14 },
  { name: "Curd and roasted chana bowl", time: "2 min", cost: 20, protein: 13 },
  { name: "Soaked poha with peanuts and curd", time: "8 min", cost: 24, protein: 13 },
  { name: "Muesli with milk and seeds", time: "2 min", cost: 30, protein: 12 },
  { name: "Chana and cucumber wrap", time: "5 min", cost: 28, protein: 14 },
];

const FAQ_ITEMS = [
  {
    q: "What can I eat in a hostel without cooking?",
    a: "Sprouts, curd bowls, sandwiches, soaked poha, muesli with milk, roasted chana and peanut chaat.",
  },
  {
    q: "How do I make sprouts without a kitchen?",
    a: "Soak moong overnight, drain it and keep it in a damp cloth or perforated box for 12 to 24 hours, rinsing twice a day.",
  },
];

export default function NoCookPage() {
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
                  name: "No-Cook Meals for Hostel Students",
                  item: "https://www.hostelplate.live/no-cook-meals-for-hostel/",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "No-Cook Meals for Hostel Students",
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
          <span>No-Cook Meals for Hostel Students</span>
        </nav>

        <div className="page-hero">
          <span className="tag">No cook</span>
          <h1>No-Cook Meals for Hostel Students</h1>
          <p>
            No kettle, no stove, no fridge? These meals need only a bowl, a
            spoon and a knife. Each one costs under ₹30 and takes less than 10
            minutes of effort.
          </p>
        </div>

        <div className="article-content">
          <h2>Six no-cook meals</h2>
          <div className="plan-table-scroll" style={{ marginBottom: "8px" }}>
            <div className="plan-table-wrap">
              <table className="plan-table">
                <thead>
                  <tr>
                    <th>Meal</th>
                    <th>Time</th>
                    <th>Approx. cost</th>
                    <th>Protein</th>
                  </tr>
                </thead>
                <tbody>
                  {MEALS.map((m) => (
                    <tr key={m.name}>
                      <td>{m.name}</td>
                      <td className="muted">{m.time}</td>
                      <td className="plan-cost">₹{m.cost}</td>
                      <td className="plan-protein">{m.protein} g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="muted" style={{ fontSize: "0.85rem", marginBottom: "32px" }}>
            *plus overnight soaking.
          </p>

          <h2>How to make sprouts in a hostel room</h2>
          <ol>
            <li>Soak 1 cup of moong in a bottle or box with water overnight.</li>
            <li>Drain the water in the morning and rinse well.</li>
            <li>
              Keep them covered in a damp cloth or a perforated box for 12 to
              24 hours, rinsing twice.
            </li>
            <li>Rinse again and eat when you see small tails.</li>
          </ol>

          <h2>Food safety without a fridge</h2>
          <p>
            Eat sprouts, curd and cut vegetables within a few hours in hot
            weather. Buy curd in small packs and finish them the same day. Dry
            snacks like roasted chana and peanuts keep for days in a closed jar.
          </p>

          <h2>Common questions</h2>
          <FAQAccordion items={FAQ_ITEMS} />

          <div className="related-section">
            <h2>More from HostelPlate</h2>
            <div className="related-links">
              <Link className="related-link" href="/kettle-recipes-for-hostel-students">
                Kettle Recipes for Hostel Students
              </Link>
              <Link className="related-link" href="/high-protein-meals-under-100-rupees">
                High Protein Meals Under ₹100
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
