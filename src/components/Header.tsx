"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 40px threshold for sticky header background change
      setScrolled(window.scrollY > 40);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#results", label: "Results" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* 3px Terracotta Top Scroll Progress Line (Section 10) */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-secondary z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-base ${
          scrolled
            ? "bg-canvas/95 backdrop-blur-md shadow-level1 border-b border-sand py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
          {/* Wordmark "Abel Gidey" */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-full overflow-hidden bg-sand border border-outline/30 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Abel Gidey Personal Trainer"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl sm:text-2xl text-ink font-normal tracking-tight leading-none group-hover:text-secondary transition-colors">
                Abel Gidey
              </span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-ink-soft mt-0.5">
                Personal Trainer • Coach Avello
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-body-md text-ink-soft hover:text-ink transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-secondary text-on-secondary hover:bg-[#8E432A] transition-all duration-base font-sans text-label-md uppercase tracking-wider font-semibold shadow-level1 hover:shadow-level2 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Book a session</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ink hover:bg-sand transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-canvas border-b border-sand px-margin py-6 animate-in slide-in-from-top-4 duration-base">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-body-lg text-ink hover:text-secondary py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking?.();
                  }}
                  className="w-full min-h-[44px] py-3.5 rounded-full bg-secondary text-on-secondary text-center font-sans text-label-md uppercase tracking-wider font-semibold shadow-level1 flex items-center justify-center gap-2"
                >
                  <span>Start with an assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
