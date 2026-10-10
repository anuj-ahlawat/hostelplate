"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <p className="form-success" role="status">
      ✅ Thanks! Your message is noted. This demo form does not send email yet.
    </p>
  ) : (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="form-label">
        Name
        <input
          className="form-input"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
        />
      </label>
      <label className="form-label">
        Email
        <input
          className="form-input"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>
      <label className="form-label">
        Message
        <textarea
          className="form-input"
          name="message"
          required
          rows={4}
          placeholder="Suggest a recipe, report a wrong price, or ask about collaboration…"
          style={{ resize: "vertical" }}
        />
      </label>
      <button className="form-submit" type="submit">
        Send message →
      </button>
    </form>
  );
}
