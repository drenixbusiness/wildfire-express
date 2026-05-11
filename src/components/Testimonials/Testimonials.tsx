import Reveal from "../Reveal/Reveal";

const ITEMS = [
  {
    quote:
      "I was running for a mega-fleet that treated me like a number. Switched to Wild Fire eight months ago. Same lanes, same hours, $1,800 more per week.",
    initials: "MC",
    name: "Marcus Calhoun",
    role: "Owner Operator · Texas",
  },
  {
    quote:
      "What sold me was the dispatch. Real people, day or night. When my trailer blew a tire outside Knoxville at 3 a.m., they had a fix on the way before I finished filing the report.",
    initials: "DR",
    name: "Devontae Reyes",
    role: "Company Driver · Georgia",
  },
  {
    quote:
      "Settlement statements are clean, every Friday like clockwork. After fifteen years in this industry, I can finally read my paycheck without a calculator.",
    initials: "AK",
    name: "Aziz Khasanov",
    role: "Lease Partner · Illinois",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="wf-section">
      <div className="wf-container">
        <Reveal>
          <div className="section-head">
            <h2>
              What our
              <br />
              <span className="it it--muted">drivers say.</span>
            </h2>
            <p className="head-text">
              We don&apos;t pay for reviews and we don&apos;t script them.
              Here&apos;s what some of the people running with us have shared, in
              their own words.
            </p>
          </div>
        </Reveal>

        <div className="testimonials">
          {ITEMS.map((t) => (
            <Reveal key={t.initials}>
              <div className="test">
                <div className="stars" aria-hidden>
                  ★★★★★
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="who">
                  <div className="av">{t.initials}</div>
                  <div>
                    <div className="nm">{t.name}</div>
                    <div className="rl">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
