import Link from "next/link";
import PageHero from "../../components/PageHero/PageHero";
import WhyWildFire from "../../components/WhyWildFire/WhyWildFire";

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <Link href="/">Home</Link>
            {" · "}
            <span>About</span>
          </>
        }
        title={
          <>
            A carrier <span className="it">that respects</span>
            <br />
            the work behind the wheel.
          </>
        }
        lead="Wildfire Express is a dry van OTR carrier built around the people who move America&apos;s freight — with transparent pay, modern equipment, and dispatch that picks up the phone when it matters."
      />


      <WhyWildFire hideHeading />
    </>
  );
}
