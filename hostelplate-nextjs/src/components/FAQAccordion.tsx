"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details
          key={i}
          className="faq-item"
          open={openIdx === i}
          onToggle={(e) => {
            const el = e.currentTarget as HTMLDetailsElement;
            if (el.open) {
              setOpenIdx(i);
            } else if (openIdx === i) {
              setOpenIdx(null);
            }
          }}
        >
          <summary className="faq-summary">
            {item.q}
            <span className="faq-arrow" aria-hidden="true">+</span>
          </summary>
          <div className="faq-body">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
