import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.18em] ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-light-orange hover:text-bold-orange transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#8a8a8a]">{item.label}</span>
            )}
            {!isLast && (
              <span className="text-[#8a8a8a] px-1 select-none">·</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
