import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import { CheckStroke } from "../icons/WildfireIcons";

const SPLIT_IMG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80";

const FEATURES = [
  {
    title: "Non-forced dispatch",
    body: "Pick the loads that work for your week. Your schedule, your call.",
  },
  {
    title: "Friday direct deposit",
    body: "Settlements are clear, line-itemed, and in your account every Friday.",
  },
  {
    title: "One dispatcher, every week",
    body: "You talk to the same person who knows your truck, your home time, and your habits.",
  },
  {
    title: "Clean-inspection bonuses",
    body: "Run safe and we pay extra for it. Simple as that.",
  },
] as const;

export default function WhyWildFire() {
  return (
    <section className="wf-section">
      <div className="wf-container">
        <div className="split">
          <Reveal>
            <div className="split-image">
              <Image
                src={SPLIT_IMG}
                alt="Truck at sunset"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="badge2">Built by Drivers</div>
              <div className="stat-card">
                <div className="num">100%</div>
                <div className="lbl">No Touch Freight</div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="eyebrow">Why Wild Fire</div>
            <h2 style={{ marginTop: 18 }}>
              A carrier <span className="it">that respects</span>
              <br />
              the work behind the wheel.
            </h2>
            <p className="split-body">
              The trucking industry runs on people who get up at 4 a.m. and sleep
              in their truck. We built Wild Fire Express knowing exactly what that
              looks like — and we structured everything around making it pay.
            </p>
            <div className="feat-list">
              {FEATURES.map((f) => (
                <div className="feat" key={f.title}>
                  <div className="check">
                    <CheckStroke />
                  </div>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.body}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-fire" style={{ marginTop: 34 }}>
              <span>Read Our Story</span>
              <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
