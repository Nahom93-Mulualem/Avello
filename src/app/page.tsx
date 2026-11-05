"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Quote, 
  Sparkles,
  Calendar,
  ShieldCheck
} from "lucide-react";
import { useBooking } from "@/components/ClientShell";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.74 1.45-.04 2.76-.98 3.21-2.36.2-.56.27-1.16.26-1.76V.02z" />
    </svg>
  );
}

export default function HomePage() {
  const { openBooking } = useBooking();

  // Booking Section Form State
  const [formName, setFormName] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formGoal, setFormGoal] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById("contact");
      const contactTop = contactEl ? contactEl.offsetTop - 400 : 999999;
      const scrollPos = window.scrollY;

      setShowMobileStickyBar(scrollPos > 450 && scrollPos < contactTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formContact.trim()) {
      setFormError("Please add a way for me to reach you.");
      return;
    }
    setFormError("");
    setFormSubmitted(true);
  };

  const services = [
    {
      num: "01",
      title: "Weight Training",
      desc: "Structured resistance work built on mechanics rather than ego. Load progresses only once the movement is clean. Power comes after precision.",
      tag: "Strength",
    },
    {
      num: "02",
      title: "Individual Assessment",
      desc: "Before anything is programmed, we audit how you actually move. Every plan starts from your body, not from a template.",
      tag: "Biomechanics",
    },
    {
      num: "03",
      title: "Fitness Programs",
      desc: "A written roadmap for your goal, your equipment and your week, private in the room or delivered online, anywhere in the world.",
      tag: "In-Person & Online",
    },
    {
      num: "04",
      title: "Nutrition Advice",
      desc: "Practical guidance that supports the training instead of fighting it. Fuel for the work, not a punishment protocol.",
      tag: "Metabolic Health",
    },
    {
      num: "05",
      title: "Fitness Advice",
      desc: "The questions between sessions: recovery, sleep, pain, travel, plateaus. Coaching continues outside the gym.",
      tag: "Recovery & Sleep",
    },
    {
      num: "06",
      title: "Adaptability",
      desc: "Injuries, schedules and bad weeks happen. The programme bends around them without losing the thread of progress.",
      tag: "Real Life",
    },
    {
      num: "07",
      title: "Technical Skills",
      desc: "Cueing, tempo, positioning and correction. The detail work that turns an exercise into an injury-proof pattern.",
      tag: "Precision",
    },
  ];

  const results = [
    {
      quote: "For seven years, back spasms made lifting my kids feel like a gamble. Abel taught me deep pelvic positioning and breathing. Today, I deadlift 150 lbs completely pain-free.",
      author: "Sarah M.",
      context: "Architect, 42 • Training 14 months",
    },
    {
      quote: "By 35, twelve-hour tech sprints left me running on 4 cold brews. Abel treated stress as biological data. We focused on steady breathing and mechanics. My resting HR dropped 14 bpm.",
      author: "Marcus T.",
      context: "Software Engineer, 36 • Half-marathoner",
    },
    {
      quote: "At 58, gym culture made me feel invisible. Abel built my bone density through farmer carries and hex-bar pulls. My latest DEXA scan showed an 18% improvement.",
      author: "Linda R.",
      context: "Professor, 58 • Multi-day trail hiker",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas text-ink">
      {/* 1. HERO SECTION (Canvas Background) */}
      <section className="relative w-full pt-10 sm:pt-16 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Text (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand text-ink text-[11px] font-bold tracking-[0.22em] uppercase border border-outline/40 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span>Coach Avello • Private Atelier &amp; Online</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] text-ink font-normal leading-[1.22] sm:leading-[1.18] lg:leading-[1.16] tracking-[-0.015em] my-6">
                Get <span className="italic font-medium text-secondary">stronger</span>, one clean rep at a time.
              </h1>

              <p className="font-sans text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed sm:leading-[1.8] mb-8">
                Friendly, precise coaching built around your body, your goal and your week. Mechanics come before load; power follows precision.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => openBooking("Individual Assessment")}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[44px] rounded-full bg-secondary text-on-secondary hover:bg-[#8E432A] transition-all duration-200 ease-out font-sans text-label-md uppercase tracking-[0.14em] font-semibold shadow-level1 hover:shadow-[0_10px_24px_-4px_rgba(168,87,58,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group overflow-hidden"
                >
                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">Start with an assessment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 min-h-[44px] font-sans text-body-md text-primary font-semibold hover:text-secondary transition-all duration-200 ease-out underline-offset-8 hover:underline group/offer"
                >
                  <span className="transition-transform duration-200 ease-out group-hover/offer:translate-x-0.5">See what I offer</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/offer:opacity-100 group-hover/offer:translate-x-0 transition-all duration-200 ease-out text-secondary" />
                </a>
              </div>

              {/* Quiet Evidence Strip */}
              <div className="pt-8 mt-8 border-t border-sand/80 flex flex-wrap items-center gap-6 text-xs text-ink-soft font-sans">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-tertiary" />
                  <span className="tracking-wide">Mechanics-First Coaching</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-tertiary" />
                  <span className="tracking-wide">Private In-Person &amp; Online Worldwide</span>
                </span>
              </div>
            </div>

            {/* Right Visual Showcase (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-hero overflow-hidden shadow-level2 bg-sand border border-outline/20">
                <Image
                  src="/images/dumbbell-curl.png"
                  alt="Abel Gidey coaching in clean modern gym setting with warm lighting"
                  fill
                  className="object-cover transition-transform duration-slow hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent flex items-end p-6 text-on-primary">
                  <p className="font-serif text-lg italic text-canvas">
                    &ldquo;Precision first. Power follows.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES MARQUEE (Slow, Pausable Ribbon on Sand) */}
      <div className="w-full bg-sand py-4 border-y border-outline/30 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-sans text-label-md uppercase tracking-[0.2em] text-primary font-bold">
          <span>Weight Training</span>
          <span className="text-secondary">•</span>
          <span>Individual Assessment</span>
          <span className="text-secondary">•</span>
          <span>Fitness Programs</span>
          <span className="text-secondary">•</span>
          <span>Nutrition Advice</span>
          <span className="text-secondary">•</span>
          <span>Fitness Advice</span>
          <span className="text-secondary">•</span>
          <span>Adaptability</span>
          <span className="text-secondary">•</span>
          <span>Technical Skills</span>
          <span className="text-secondary">•</span>
          {/* Repeat for seamless continuous loop */}
          <span>Weight Training</span>
          <span className="text-secondary">•</span>
          <span>Individual Assessment</span>
          <span className="text-secondary">•</span>
          <span>Fitness Programs</span>
          <span className="text-secondary">•</span>
          <span>Nutrition Advice</span>
          <span className="text-secondary">•</span>
          <span>Fitness Advice</span>
          <span className="text-secondary">•</span>
          <span>Adaptability</span>
          <span className="text-secondary">•</span>
          <span>Technical Skills</span>
          <span className="text-secondary">•</span>
        </div>
      </div>

      {/* 3. ABOUT ABEL (Sand Background + Arch Shape Portrait) */}
      <section id="about" className="w-full bg-sand py-section-gap-mobile md:py-section-gap">
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Arch-shaped portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] arch-portrait overflow-hidden shadow-level2 bg-canvas border border-outline/30">
                <Image
                  src="/images/trainer-profile.jpg"
                  alt="Abel Gidey standing portrait"
                  fill
                  className="object-cover transition-transform duration-slow hover:scale-105"
                />
              </div>
            </div>

            {/* Narrative Copy (7 cols) */}
            <div className="lg:col-span-7">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-secondary font-bold block mb-3">
                WHO ABEL IS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-ink font-normal leading-[1.22] tracking-tight mb-6">
                Coaching on mechanics rather than <span className="italic font-medium text-primary">ego</span>.
              </h2>
              <div className="space-y-5 font-sans mb-8">
                <p className="text-base sm:text-lg text-ink font-normal leading-[1.7] border-l-2 border-secondary/70 pl-4 py-0.5">
                  I coach on mechanics rather than ego. Load goes up only when the movement is clean; power comes after precision. Every plan starts from your body, not from an arbitrary internet template.
                </p>
                <p className="text-[15px] sm:text-base text-ink-soft leading-[1.78]">
                  Whether we meet in person inside our quiet private Portland atelier or work together online, the philosophy remains constant: warm, encouraging, and intellectually rigorous. Never loud, never shaming, and never &ldquo;no pain, no gain.&rdquo;
                </p>
                <p className="text-[15px] sm:text-base text-ink-soft leading-[1.78]">
                  I work with adults who want to get stronger safely, individuals returning from injury or long sedentary breaks, and busy people who require a plan that bends gracefully around their week.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-outline/30">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-primary font-normal">10+</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mt-0.5">Years Coaching</p>
                </div>
                <div className="h-10 w-px bg-outline/40" />
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-primary font-normal">NASM &amp; FMS</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mt-0.5">Movement Screening</p>
                </div>
                <div className="h-10 w-px bg-outline/40" />
                <div>
                  <p className="font-serif text-3xl sm:text-4xl text-primary font-normal">Pn2 Master</p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink-soft font-semibold mt-0.5">Nutritional Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SEVEN SERVICES (Canvas Background + Soft Warm Shadow & Highlight on Hover) */}
      <section id="services" className="w-full bg-canvas py-section-gap-mobile md:py-section-gap">
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="max-w-2xl mb-14">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-secondary font-bold block mb-3">
              THE SEVEN SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-ink font-normal leading-[1.22] tracking-tight mb-4">
              Coaching that <span className="italic font-medium text-primary">fits</span> your life.
            </h2>
            <p className="font-sans text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
              Every pillar is built on clean movement mechanics, sensible load progression, and real-world adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {services.map((item) => (
              <div
                key={item.num}
                onClick={() => openBooking(item.title)}
                className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(168,87,58,0.18),0_4px_12px_-4px_rgba(41,44,39,0.06)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group border border-sand hover:border-secondary/50 cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl font-medium text-secondary-soft group-hover:text-secondary group-hover:scale-105 transition-all duration-200">
                      {item.num}
                    </span>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full bg-tertiary-tint text-primary border border-tertiary/20 group-hover:border-secondary/30 transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-normal mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-base text-ink-soft leading-[1.72]">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sand flex items-center justify-between">
                  <button
                    type="button"
                    className="font-sans text-label-md uppercase tracking-[0.14em] text-primary font-bold group-hover:text-secondary transition-colors inline-flex items-center gap-2 group/btn py-1"
                  >
                    <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">Explore this service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 text-secondary" />
                  </button>
                </div>
              </div>
            ))}

            {/* 8th Final CTA Card (per Section 6 spec) */}
            <div className="bg-sand/80 hover:bg-sand rounded-2xl p-8 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(168,87,58,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between border border-outline/40 hover:border-secondary/50">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-secondary font-bold block mb-2">
                  GET STARTED
                </span>
                <h3 className="font-serif text-2xl text-ink font-normal mt-2 mb-3 leading-snug">
                  Ready to start with clean mechanics?
                </h3>
                <p className="font-sans text-[15px] sm:text-base text-ink-soft leading-[1.72]">
                  Every journey begins with an audit of how your joints, spine, and breath actually coordinate. No high-pressure commitments.
                </p>
              </div>

              <div className="pt-6 mt-6">
                <button
                  onClick={() => openBooking("Individual Assessment")}
                  className="w-full min-h-[44px] py-3.5 rounded-full bg-secondary text-on-secondary hover:bg-[#8E432A] transition-all duration-200 ease-out font-sans text-label-md uppercase tracking-[0.14em] font-semibold shadow-level1 hover:shadow-[0_10px_24px_-4px_rgba(168,87,58,0.35)] active:scale-[0.98] flex items-center justify-center gap-2.5 group/btn8"
                >
                  <span className="transition-transform duration-200 ease-out group-hover/btn8:translate-x-0.5">Book your assessment</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover/btn8:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW COACHING WORKS (Sand Background + Warm Subtle Shadows) */}
      <section id="how-it-works" className="w-full bg-sand py-section-gap-mobile md:py-section-gap border-y border-outline/30">
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-secondary font-bold block mb-3">
              HOW COACHING WORKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-ink font-normal leading-[1.22] tracking-tight mb-4">
              How coaching <span className="italic font-medium text-primary">works</span>.
            </h2>
            <p className="font-sans text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
              Three clear, deliberate steps. Simple, transparent, and grounded in real life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-[0_14px_28px_-6px_rgba(53,75,59,0.14)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between border border-primary/10 group">
              <div>
                <div className="w-11 h-11 rounded-full bg-primary text-on-primary flex items-center justify-center font-serif text-lg font-normal mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  1
                </div>
                <h3 className="font-serif text-2xl text-ink font-normal mb-3 leading-snug">
                  Movement Assessment
                </h3>
                <p className="font-sans text-[15px] sm:text-base text-ink-soft leading-[1.72]">
                  Before anything is programmed, we audit how you actually move. We check joint mobility, pelvic alignment, and posture. Zero intimidation.
                </p>
              </div>
              <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-secondary font-bold mt-6 pt-4 border-t border-sand">
                Step 01 • The Baseline
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-[0_14px_28px_-6px_rgba(168,87,58,0.14)] hover:border-secondary/40 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between border border-primary/10 group">
              <div>
                <div className="w-11 h-11 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-serif text-lg font-normal mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  2
                </div>
                <h3 className="font-serif text-2xl text-ink font-normal mb-3 leading-snug">
                  Written Roadmap
                </h3>
                <p className="font-sans text-[15px] sm:text-base text-ink-soft leading-[1.72]">
                  A custom plan for your goal, your equipment, and your week. Designed to bend around work and family life so progress stays uninterrupted.
                </p>
              </div>
              <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-secondary font-bold mt-6 pt-4 border-t border-sand">
                Step 02 • The Blueprint
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-[0_14px_28px_-6px_rgba(31,52,38,0.16)] hover:border-primary-deep/40 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between border border-primary/10 group">
              <div>
                <div className="w-11 h-11 rounded-full bg-primary-deep text-on-primary flex items-center justify-center font-serif text-lg font-normal mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  3
                </div>
                <h3 className="font-serif text-2xl text-ink font-normal mb-3 leading-snug">
                  Ongoing Coaching
                </h3>
                <p className="font-sans text-[15px] sm:text-base text-ink-soft leading-[1.72]">
                  Private sessions in the gym or structured online delivery. Constant technical refinement, recovery advice, and calm accountability.
                </p>
              </div>
              <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-secondary font-bold mt-6 pt-4 border-t border-sand">
                Step 03 • The Progression
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT RESULTS (Canvas Background + Heavy Stylized Italic Serif Quotes) */}
      <section id="results" className="w-full bg-canvas py-section-gap-mobile md:py-section-gap">
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="max-w-2xl mb-14">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-secondary font-bold block mb-3">
              REAL EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-ink font-normal leading-[1.22] tracking-tight mb-4">
              Results that <span className="italic font-medium text-primary">last</span>.
            </h2>
            <p className="font-sans text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl">
              Real client quotes only. No artificial claims or extreme 30-day gimmicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((item, idx) => (
              <div
                key={idx}
                className="bg-sand/70 hover:bg-sand rounded-2xl p-8 sm:p-9 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(168,87,58,0.16)] hover:border-secondary/40 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between border border-outline/40 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-5xl leading-none text-secondary/40 select-none block font-bold">
                      &ldquo;
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-canvas/80 text-[11px] font-semibold tracking-wider uppercase text-tertiary border border-outline/30">
                      Verified Client
                    </span>
                  </div>
                  <p className="font-serif italic font-medium sm:font-semibold text-lg sm:text-[21px] text-primary-deep leading-[1.62] mb-8 tracking-tight">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-outline/30 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-serif text-base font-bold flex-shrink-0 border border-secondary/25">
                    {item.author[0]}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-ink text-base tracking-wide">
                      {item.author}
                    </p>
                    <p className="font-sans text-xs uppercase tracking-[0.12em] text-secondary font-semibold mt-0.5">
                      {item.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING & CONTACT (Dark Forest #354B3B / #1F3426 with Amber #F0B35A) */}
      <section id="contact" className="w-full bg-primary py-section-gap-mobile md:py-section-gap text-on-primary">
        <div className="max-w-container mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info & Channels (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.24em] text-amber font-bold block mb-3">
                  DIRECT ACCESS &amp; BOOKING
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] text-on-primary font-normal mt-2 mb-4 leading-[1.22] tracking-tight">
                  Start with a calm <span className="italic font-medium text-amber">conversation</span>.
                </h2>
                <p className="font-sans text-base sm:text-lg text-sand/90 leading-relaxed max-w-lg">
                  Tell me a bit about where your body is today and what you are looking to build. I review every message personally.
                </p>
              </div>

              {/* Direct channels with warm amber accents */}
              <div className="space-y-4 pt-2 font-sans text-body-md text-sand/95">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-deep flex items-center justify-center text-amber border border-amber/20">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber font-semibold block">Telegram</span>
                    <a href="https://t.me/abelgidey" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
                      @abelgidey
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-deep flex items-center justify-center text-amber border border-amber/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber font-semibold block">Phone</span>
                    <a href="tel:+251911234567" className="hover:text-amber transition-colors">
                      +251 911 234 567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-deep flex items-center justify-center text-amber border border-amber/20">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber font-semibold block">Instagram</span>
                    <a href="https://instagram.com/coach.avello" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
                      @coach.avello
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-deep flex items-center justify-center text-amber border border-amber/20">
                    <TikTokIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber font-semibold block">TikTok</span>
                    <a href="https://tiktok.com/@coach.avello" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
                      @coach.avello
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-deep flex items-center justify-center text-amber border border-amber/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber font-semibold block">Portland Studio</span>
                    <span>842 NW 23rd Ave, Portland, OR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (6 cols) */}
            <div className="lg:col-span-6 bg-surface text-ink p-8 sm:p-10 rounded-2xl shadow-level3 border border-sand">
              {formSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-tertiary-tint flex items-center justify-center text-primary mb-4 shadow-level1">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-normal mb-2">
                    Thank you. I&apos;ll be in touch soon.
                  </h3>
                  <p className="font-sans text-body-md text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
                    Thanks for reaching out, <strong className="text-ink">{formName || "there"}</strong>. I review every message personally to see how coaching can best bend around your body and your schedule.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormName("");
                      setFormContact("");
                      setFormGoal("");
                    }}
                    className="px-8 py-3.5 min-h-[44px] rounded-full bg-primary text-on-primary hover:bg-primary-deep transition-all font-sans text-label-md uppercase tracking-wider font-semibold shadow-level1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-sand text-ink font-sans text-body-md focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-1.5">
                      Email or Phone / Telegram *
                    </label>
                    <input
                      type="text"
                      required
                      value={formContact}
                      onChange={(e) => {
                        setFormContact(e.target.value);
                        if (formError) setFormError("");
                      }}
                      placeholder="you@email.com or @telegram"
                      className={`w-full px-4 py-3 rounded-lg bg-surface border text-ink font-sans text-body-md focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all shadow-sm ${
                        formError ? "border-error" : "border-sand"
                      }`}
                    />
                    {formError && (
                      <p className="font-sans text-xs text-error mt-1">{formError}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-1.5">
                      Your Goal or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formGoal}
                      onChange={(e) => setFormGoal(e.target.value)}
                      placeholder="Tell me a bit about what you want to achieve or past injuries..."
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-sand text-ink font-sans text-body-md focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all shadow-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[44px] py-4 rounded-full bg-secondary text-on-secondary hover:bg-[#8E432A] transition-all duration-200 ease-out font-sans text-label-md uppercase tracking-[0.14em] font-semibold shadow-level1 hover:shadow-[0_10px_24px_-4px_rgba(168,87,58,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2.5 group overflow-hidden"
                    >
                      <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">Send request</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                    </button>
                    <p className="font-sans text-xs text-ink-soft text-center mt-2.5">
                      Human response within 24 hours. No aggressive sales tactics.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOTTOM BAR (Section 10) */}
      {showMobileStickyBar && (
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-in slide-in-from-bottom-4 duration-base">
          <div className="bg-canvas/95 backdrop-blur-md p-2 rounded-full shadow-level3 border border-sand flex items-center justify-between">
            <span className="font-serif text-sm text-ink pl-4 italic">
              Precision first.
            </span>
            <button
              onClick={() => openBooking("Individual Assessment")}
              className="px-5 py-2.5 min-h-[40px] rounded-full bg-secondary text-on-secondary font-sans text-label-md uppercase tracking-[0.12em] font-semibold shadow-level1 hover:shadow-[0_8px_20px_-4px_rgba(168,87,58,0.35)] flex items-center gap-2 transition-all duration-200 ease-out active:scale-[0.98] group"
            >
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">Book a session</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
