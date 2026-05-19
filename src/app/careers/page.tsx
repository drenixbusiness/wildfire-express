import Link from "next/link";
import CtaStrip from "../../components/CtaStrip/CtaStrip";
import PageHero from "../../components/PageHero/PageHero";
import RolesOpportunities from "../../components/RolesOpportunities/RolesOpportunities";

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <Link href="/">Home</Link>
            {" · "}
            <span>Careers</span>
          </>
        }
        title={
          <>
            Three ways
            <br />
            <span className="it it--muted">to run with us.</span>
          </>
        }
        lead="Pick the path that fits where you are today — company seat, your own truck, or a small fleet under Wildfire authority. Recruiting will walk you through equipment requirements, orientation, and the current bonus programs in plain language."
      />

      <RolesOpportunities hideHeading />

      <section className="wf-section compact !mb-0 !pb-0 mt-10">
        <div className="wf-container" style={{ maxWidth: 720 }}>
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,44px)" }}>
            Next steps
          </h2>
          <p className="split-body" style={{ marginTop: 16 }}>
            Submit a short application — most drivers finish in under two minutes. An HR Specialist will contact you during business hours, discuss home time expectations, and provide a sample settlement so you’ll understand exactly how your pay is calculated before you hit the road with us.
          </p>
          <p className="split-body">
            Have questions first? Visit our{" "}
            <Link href="/" style={{ color: "var(--fire-2)", fontWeight: 700 }}>
              homepage FAQ
            </Link>{" "}
            or jump to{" "}
            <Link
              href="/contact#contact-bottom"
              style={{ color: "var(--fire-2)", fontWeight: 700 }}
            >
              contact
            </Link>{" "}
            and we will point you to the right person on our team.
          </p>
        </div>
      </section>

      <CtaStrip compactVertical />
    </>
  );
}
