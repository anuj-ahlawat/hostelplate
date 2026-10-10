import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const BASE = "https://www.hostelplate.live";
const SLUG = "/kettle-recipes-for-hostel-students/";
const CANONICAL = `${BASE}${SLUG}`;

export const metadata: Metadata = {
  title: "Kettle Recipes for Hostel Students: 5 Meals With Just a Kettle",
  description:
    "Five easy kettle recipes for hostel rooms: masala oats, soya chunk bowl, poha, daliya and noodles. Cost and protein included.",
  keywords: [
    "kettle recipes hostel",
    "electric kettle cooking hostel",
    "masala oats upma kettle",
    "soya chunk kettle recipe",
    "hostel cooking electric kettle",
    "kettle meals for students",
  ],
  authors: [{ name: "HostelPlate", url: BASE }],
  alternates: {
    canonical: CANONICAL,
    languages: { "en-IN": CANONICAL, "x-default": CANONICAL },
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Kettle Recipes for Hostel Students: 5 Meals With Just a Kettle | HostelPlate",
    description:
      "Five easy kettle recipes for hostel rooms: masala oats, soya chunk bowl, poha, daliya and noodles. Cost and protein included.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kettle recipes for hostel students" }],
    publishedTime: "2026-10-09T00:00:00Z",
    modifiedTime: "2026-10-09T00:00:00Z",
    authors: [BASE],
    section: "Kettle",
    tags: ["kettle", "hostel recipes", "masala oats", "soya chunks", "budget cooking"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kettle Recipes for Hostel Students | HostelPlate",
    description: "5 easy kettle recipes for hostel rooms: masala oats, soya chunks, poha, daliya.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const RECIPES = [
  { name: "Masala oats upma", time: "10 min", cost: 18, protein: 9 },
  { name: "Soya chunk bowl", time: "15 min", cost: 25, protein: 26 },
  { name: "Vegetable daliya", time: "15 min", cost: 20, protein: 10 },
  { name: "Poha with peanuts", time: "10 min", cost: 15, protein: 8 },
  { name: "Instant dal khichdi mix", time: "12 min", cost: 28, protein: 16 },
];

const FAQ_ITEMS = [
  {
    q: "Can I cook food in an electric kettle?",
    a: "It is safer to use the kettle only for boiling water and then pour it over oats, soya chunks, poha or daliya in a bowl. Do not cook in it unless the manufacturer allows it.",
  },
  {
    q: "What is the best kettle for a hostel room?",
    a: "Choose a 1 to 1.5 litre stainless steel kettle with auto shut-off.",
  },
];

export default function KettleRecipesPage() {
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
                  name: "Kettle Recipes for Hostel Students",
                  item: "https://www.hostelplate.live/kettle-recipes-for-hostel-students/",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Kettle Recipes for Hostel Students",
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
              "@type": "Recipe",
              name: "Masala oats upma (kettle recipe)",
              description: "A 10-minute oats upma for hostel rooms made with hot water from an electric kettle.",
              totalTime: "PT10M",
              recipeYield: "1 serving",
              recipeCategory: "Breakfast",
              recipeCuisine: "Indian",
              recipeIngredient: [
                "1/2 cup oats",
                "1 handful frozen peas",
                "1 cup hot water",
                "salt, turmeric and chilli powder",
                "1 spoon roasted peanuts",
                "lemon juice",
              ],
              recipeInstructions: [
                { "@type": "HowToStep", text: "Put oats, peas and spices in a bowl." },
                { "@type": "HowToStep", text: "Pour 1 cup of boiling water over them." },
                { "@type": "HowToStep", text: "Cover for 4 minutes." },
                { "@type": "HowToStep", text: "Stir in lemon juice and peanuts." },
              ],
              nutrition: { "@type": "NutritionInformation", proteinContent: "9 g" },
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
          <span>Kettle Recipes for Hostel Students</span>
        </nav>

        <div className="page-hero">
          <span className="tag">Kettle</span>
          <h1>Kettle Recipes for Hostel Students</h1>
          <p>
            An electric kettle is the best first buy for a hostel room. These
            five meals use only hot water from the kettle, a bowl and a plate to
            cover it.
          </p>
        </div>

        <div className="article-content">
          <h2>Five kettle recipes</h2>
          <div className="plan-table-scroll" style={{ marginBottom: "32px" }}>
            <div className="plan-table-wrap">
              <table className="plan-table">
                <thead>
                  <tr>
                    <th>Recipe</th>
                    <th>Time</th>
                    <th>Approx. cost</th>
                    <th>Protein</th>
                  </tr>
                </thead>
                <tbody>
                  {RECIPES.map((r) => (
                    <tr key={r.name}>
                      <td>{r.name}</td>
                      <td className="muted">{r.time}</td>
                      <td className="plan-cost">₹{r.cost}</td>
                      <td className="plan-protein">{r.protein} g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2>Masala oats upma, step by step</h2>
          <ol>
            <li>
              Put ½ cup oats, a handful of frozen peas, a pinch of salt,
              turmeric and chilli powder in a bowl.
            </li>
            <li>Boil 1 cup of water in the kettle and pour it over the oats.</li>
            <li>Cover with a plate for 4 minutes.</li>
            <li>Stir, add lemon juice and a spoon of roasted peanuts.</li>
          </ol>

          <h2>Soya chunk bowl, step by step</h2>
          <ol>
            <li>Soak 40 g soya chunks in hot kettle water for 10 minutes.</li>
            <li>Squeeze out the water and rinse once.</li>
            <li>Mix with curd, chopped cucumber, roasted jeera and salt.</li>
          </ol>

          <h2>Kettle safety</h2>
          <p>
            Never cook directly in the kettle unless the manual allows it. Use
            only the hot water for soaking and pouring. Check your hostel&apos;s
            rules on appliances before buying one.
          </p>

          <h2>Common questions</h2>
          <FAQAccordion items={FAQ_ITEMS} />

          <div className="related-section">
            <h2>More from HostelPlate</h2>
            <div className="related-links">
              <Link className="related-link" href="/no-cook-meals-for-hostel">
                No-Cook Meals for Hostel
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
