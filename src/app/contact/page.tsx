import Link from "next/link";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactHashScroll from "../../components/ContactHashScroll/ContactHashScroll";
import CtaStrip from "../../components/CtaStrip/CtaStrip";
import PageHero from "../../components/PageHero/PageHero";
import { PhoneStroke } from "../../components/icons/WildfireIcons";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHashScroll />
      <PageHero
        crumbs={
          <>
            <Link href="/">Home</Link>
            {" · "}
            <span>Contact</span>
          </>
        }
        title={
          <>
            Talk to a <span className="it">real</span> human.
          </>
        }
        lead="Recruiting, dispatch, and operations each have a direct line. Tell us what you need — capacity for a lane, a question about settlements, or a driver ready to roll — and we will route you to the right desk."
      />

      <section className="wf-section contact-main">
        <div className="wf-container two-col-page two-col-page--contact">
          <ContactForm />

          <div className="contact-sidebar">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="ico">
                  <PhoneStroke />
                </div>
                <h4>Phone</h4>
                <a className="v" href="tel:+10000000000">
                  +1 (000) 000-0000
                </a>
                <p className="split-body" style={{ marginTop: 12, fontSize: 14 }}>
                  Recruiting weekdays 7a–7p CT · Dispatch 24/7
                </p>
              </div>
              <div className="contact-card">
                <div className="ico">
                  <IconMail />
                </div>
                <h4>Email</h4>
                <a className="v" href="mailto:hr@wildfireexpress.com" style={{ fontSize: 18 }}>
                  hr@wildfireexpress.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip showCallRecruiting={false} compactVertical />

      <section
        id="contact-bottom"
        className="contact-bottom-band"
        aria-labelledby="contact-bottom-heading"
      >
        <div className="wf-container">
          <h2
            id="contact-bottom-heading"
            className="display"
            style={{ fontSize: "clamp(32px,4vw,52px)", marginBottom: 16 }}
          >
            Yard &amp; mailing
          </h2>
          <p className="split-body" style={{ maxWidth: 640 }}>
            Headquarters and secure parking are located in the central U.S. with
            camera coverage, lighted lots, and wash bays reserved for Wildfire
            equipment. If you are visiting for orientation, your recruiter will send
            a pin and gate instructions before you arrive.
          </p>
          <ul style={{ marginTop: 24, paddingLeft: 20, color: "var(--ink-3)" }}>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--ink)" }}>Mailing / HQ:</strong> Wildfire
              Express LLC, Yard &amp; HQ — USA (full street on file after your visit is
              scheduled)
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong style={{ color: "var(--ink)" }}>After hours:</strong> Dispatch
              handles live load issues; recruiting voicemail is returned the next
              business morning.
            </li>
            <li>
              <strong style={{ color: "var(--ink)" }}>Payments:</strong> Accounting
              publishes settlement previews every Saturday for Friday direct deposit.
            </li>
          </ul>
          <p className="split-body" style={{ marginTop: 28 }}>
            Prefer a callback? Leave your best window in the form above — we will
            match you with the same specialist each time you call so you are never
            re-explaining your operation.
          </p>
        </div>
      </section>
    </>
  );
}
