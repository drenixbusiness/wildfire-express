import Link from "next/link";
import Reveal from "../Reveal/Reveal";

const ROLES = [
  {
    anchorId: "company",
    tag: "Company Driver",
    tagClass: "tag-blue" as const,
    title: "Company Driver",
    sub: "Drive our trucks. Run our authority. Steady paycheck, no equipment risk.",
    pay: "$1,400 – $1,800",
    period: "Per Week",
    featured: false,
    feats: [
      "CPM-based pay structure",
      "Direct deposit every Friday",
      "Full benefits eligibility",
      "No-touch freight standard",
      "24/7 driver support",
    ],
  },
  {
    anchorId: "owner",
    tag: "★ Most Picked",
    tagClass: "tag-fire" as const,
    title: "Owner Operator",
    sub: "Your truck, our authority, our freight network. Keep the bigger share.",
    pay: "$8,000 – $12,000",
    period: "Per Week Gross",
    featured: true,
    feats: [
      "88% of gross to the driver",
      "Full FSC pass-through",
      "No escrow, no trailer fee",
      "Pre-booked freight pipeline",
      "Bilingual dispatch 24/7",
    ],
  },
  {
    anchorId: "partner",
    tag: "Partner",
    tagClass: "tag-blue" as const,
    title: "Lease Partner",
    sub: "Run a small fleet under Wildfire authority. Built for growth.",
    pay: "$25K – $80K+",
    period: "Per Truck / Month",
    featured: false,
    feats: [
      "Multiple-truck programs",
      "Fleet-wide insurance",
      "Dedicated account manager",
      "Capital partnership options",
      "Quarterly performance bonuses",
    ],
  },
] as const;

type RolesOpportunitiesProps = {
  /** When true, only the role cards render (e.g. careers subpage already has a page hero). */
  hideHeading?: boolean;
};

export default function RolesOpportunities({
  hideHeading = false,
}: RolesOpportunitiesProps) {
  return (
    <section className="wf-section roles-band">
      <div className="wf-container">
        {!hideHeading ? (
          <Reveal>
            <div className="section-head">
              <h2>
                Three ways
                <br />
                <span className="it it--muted">to run with us.</span>
              </h2>
              <p className="head-text">
                Pick the path that fits where you are right now. The numbers below
                are real ranges — what people on each path actually earn at Wildfire
                Express, not a recruiting brochure number.
              </p>
            </div>
          </Reveal>
        ) : null}

        <div className="roles">
          {ROLES.map((r) => (
            <Reveal key={r.title}>
              <div
                id={r.anchorId}
                className={`role${r.featured ? " featured" : ""}`}
              >
                <span className={`tag ${r.tagClass}`}>{r.tag}</span>
                <h3 className="role-title">{r.title}</h3>
                <p className="role-sub">{r.sub}</p>
                <div className="pay">{r.pay}</div>
                <div className="pay-period">{r.period}</div>
                <ul className="role-feats">
                  {r.feats.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                {r.featured ? (
                  <Link href="/careers" className="btn btn-fire btn-sm">
                    <span>Apply Now</span>
                    <span className="arrow">→</span>
                  </Link>
                ) : (
                  <Link href="/careers" className="btn btn-ghost btn-sm">
                    Apply Now
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
