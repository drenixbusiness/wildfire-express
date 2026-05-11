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

type WhyWildFireProps = {
  /** Hide the in-section headline (when the page already uses `PageHero` with the same message). */
  hideHeading?: boolean;
};

export default function WhyWildFire({ hideHeading = false }: WhyWildFireProps) {
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
            {!hideHeading ? (
              <>
                <div className="eyebrow">Why Wildfire</div>
                <h2 style={{ marginTop: 18 }}>
                  A carrier <span className="it">that respects</span>
                  <br />
                  the work behind the wheel.
                </h2>
                <p className="split-body">
                  The trucking industry runs on people who get up at 4 a.m. and sleep
                  in their truck. We built Wildfire Express knowing exactly what that
                  looks like — and we structured everything around making it pay.
                </p>
              </>
            ) : (
              <>
                <p className="split-body">
                  Wildfire Express started with a simple rule: treat drivers the way
                  we wanted to be treated when we were behind the wheel. That means
                  clear settlements, predictable home time conversations, and
                  dispatchers who answer when the night goes sideways.
                </p>
                <p className="split-body">
                  We are big enough to keep you rolling with dry-van freight across
                  the lower 48, and small enough that your name does not get lost in a
                  call queue. Safety, compliance, and relationships with brokers and
                  shippers are not buzzwords here — they are how we protect everyone&apos;s
                  paycheck.
                </p>
                <p className="split-body">
                  Whether you are exploring your first OTR job or bringing years of
                  experience as an owner operator, we built this company so the work
                  behind the wheel is respected — and paid like it.
                </p>
              </>
            )}
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
            {!hideHeading ? (
              <Link href="/about" className="btn btn-fire" style={{ marginTop: 34 }}>
                <span>Read Our Story</span>
                <span className="arrow">→</span>
              </Link>
            ) : (
              <Link href="/careers" className="btn btn-fire" style={{ marginTop: 34 }}>
                <span>View driving roles</span>
                <span className="arrow">→</span>
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
