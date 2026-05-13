import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import { ShieldStroke } from "../icons/WildfireIcons";

const HERO_IMG =
  "https://images.unsplash.com/photo-1721054939948-e48106e6d3d9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNlbWktdHJ1Y2t8ZW58MHx8MHx8fDA%3D";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden />
      <div className="wf-container hero-grid">
        <Reveal>
          <div className="hero-tag">
            <span className="pulse" aria-hidden />
            Now hiring · CDL-A · 48 STATES
          </div>
          <h1>
            Run<span className="it"> the </span>
            <br />
            roads<span className="it"> that pay </span>
            <br />
            <span className="accent">like fire.</span>
          </h1>
          <p className="lead">
            Wildfire Express is a dry van OTR carrier built around the people
            behind the wheel. Pre-booked freight, transparent settlements, and a
            dispatch team that picks up at 2 a.m. when it actually counts.
          </p>
          <div className="hero-cta">
            <Link href="/careers" className="btn btn-fire">
              <span>Apply In 90 Seconds</span>
              <span className="arrow">→</span>
            </Link>
            <Link href="/services" className="btn btn-ghost">
              See What We Haul
            </Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="num">
                88<span>%</span>
              </div>
              <div className="lbl">Owner-Op Gross</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">
                24/<span>7</span>
              </div>
              <div className="lbl">Live Dispatch</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">
                48<span>+</span>
              </div>
              <div className="lbl">States Covered</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="hero-visual">
            <Image
              src={HERO_IMG}
              alt="Wildfire Express truck on highway"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              priority
              className="object-cover"
            />
            <div className="fade" aria-hidden />
            <div className="hero-sticker" aria-hidden>
              <div>
                DIRECT
                <br />
                DEPOSIT
                <br />· FRIDAYS ·
              </div>
            </div>
            <div className="badge">
              <div className="icon">
                <ShieldStroke />
              </div>
              <div>
                <h4>FMCSA Compliant</h4>
                <p>A-rated insurance · Trailer interchange · ELD-tracked</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
