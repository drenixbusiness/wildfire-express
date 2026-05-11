import Reveal from "../Reveal/Reveal";

const STATS = [
  { value: "94", sup: "%", label: "On-Time Delivery" },
  { value: "98", sup: "%", label: "Driver Retention" },
  { value: "300", sup: "+", label: "Broker Network" },
  { value: "$2.20", sup: "+", label: "Per-Mile Average" },
] as const;

export default function ByTheNumbers() {
  return (
    <section className="stats">
      <div className="wf-container">
        <Reveal>
          <div className="section-head" style={{ marginBottom: 48 }}>
            <h2 style={{ color: "#fff" }}>
              By the
              <br />
              <span className="it it--on-dark">numbers.</span>
            </h2>
            <p className="head-text" style={{ color: "rgba(255,255,255,0.65)" }}>
              A small company doesn&apos;t mean small results. The metrics below
              are what we run on — and what we hold ourselves to, every week.
            </p>
          </div>
        </Reveal>
        <div className="stats-grid">
          {STATS.map((s) => (
            <Reveal key={s.label}>
              <div className="stat">
                <div className="v">
                  {s.value}
                  <sup>{s.sup}</sup>
                </div>
                <div className="l">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
