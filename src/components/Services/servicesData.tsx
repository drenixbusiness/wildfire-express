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
    title: "Partial Loads",
    description:
      "Smarter use of trailer space — multiple shippers, one route. Lower per-shipment costs without putting your timeline on the line.",
    tags: ["Cost-Sharing", "Mid-Volume", "Multi-Stop"],
    icon: <IconTruckPartial />,
  },
  {
    num: "03 / SERVICE",
    title: "Drop & Hook",
    description:
      "Pre-positioned trailers ready when you are. Load while the truck is still rolling somewhere else — minutes saved compound across a fleet.",
    tags: ["Pre-Loaded", "Fast Turn", "Yard Swap"],
    icon: <IconDropHook />,
  },
  {
    num: "04 / SERVICE",
    title: "Expedited Freight",
    description:
      "When the load needs to be there yesterday. Team drivers, dedicated lanes, and live tracking from pickup to POD — no surprises.",
    tags: ["Team Driving", "Live ETA", "Priority Lanes"],
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
