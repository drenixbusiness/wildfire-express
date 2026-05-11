import Link from "next/link";
import Reveal from "../Reveal/Reveal";

const FAQS = [
  {
    q: "What CDL do I need to drive for Wildfire Express?",
    a: "A valid Class A Commercial Driver’s License is required for all OTR positions. We hire across the lower 48, and we accept CDLs from any state.",
  },
  {
    q: "How much experience do you require?",
    a: "A minimum of six months recent OTR experience in a Class A sleeper. If you’re close to that mark, talk to recruiting — we evaluate every application individually.",
  },
  {
    q: "How often does Wildfire pay drivers?",
    a: "Settlements run weekly, Saturday-to-Saturday. Direct deposit hits your account the following Friday. No held-back weeks, no surprise reserves.",
  },
  {
    q: "Do you offer fuel cards or sign-on bonuses?",
    a: "Yes — fuel cards are issued on day one with a fleet discount averaging 30–50¢ per gallon. Sign-on, referral, and clean-inspection bonuses are seasonal; ask recruiting for the current offer.",
  },
  {
    q: "Can I review my settlement before payment is processed?",
    a: "Always. Each Saturday you receive your detailed statement to confirm. If anything looks off, accounting fixes it before the Friday payout — that is the whole point of the review window.",
  },
  {
    q: "Where do I park my truck between loads?",
    a: "Our main yard is centrally located in the U.S. with secure overnight parking. Drivers based out-of-region can use our partner network — no extra fee.",
  },
] as const;

export default function FaqSection() {
  return (
    <section className="wf-section faq-band">
      <div className="wf-container">
        <div className="faq-wrap">
          <Reveal>
            <div className="eyebrow">Got Questions</div>
            <h2
              className="display"
              style={{ fontSize: "clamp(36px,4.6vw,64px)", marginTop: 18 }}
            >
              FAQs
              <br />
              <span className="serif-it" style={{ color: "var(--ink-3)" }}>
                straight answers.
              </span>
            </h2>
            <p style={{ marginTop: 22, color: "var(--ink-3)", maxWidth: 380 }}>
              Don&apos;t see what you&apos;re looking for? Call our recruiting line
              — somebody picks up.
            </p>
            <Link href="/contact" className="btn btn-fire" style={{ marginTop: 24 }}>
              <span>Talk To Recruiting</span>
              <span className="arrow">→</span>
            </Link>
          </Reveal>

          <div className="faq-list">
            {FAQS.map((item, index) => (
              <Reveal key={item.q}>
                <details
                  className="faq-item"
                  // First item matches template; `defaultOpen` is valid on <details> (see MDN).
                  {...(index === 0 ? { defaultOpen: true } : {})}
                >
                  <summary>
                    {item.q}
                    <span className="ico" aria-hidden />
                  </summary>
                  <div className="answer">{item.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
