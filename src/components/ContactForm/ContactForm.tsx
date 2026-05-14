"use client";

import Link from "next/link";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ContactForm() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const [agreed, setAgreed] = React.useState(false);
  const [showCheckboxError, setShowCheckboxError] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      setShowCheckboxError(true);
      return;
    }

    setShowCheckboxError(false);
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/sendToTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, topic: "general", message: "Contact form submission" }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setSnackOpen(true);
      setFormState({ name: "", email: "", phone: "" });
      setAgreed(false);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
      setSnackOpen(true);
    }
  };

  const handleClose = (_: any, reason?: string) => {
    if (reason === "clickaway") return;
    setSnackOpen(false);
  };

  return (
    <div className="bg-white rounded-[22px] p-8 sm:p-[52px_44px] shadow-lg border border-[#e5e5e8] text-center max-w-[600px] mx-auto">
      <h2 className="font-sans text-[30px] sm:text-[44px] leading-[1.05] uppercase tracking-wider text-[#0b1738] mb-4">
        Partner with Wildfire Express today!
      </h2>
      <p className="text-[15px] text-[#525252] mb-9 leading-relaxed">
        Do you want to start a new business or develop an existing one?
        <br />
        Contact us today and get:
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            id="pf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Name"
            className="w-full px-[22px] py-4 text-[15px] border-[1.5px] border-[#d4d4d8] rounded-full bg-white text-[#0a0a0a] placeholder-[#8a8a8a] focus:outline-none focus:border-[#0b1738] focus:ring-4 focus:ring-[#0b1738]/10 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <input
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            id="pf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Phone Number"
            className="w-full px-[22px] py-4 text-[15px] border-[1.5px] border-[#d4d4d8] rounded-full bg-white text-[#0a0a0a] placeholder-[#8a8a8a] focus:outline-none focus:border-[#0b1738] focus:ring-4 focus:ring-[#0b1738]/10 transition-all duration-200"
          />
        </div>
        <div className="relative">
          <input
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            id="pf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email Address"
            className="w-full px-[22px] py-4 text-[15px] border-[1.5px] border-[#d4d4d8] rounded-full bg-white text-[#0a0a0a] placeholder-[#8a8a8a] focus:outline-none focus:border-[#0b1738] focus:ring-4 focus:ring-[#0b1738]/10 transition-all duration-200"
          />
        </div>

        <div className="mt-1">
          <label className={`flex items-start gap-3 text-left cursor-pointer transition-colors duration-200 ${showCheckboxError ? "text-red-600" : ""}`}>
            <div className="relative flex items-center mt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked) setShowCheckboxError(false);
                }}
                style={agreed ? { background: 'var(--fire)', borderColor: 'var(--fire)' } : {}}
                className={`appearance-none w-5 h-5 border-[1.5px] rounded bg-white cursor-pointer transition-all duration-200 ${!agreed ? 'border-[#d4d4d8]' : ''
                  } ${showCheckboxError ? 'border-red-600 ring-4 ring-red-600/10' : ''}`}
              />
              {agreed && (
                <svg className="absolute left-[5.5px] top-[5px] w-[10px] h-[10px] text-white pointer-events-none" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M1 5L4 8L9 1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-[13px] text-[#525252] leading-tight select-none">
              By checking this box you agree to receive text messages from
              Wildfire Express LLC, you can reply stop to opt-out any
              time, this is my privacy policy{" "}
              <Link href="/privacy-policy" className="text-[#1e3a8a] font-semibold underline break-all hover:text-[#ea580c]">
                https://wildfireexpress.co/privacy-policy
              </Link>
            </span>
          </label>
          {showCheckboxError && (
            <p className="text-[13px] text-red-600 font-semibold text-left mt-1 ml-8">
              You must agree to receive text messages before submitting.
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            background: status === "loading" ? 'var(--navy)' : 'linear-gradient(135deg, var(--fire), var(--fire-2), var(--fire-3))',
            boxShadow: status === "loading" ? 'none' : 'var(--shadow-fire)',
          }}
          className="w-full mt-3 py-5 text-white font-sans text-lg uppercase tracking-[0.08em] rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Submit"}
        </button>
      </form>

      {/* ── Success snackbar ── */}
      <Snackbar
        open={snackOpen && status === "success"}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", minWidth: 320, borderRadius: 2 }}
        >
          <AlertTitle sx={{ fontWeight: 700 }}>Message sent!</AlertTitle>
          Thanks for reaching out — we'll get back to you shortly.
        </Alert>
      </Snackbar>

      {/* ── Error snackbar ── */}
      <Snackbar
        open={snackOpen && status === "error"}
        autoHideDuration={8000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%", minWidth: 320, borderRadius: 2 }}
        >
          <AlertTitle sx={{ fontWeight: 700 }}>Failed to send</AlertTitle>
          {errorMsg || "Please try again or contact us directly."}
        </Alert>
      </Snackbar>
    </div>
  );
}