import Reveal from "../Reveal/Reveal";

const ITEMS = [
  {
    quote:
      "Honestly I was skeptical after getting burned by two carriers before. First few weeks with Wildfire I kept waiting for the catch. Hasn't come yet. Miles are consistent, home time is what they told me, and nobody's playing games with the fuel surcharge.",
    initials: "MC",
    name: "Marcus Calhoun",
    role: "Owner Operator · Texas",
  },
  {
    quote:
      "Had a blowout on I-40 around midnight. Called dispatch, guy picked up on the second ring. No attitude, just 'we got you.' Had a mobile tire service there in under an hour. That's not normal in this industry — I've sat on the side of the road for four hours with other carriers.",
    initials: "DR",
    name: "Devontae Reyes",
    role: "Company Driver · Georgia",
  },
  {
    quote:
      "The pay stubs actually make sense. I know that sounds like a low bar but after 12 years of deciphering mystery deductions every week, I can't overstate how much that matters. I called in once about a discrepancy and it was fixed by end of day.",
    initials: "AK",
    name: "Aziz Khasanov",
    role: "Lease Partner · Illinois",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="wf-section testimonials-band">
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
                    <div className="nm text-black">{t.name}</div>
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
