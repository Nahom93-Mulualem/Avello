"use client";

import Link from "next/link";
import { MessageCircle, Phone, MapPin, ArrowUp } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-sand text-ink border-t border-outline/30 pt-16 pb-12">
      <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline/20">
          {/* Brand & Narrative (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl text-ink font-normal tracking-tight">
                Abel Gidey
              </span>
              <p className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold mt-1">
                Personal Training • Coach Avello
              </p>
            </Link>
            <p className="font-serif text-xl italic text-primary leading-snug">
              &ldquo;Precision first. Power follows.&rdquo;
            </p>
            <p className="font-sans text-body-md text-ink-soft max-w-md leading-relaxed">
              Coaching on mechanics rather than ego. Private in the room or delivered online, anywhere in the world. Built around your body, your goal and your week.
            </p>
          </div>

          {/* Quick Anchor Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-sans text-label-md uppercase tracking-widest text-primary font-semibold">
              Navigation
            </p>
            <ul className="space-y-2.5 font-sans text-body-md text-ink-soft">
              <li>
                <a href="#about" className="hover:text-ink transition-colors">
                  About Abel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ink transition-colors">
                  The Seven Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-ink transition-colors">
                  How Coaching Works
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-ink transition-colors">
                  Client Results
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ink transition-colors">
                  Booking &amp; Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-sans text-label-md uppercase tracking-widest text-primary font-semibold">
              Direct Contact
            </p>
            <ul className="space-y-2.5 font-sans text-body-md text-ink-soft">
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <a 
                  href="https://t.me/abelgidey" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-ink transition-colors"
                >
                  Telegram: @abelgidey
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+15035550198" className="hover:text-ink transition-colors">
                  (503) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                <a 
                  href="https://instagram.com/coach.avello" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-ink transition-colors"
                >
                  @coach.avello
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Portland, Oregon Atelier</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} Abel Gidey (Coach Avello) Personal Training. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
