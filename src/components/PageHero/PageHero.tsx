import type { ReactNode } from "react";

type PageHeroProps = {
  crumbs?: ReactNode;
  title: ReactNode;
  lead?: string;
};

export default function PageHero({ crumbs, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wf-container page-hero-inner">
        {crumbs ? <div className="page-hero-crumbs">{crumbs}</div> : null}
        <h1 className="page-hero-title">{title}</h1>
        {lead ? <p className="page-hero-lead">{lead}</p> : null}
      </div>
    </section>
  );
}
