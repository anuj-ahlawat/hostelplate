"use client";
import { useState } from "react";

type TabKey = "kettle" | "induction" | "nocook";

const PLAN_DATA: Record<TabKey, [string, string, number, number][]> = {
  kettle: [
    ["Mon", "Masala oats upma + peanuts", 20, 12],
    ["Tue", "Soya chunk bowl with curd", 32, 26],
    ["Wed", "Vegetable daliya + roasted chana", 24, 15],
    ["Thu", "Poha with peanuts + curd", 22, 14],
    ["Fri", "Soya chunk bowl with cucumber", 32, 26],
    ["Sat", "Oats + peanut butter + banana", 22, 14],
    ["Sun", "Instant dal khichdi mix + curd", 28, 16],
  ],
  induction: [
    ["Mon", "Soya chunk pulao", 38, 28],
    ["Tue", "Dal khichdi + curd", 30, 18],
    ["Wed", "Besan chilla + chutney", 16, 11],
    ["Thu", "Paneer bhurji + 2 roti", 55, 24],
    ["Fri", "Rajma rice (batch cooked)", 35, 20],
    ["Sat", "Chana masala + roti", 32, 19],
    ["Sun", "Veg pulao + raita", 34, 14],
  ],
  nocook: [
    ["Mon", "Sprout chaat + curd", 25, 16],
    ["Tue", "Peanut butter banana sandwich", 20, 14],
    ["Wed", "Roasted chana + curd bowl", 20, 13],
    ["Thu", "Soaked poha + peanuts + curd", 24, 13],
    ["Fri", "Sprout and cucumber salad wrap", 28, 14],
    ["Sat", "Muesli, milk and seeds", 30, 12],
    ["Sun", "Hummus-style chana sandwich", 26, 13],
  ],
};

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "kettle", label: "Kettle only", icon: "🫖" },
  { key: "induction", label: "Induction plate", icon: "🔥" },
  { key: "nocook", label: "No cooking", icon: "🥗" },
];

export default function MealPlanTable() {
  const [active, setActive] = useState<TabKey>("kettle");

  const rows = PLAN_DATA[active];
  const total = rows.reduce((s, r) => s + r[2], 0);

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Equipment filter">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={active === t.key}
            className="tab-btn"
            onClick={() => setActive(t.key)}
          >
            <span aria-hidden="true">{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      <div className="plan-table-scroll">
        <div className="plan-table-wrap">
          <table className="plan-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Main meal</th>
                <th>Approx. cost</th>
                <th>Protein</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([day, meal, cost, protein]) => (
                <tr key={day}>
                  <td>
                    <strong>{day}</strong>
                  </td>
                  <td>{meal}</td>
                  <td className="plan-cost">₹{cost}</td>
                  <td className="plan-protein">{protein} g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="week-total">
        Week total:{" "}
        <strong>₹{total} for main meals</strong>. Use the{" "}
        <a href="/budget-grocery-list-students-india">grocery list</a> to buy
        for the whole week in one trip.
      </p>
    </div>
  );
}
