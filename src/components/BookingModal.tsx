"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(initialService || "Individual Assessment");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      setErrorMsg("Please add a way for me to reach you.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setContact("");
    setGoal("");
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm transition-all duration-base">
      <div 
        className="relative w-full max-w-lg bg-surface rounded-xl shadow-level3 border border-sand overflow-hidden animate-in fade-in zoom-in-95 duration-base"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Dark Forest with Amber Accent) */}
        <div className="bg-primary px-6 sm:px-8 py-5 text-on-primary flex items-center justify-between border-b border-primary-deep">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-amber">
              Abel Gidey Personal Trainer
            </span>
            <h3 className="font-serif text-2xl font-normal text-on-primary mt-0.5">
              Start with an assessment
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-on-primary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 bg-canvas">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-tertiary-tint flex items-center justify-center text-primary mb-4 shadow-level1">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-serif text-2xl text-ink font-normal mb-2">
                Thank you. I&apos;ll be in touch soon.
              </h4>
              <p className="font-sans text-body-md text-ink-soft max-w-sm mx-auto leading-relaxed mb-6">
                Thanks, <strong className="text-ink">{name || "friend"}</strong>. I review every message personally to see how coaching can best bend around your body and your schedule.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3.5 min-h-[44px] rounded-full bg-primary text-on-primary hover:bg-primary-deep transition-all font-sans text-label-md uppercase tracking-wider font-semibold shadow-level1"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  placeholder="you@email.com or @telegram"
                  className={`w-full px-4 py-3 rounded-lg bg-surface border text-ink font-sans text-body-md focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all shadow-sm ${
                    errorMsg ? "border-error" : "border-sand"
                  }`}
                />
                {errorMsg && (
                  <p className="font-sans text-xs text-error mt-1">{errorMsg}</p>
                )}
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-1.5">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-sand text-ink font-sans text-body-md focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all shadow-sm"
                >
                  <option value="Individual Assessment">Individual Assessment</option>
                  <option value="Weight Training">Weight Training</option>
                  <option value="Fitness Programs">Fitness Programs (In-Person / Online)</option>
                  <option value="Nutrition Advice">Nutrition Advice</option>
                  <option value="Fitness Advice">Fitness &amp; Recovery Advice</option>
                  <option value="Technical Skills">Technical Skills &amp; Form Correction</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-1.5">
                  Your Goal or Current Context
                </label>
                <textarea
                  rows={2}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Getting back into strength after a back tweak, building bone density..."
                  className="w-full px-4 py-3 rounded-lg bg-surface border border-sand text-ink font-sans text-body-md focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all shadow-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[44px] py-3.5 rounded-full bg-secondary text-on-secondary hover:bg-[#8E432A] transition-all duration-200 ease-out font-sans text-label-md uppercase tracking-[0.14em] font-semibold shadow-level1 hover:shadow-[0_10px_24px_-4px_rgba(168,87,58,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2.5 group overflow-hidden"
                >
                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">Send request</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-ink-soft">
                  <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
                  <span>Respectful communication only. No aggressive sales pitches.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
