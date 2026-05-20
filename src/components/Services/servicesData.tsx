import type { ReactNode } from "react";
import {
  IconChat,
  IconClock,
  IconDropHook,
  IconMountain,
  IconTruckDryVan,
  IconTruckPartial,
} from "../icons/WildfireIcons";

export type ServiceCard = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
};

export const SERVICES: ServiceCard[] = [
  {
    num: "01 / SERVICE",
    title: "Dry Van OTR",
    description:
      "Long-haul 53′ dry van across the lower 48. Clean trailers, hard-running power units, and drivers who hit the dock when they said they would.",
    tags: ["53′ Trailers", "Solo · Team", "Sleeper Cab"],
    icon: <IconTruckDryVan />,
  },
  {
    num: "02 / SERVICE",
    title: "Fleet Support",
    description:
      "Pre-positioned trailers, yard swaps, and maintenance coordination so your truck never sits waiting on equipment. We move the freight, you move the needle.",
    tags: ["DROP & HOOK", "YARD SWAP", "FAST TURN"],
    icon: <IconTruckPartial />,
  },
  {
    num: "03 / SERVICE",
    title: "Driver Recruiting",
    description:
      "We source, screen, and onboard CDL-A drivers — company and owner-ops. Every applicant vetted for MVR, Clearinghouse, and experience before they ever get your number.",
    tags: ["CDL-A VETTING", "FAST ONBOARD", "48 STATES"],
    icon: <IconDropHook />,
  },
  {
    num: "04 / SERVICE",
    title: "HR Compliance",
    description:
      "DOT paperwork, driver files, DQ file audits, and policy documentation — handled so your operation stays audit-ready without the admin grind.",
    tags: ["DOT FILES", "DQ AUDIT", "POLICY DOCS"],
    icon: <IconClock />,
  },
  {
    num: "05 / SERVICE",
    title: "Owner Operators",
    description:
      "Run under our authority and keep the bigger share. Percent-of-gross pay, full FSC pass-through, weekly settlements, no escrow holds.",
    tags: ["88% Gross", "Weekly Pay", "No Escrow"],
    icon: <IconMountain />,
  },
  {
    num: "06 / SERVICE",
    title: "24/7 Dispatch",
    description:
      "Real people. Real answers. The phones do not go to voicemail at midnight on a Sunday — because that is when the worst of it happens.",
    tags: ["Live Humans", "After-Hours", "Bilingual"],
    icon: <IconChat />,
  },
];
