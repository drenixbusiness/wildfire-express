import Link from "next/link";
import PageHero from "../../components/PageHero/PageHero";
import Services from "../../components/Services/Services";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <Link href="/">Home</Link>
            {" · "}
            <span>Services</span>
          </>
        }
        title={
          <>
            Services
            <br />
            <span className="it it--muted">that move freight.</span>
          </>
        }
        lead="Whether you are tendering a full truckload or looking for a dependable dry-van partner for recurring lanes, Wildfire Express runs one standard: clean paperwork, on-time hooks, and honest communication from pickup to POD."
      />

      <Services hideHeading />
    </>
  );
}
