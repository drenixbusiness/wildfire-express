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
    topic: "general",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/sendToTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setSnackOpen(true);
      setFormState({ name: "", email: "", phone: "", topic: "general", message: "" });
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

  const isDisabled =
    status === "loading" || Object.values(formState).some((v) => v === "");

  return (
    <div className="form-card">
      <h3>Send message</h3>
      <p className="form-sub">
        This form is for general inquiries. Drivers applying for a seat should still use the{" "}
        <Link href="/careers" style={{ color: "var(--fire-2)", fontWeight: 700 }}>
          careers flow
        </Link>{" "}
        so recruiting can prioritize your file.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="c-name">Full name</label>
            <input
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              id="c-name" name="name" type="text" autoComplete="name" required
              placeholder="Your name"
            />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              id="c-email" name="email" type="email" autoComplete="email" required
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="c-phone">Phone</label>
            <input
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              id="c-phone" name="phone" type="tel" autoComplete="tel"
              placeholder="(123) 456-7890"
            />
          </div>
          <div className="field">
            <label htmlFor="c-topic">Topic</label>
            <select
              value={formState.topic}
              onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
              id="c-topic" name="topic"
            >
              <option value="general">General inquiry</option>
              <option value="shipper">Shipper / broker</option>
              <option value="driver">Driver recruiting</option>
              <option value="media">Media / partnership</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="field full">
            <label htmlFor="c-msg">How can we help?</label>
            <textarea
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              id="c-msg" name="message" rows={5} required
            />
          </div>
        </div>
        <button disabled={isDisabled} type="submit" className="btn btn-fire">
          <span>{status === "loading" ? "Sending…" : "Submit"}</span>
          <span className="arrow">→</span>
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