import Link from "next/link";
import { LogoFlame } from "../icons/WildfireIcons";
import Image from "next/image";

const YEAR = new Date().getFullYear();

function SocialInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function SocialFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 22v-8h3l1-4h-4V7c0-1.1.9-2 2-2h2V1h-3a5 5 0 0 0-5 5v4H6v4h3v8z" />
    </svg>
  );
}

function SocialTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m21 4-3 16-6-4-3 3v-4l11-9-13 7-4-1 18-8z" />
    </svg>
  );
}

function SocialPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wf-container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo" aria-label="Wildfire Express home">
              <Image src={"/images/we2.png"} alt="" width={100} height={100} />
              <span className="logo-text">
                Wildfire Express
                <small>OTR · DRY VAN · 48 STATES</small>
              </span>
            </Link>
            <p>
              Wildfire Express LLC — a dry van OTR carrier built around the people
              who drive. USDOT pending · MC pending.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Drivers</h4>
            <ul>
              <li>
                <Link href="/careers">Apply Now</Link>
              </li>
              <li>
                <Link href="/careers#owner">Owner Operator</Link>
              </li>
              <li>
                <Link href="/careers#company">Company Driver</Link>
              </li>
              <li>
                <Link href="/careers#partner">Lease Partner</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul>
              <li>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
              </li>
              <li>
                <a href="mailto:hr@wildfireexpress.com">hr@wildfireexpress.com</a>
              </li>
              <li>Yard &amp; HQ — USA</li>
              <li>
                <Link href="/contact#contact-bottom">Contact form</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>
            © {YEAR} Wildfire Express LLC · All rights reserved.
          </div>
          <div className="foot-socials">
            <a href="#" aria-label="Instagram">
              <SocialInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <SocialFacebook />
            </a>
            <a href="#" aria-label="Telegram">
              <SocialTelegram />
            </a>
            <a href="tel:+10000000000" aria-label="Phone">
              <SocialPhone />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
