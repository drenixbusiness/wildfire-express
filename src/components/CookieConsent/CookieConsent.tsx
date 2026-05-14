"use client";

import React from "react";

export default function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("wf-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on initial render
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("wf-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("wf-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div className="fixed inset-0 z-[9998] bg-black/45 backdrop-blur-sm animate-in fade-in duration-500" aria-hidden />

      {/* Consent banner */}
      <div
        className="fixed z-[9999] bottom-8 left-1/2 -translate-x-1/2 w-[min(480px,calc(100%-32px))] bg-white rounded-[22px] p-8 sm:p-10 shadow-2xl border border-[#e5e5e8] text-center animate-in slide-in-from-bottom-10 fade-in duration-700"
        role="dialog"
        aria-label="Cookie consent"
      >
        <div className="w-[52px] h-[52px] mx-auto mb-4 bg-[#fff5ed] rounded-xl flex items-center justify-center" aria-hidden>
          <svg className="w-7 h-7 text-[#f97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
            <circle cx="10" cy="14" r="1.4" fill="currentColor" />
            <circle cx="16" cy="16" r="0.8" fill="currentColor" />
          </svg>
        </div>
        <h3 className="font-sans text-[22px] uppercase tracking-wider text-[#0a0a0a] mb-2.5">We use cookies 🍪</h3>
        <p className="text-sm text-[#525252] leading-relaxed mb-6">
          We use cookies and similar technologies to improve your experience,
          analyze site traffic, and personalize content. By clicking
          &ldquo;Accept&rdquo;, you consent to our use of cookies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            className="flex-1 py-3.5 px-5 rounded-full font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, var(--fire), var(--fire-2), var(--fire-3))', boxShadow: 'var(--shadow-fire)' }}
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="flex-1 py-3.5 px-5 rounded-full font-bold text-sm uppercase tracking-wider text-[#2a2a2a] bg-transparent transition-all duration-300 hover:bg-[#f5f5f7] hover:-translate-y-0.5"
            style={{ border: '1.5px solid var(--line-strong)' }}
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </>
  );
}
