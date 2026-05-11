"use client";

import { useEffect } from "react";

/**
 * Smooth-scrolls to `#contact-bottom` when the contact page is opened with that hash
 * (e.g. from the main nav). `scroll-behavior: smooth` on `html` supports in-page anchors;
 * this handles timing after layout / client navigation.
 */
export default function ContactHashScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#contact-bottom") return;

    const run = () => {
      document
        .getElementById("contact-bottom")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const t = window.setTimeout(run, 100);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
