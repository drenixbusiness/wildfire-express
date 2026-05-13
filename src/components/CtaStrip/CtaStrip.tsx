import Link from "next/link";
import Reveal from "../Reveal/Reveal";

type CtaStripProps = {
  /** Hide the secondary phone CTA (e.g. on the contact page). */
  showCallRecruiting?: boolean;
  /** Less outer padding when stacked under compact copy (e.g. careers page). */
  compactVertical?: boolean;
};

export default function CtaStrip({
  showCallRecruiting = true,
  compactVertical = false,
}: CtaStripProps) {
  return (
    <section
      className={`wf-section tight${compactVertical ? " cta-strip-compact-vertical" : ""}`}
    >
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
              <Link href="/contact" className="btn btn-fire">
                <span>Start My Application</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
