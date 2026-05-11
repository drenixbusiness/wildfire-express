import Link from "next/link";
import Reveal from "../Reveal/Reveal";

export default function CtaStrip() {
  return (
    <section className="wf-section tight">
      <div className="wf-container">
        <Reveal>
          <div className="cta-strip">
            <div>
              <div className="eyebrow on-dark" style={{ marginBottom: 16 }}>
                Ready when you are
              </div>
              <h2>
                Apply once.
                <br />
                <span className="it">Run for years.</span>
              </h2>
              <p className="cta-lead">
                The application takes 90 seconds. A real recruiter calls you back
                inside 15 minutes during business hours.
              </p>
            </div>
            <div className="cta-strip-actions">
              <Link href="/careers" className="btn btn-fire">
                <span>Start My Application</span>
                <span className="arrow">→</span>
              </Link>
              <a href="tel:+10000000000" className="btn btn-ghost-light">
                Call Recruiting
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
