import type { Metadata } from "next";
import Link from "next/link";
import MealPlanTable from "@/components/MealPlanTable";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Hostel Meal Prep Ideas: Budget Recipes and Plans for Students",
  description:
    "Cheap, high-protein hostel meal prep ideas for Indian students. Weekly plans, kettle, induction and no-cook recipes with rupee prices and protein per meal.",
  alternates: { canonical: "https://www.hostelplate.live/" },
  openGraph: {
    url: "https://www.hostelplate.live/",
    images: [{ url: "/og-image.png" }],
  },
};

const FAQ_ITEMS = [
  {
    q: "What can I cook in a hostel room?",
    a: "With just an electric kettle you can make oats, instant daliya, soaked soya chunks, poha and noodles. With an induction plate you can add pulao, khichdi, chilla and sabzi. With nothing, sprouts, curd bowls and sandwiches work.",
  },
  {
    q: "How do I meal prep on a budget?",
    a: "Buy staples in bulk (oats, rice, dal, soya chunks, peanuts, chana), cook one or two bases on Sunday, and vary them with fresh toppings through the week.",
  },
  {
    q: "What are good high-protein vegetarian meals?",
    a: "Soya chunks, paneer, dal, chana, moong sprouts, curd, besan and peanut butter give the most protein per rupee.",
  },
  {
    q: "How long can meal-prepped food last without a fridge?",
    a: "Cooked rice and dal are best eaten within 4 to 6 hours in hot weather. Dry snacks and sprouts kept cool and rinsed can last longer. When in doubt, throw it out.",
  },
];

const RECIPE_CARDS = [
  {
    tag: "No cook · 5 min",
    emoji: "🥗",
    title: "Sprout chaat",
    desc: "Soaked moong, onion, tomato, lemon, chaat masala. Soak in a bottle overnight.",
    meta: "₹15 · 12 g protein",
  },
  {
    tag: "Kettle · 10 min",
    emoji: "🫖",
    title: "Masala oats upma",
    desc: "Boil water in the kettle, pour over oats and frozen peas, add spices, cover for 4 minutes.",
    meta: "₹18 · 9 g protein",
  },
  {
    tag: "Kettle · 15 min",
    emoji: "💪",
    title: "Soya chunk bowl",
    desc: "Soak soya chunks in kettle water, squeeze, toss with curd, cucumber and jeera.",
    meta: "₹25 · 26 g protein",
  },
  {
    tag: "No cook · 3 min",
    emoji: "🥜",
    title: "Peanut butter sandwich, upgraded",
    desc: "Whole wheat bread, peanut butter, banana slices and chia or flax seeds.",
    meta: "₹20 · 14 g protein",
  },
  {
    tag: "Induction · 20 min",
    emoji: "🫓",
    title: "Egg-free besan chilla",
    desc: "Besan, onion, spinach and ajwain on one pan. Make a batch and eat it twice.",
    meta: "₹16 · 11 g protein",
  },
  {
    tag: "Better than Maggi",
    emoji: "🍜",
    title: "Healthy Maggi alternatives",
    desc: "Vegetable daliya, poha with peanuts or millet noodles. Same effort, better fuel.",
    meta: "₹15–25 · 8–12 g protein",
  },
];

const GEAR_CARDS = [
  {
    emoji: "🫖",
    badge: "Best first buy",
    title: "Electric kettle",
    desc: "Look for 1 to 1.5 litre capacity, stainless steel body and auto shut-off.",
  },
  {
    emoji: "🔥",
    badge: "Unlocks hot meals",
    title: "Induction cooktop",
    desc: "Choose 1200 to 2000 W with push buttons and an auto-off timer. You need flat-bottom induction-ready pans.",
  },
  {
    emoji: "📦",
    badge: "Essential",
    title: "Meal prep containers",
    desc: "Leak-proof steel or glass boxes with a tight lid. Keep sprouts and salads fresh through a day without a fridge.",
  },
];

const BLOG_POSTS = [
  {
    tag: "Meal plans",
    href: "/high-protein-meals-under-100-rupees",
    title: "High-protein meals under 100 rupees",
    desc: "Seven full days with the cost and protein of every meal.",
  },
  {
    tag: "Groceries",
    href: "/budget-grocery-list-students-india",
    title: "Budget grocery list for students in India",
    desc: "A starter shop of about ₹860 that covers breakfast, lunch and snacks.",
  },
  {
    tag: "No cook",
    href: "/no-cook-meals-for-hostel",
    title: "No-cook meals for hostel",
    desc: "Nine-minute meals with zero cooking: sprouts, sandwiches and curd bowls.",
  },
  {
    tag: "Kettle",
    href: "/kettle-recipes-for-hostel-students",
    title: "Kettle recipes for hostel students",
    desc: "Five meals you can make with just an electric kettle.",
  },
];

const TEAM = [
  "Bhavuk Agrawal",
  "Anuj Ahlawat",
  "Divyansh Rathi",
  "Priyanshu Kumar",
  "Ayush Singh",
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero-section" id="top">
        <div className="wrap hero-grid">
          <div className="animate-fade-up">
            <p className="hero-label">
              <span>🍱</span> For Indian hostel students
            </p>
            <h1 className="hero-title">
              Hostel meal prep ideas: eat well for under ₹100 a meal
            </h1>
            <p className="hero-desc">
              Meal prep plans, no-cook meals and kettle or induction recipes for
              students with one socket, no fridge and a tight budget. Every
              recipe shows the cost in rupees and the protein per serving.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="#plans">
                See this week&apos;s plan →
              </Link>
              <Link className="btn-outline" href="#recipes">
                Browse recipes
              </Link>
            </div>
          </div>

          {/* Receipt card */}
          <aside
            className="receipt-card animate-fade-up delay-2"
            aria-label="Sample day of meals"
          >
            <div className="receipt-header">
              <h2>Tuesday, hostel edition</h2>
              <span className="muted" style={{ fontSize: "0.88rem" }}>
                Kettle + induction, vegetarian
              </span>
            </div>
            <table className="receipt-table">
              <tbody>
                <tr>
                  <td>Oats + peanut butter + banana</td>
                  <td>₹22 · 14 g</td>
                </tr>
                <tr>
                  <td>Soya chunk pulao (induction)</td>
                  <td>₹38 · 28 g</td>
                </tr>
                <tr>
                  <td>Sprout chaat (no cook)</td>
                  <td>₹15 · 12 g</td>
                </tr>
                <tr>
                  <td>Curd + roasted chana</td>
                  <td>₹20 · 13 g</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Day total</td>
                  <td>₹95 · 67 g protein</td>
                </tr>
              </tfoot>
            </table>
            <p className="receipt-note">
              Approximate prices; they vary by city and shop.
            </p>
          </aside>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="wrap stats-grid">
          <div className="stat-item">
            <span className="stat-number">₹95</span>
            <span className="stat-label">Full day budget</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">67g</span>
            <span className="stat-label">Protein per day</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15min</span>
            <span className="stat-label">Max prep time</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Equipment tiers</span>
          </div>
        </div>
      </div>

      {/* ── Meal Plans ───────────────────────────────── */}
      <section className="section" id="plans">
        <div className="wrap">
          <div className="section-header">
            <h2>Weekly veg meal plan for students</h2>
            <p>
              Pick the equipment you actually have. The plan, grocery list and
              cost change with it.
            </p>
          </div>
          <MealPlanTable />
        </div>
      </section>

      {/* ── Recipes ──────────────────────────────────── */}
      <section className="section-band" id="recipes">
        <div className="wrap">
          <div className="section-header">
            <h2>No-cook and kettle recipes</h2>
            <p>Ready in 15 minutes or less, with equipment you can fit in a bag.</p>
          </div>
          <div className="card-grid">
            {RECIPE_CARDS.map((r) => (
              <div className="card" key={r.title}>
                <div className="card-icon">{r.emoji}</div>
                <span className="tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <p className="muted" style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>
                  {r.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kitchen Gear ─────────────────────────────── */}
      <section className="section" id="gear">
        <div className="wrap">
          <div className="section-header">
            <h2>Hostel kitchen gear</h2>
            <p>
              Buy only what removes a real problem. Check your hostel&apos;s
              appliance rules first.
            </p>
          </div>
          <div className="card-grid">
            {GEAR_CARDS.map((g) => (
              <div className="gear-card" key={g.title}>
                <div className="card-icon">{g.emoji}</div>
                <div className="gear-badge">✓ {g.badge}</div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
          <p
            className="muted"
            style={{ marginTop: "20px", fontSize: "0.88rem" }}
          >
            Some links on HostelPlate may be affiliate links. They never change
            our recommendations.
          </p>
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────── */}
      <section className="section-band" id="blog">
        <div className="wrap">
          <div className="section-header">
            <h2>Latest guides</h2>
          </div>
          <div className="card-grid">
            {BLOG_POSTS.map((p) => (
              <div className="card" key={p.href}>
                <span className="tag">{p.tag}</span>
                <h3>
                  <Link href={p.href}>{p.title}</Link>
                </h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: "24px",
              color: "rgba(242,245,243,0.7)",
              fontSize: "0.95rem",
            }}
          >
            More guides are on the way. Tell us what you want next through the
            contact form.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-header">
            <h2>Common questions</h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section className="section-band" id="about">
        <div className="wrap">
          <div className="section-header">
            <h2>About HostelPlate</h2>
          </div>
          <div className="about-card" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-lg)", padding: "40px", color: "var(--green-ink)" }}>
            <p style={{ fontSize: "1.05rem", maxWidth: "68ch", color: "rgba(242,245,243,0.85)" }}>
              HostelPlate teaches students in hostels, PGs and shared flats how
              to eat cheap, high-protein food with almost no kitchen. Most
              recipe sites assume a full kitchen and a family budget. We start
              from a kettle, an induction plate or nothing at all.
            </p>
            <p style={{ color: "rgba(242,245,243,0.6)", marginBottom: "12px", marginTop: "20px", fontSize: "0.9rem" }}>
              Built as a Semester Mini-Project by:
            </p>
            <div className="team-chips">
              {TEAM.map((name) => (
                <span
                  key={name}
                  className="team-chip"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "rgba(242,245,243,0.8)",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="wrap">
          <div className="section-header">
            <h2>Contact</h2>
            <p>
              Suggest a recipe, report a wrong price or ask about collaboration.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
