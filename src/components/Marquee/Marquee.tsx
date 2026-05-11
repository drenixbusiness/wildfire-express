function MarqueeSpan() {
  return (
    <span>
      WILDFIRE EXPRESS <span className="dot" />
      53′ DRY VAN <span className="dot" />
      NO FORCED DISPATCH <span className="dot" />
      WEEKLY SETTLEMENTS <span className="dot" />
      NO TOUCH FREIGHT <span className="dot" />
      88% OF GROSS <span className="dot" />
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        <MarqueeSpan />
        <MarqueeSpan />
      </div>
    </div>
  );
}
