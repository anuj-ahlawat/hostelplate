"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/#plans", label: "Meal plans" },
  { href: "/#recipes", label: "No-cook & kettle" },
  { href: "/#gear", label: "Kitchen gear" },
  { href: "/#blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      setIsDark(saved === "dark");
    } else {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mq.matches);
      const handler = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
          setIsDark(e.matches);
        }
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="HostelPlate home">
          <span className="logo-dot" aria-hidden="true" />
          <span className="logo-text">
            Hostel<span className="logo-accent">Plate</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href="/#plans" className="nav-cta">
            <span>Weekly Plan</span>
          </Link>

          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? (isDark ? "☀️" : "🌙") : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
