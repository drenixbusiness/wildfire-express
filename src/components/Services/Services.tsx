import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import { ArrowRight } from "../icons/WildfireIcons";
import { SERVICES } from "./servicesData";

export default function Services() {
  return (
    <section className="wf-section">
      <div className="wf-container">
        <Reveal>
          <div className="section-head">
            <h2>
              Services
              <br />
              <span className="it it--muted">that move freight.</span>
            </h2>
            <p className="head-text">
              Four lanes, one standard. Whether you&apos;re a shipper booking a
              load or a driver picking the next run, the answer is the same —
              clean paperwork, on-time hooks, and honest numbers.
            </p>
          </div>
        </Reveal>

        <div className="services">
          {SERVICES.map((s) => (
            <Reveal key={s.num}>
              <article className="service">
                <div className="num">{s.num}</div>
                <div className="ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link href="/services" className="arrow" aria-label={`Learn more about ${s.title}`}>
                  <ArrowRight />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
