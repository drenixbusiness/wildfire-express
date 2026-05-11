"use client";

import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="form-card">
      <h3>Send message</h3>
      <p className="form-sub">
        This form is for general inquiries. Drivers applying for a seat should still
        use the{" "}
        <Link href="/careers" style={{ color: "var(--fire-2)", fontWeight: 700 }}>
          careers flow
        </Link>{" "}
        so recruiting can prioritize your file.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-row">
          <div className="field">
            <label htmlFor="c-name">Full name</label>
            <input id="c-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="c-phone">Phone</label>
            <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="c-topic">Topic</label>
            <select id="c-topic" name="topic" defaultValue="general">
              <option value="general">General inquiry</option>
              <option value="shipper">Shipper / broker</option>
              <option value="driver">Driver recruiting</option>
              <option value="media">Media / partnership</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="field full">
            <label htmlFor="c-msg">How can we help?</label>
            <textarea id="c-msg" name="message" rows={5} required />
          </div>
        </div>
        <button type="submit" className="btn btn-fire">
          <span>Submit</span>
          <span className="arrow">→</span>
        </button>
      </form>
    </div>
  );
}
