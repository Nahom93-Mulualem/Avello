"use client";

import React, { useState } from "react";
import { Sparkles, Dumbbell, Apple, Zap, Check, ArrowRight } from "lucide-react";

interface FindYourFitQuizProps {
  onSelectProgram?: (programName: string) => void;
}

export default function FindYourFitQuiz({ onSelectProgram }: FindYourFitQuizProps) {
  const [activeGoal, setActiveGoal] = useState<"gentle" | "strength" | "metabolic" | "stamina">("gentle");

  const goals = [
    {
      id: "gentle" as const,
      icon: Sparkles,
      title: "Start Gentle",
      sub: "Zero pressure, posture reset, breathing & joint mobility.",
      recommendation: {
        title: "Foundations of Strength (Gentle Pace)",
        desc: "We begin with a gentle 60-minute movement screen focused on spine decompression, diaphragm breathing, and low-impact joint alignment. No aggressive fatigue—just serene, restorative rebuilding.",
        tag: "Recommended for beginners & post-injury",
        tier: "Foundations of Strength",
      },
    },
    {
      id: "strength" as const,
      icon: Dumbbell,
      title: "Build Core Strength",
      sub: "Progressive barbell & kettlebell training for lifelong bone density.",
      recommendation: {
        title: "Elevate & Thrive: Progressive Loading",
        desc: "Targeted resistance training with dumbbells, kettlebells, and deliberate postural cues designed to build joint stability, bone density, and real-world lifting capacity without chronic fatigue.",
        tag: "Most popular for sustainable progress",
        tier: "Elevate & Thrive",
      },
    },
    {
      id: "metabolic" as const,
      icon: Apple,
      title: "Weight & Nourish",
      sub: "Metabolic reset, nutrient-rich meal patterns, anti-inflammatory energy.",
      recommendation: {
        title: "Holistic Lifestyle & Reset Nutrition Track",
        desc: "A balanced synthesis of gut-friendly nutrition habits, gentle daily NEAT movement targets, and anti-inflammatory lifestyle rhythms tailored around your demanding schedule.",
        tag: "Ideal for busy professionals & chronic stress",
        tier: "Holistic Lifestyle & Reset",
      },
    },
    {
      id: "stamina" as const,
      icon: Zap,
      title: "Peak Stamina",
      sub: "Cardiovascular capacity, hybrid circuits, and athletic agility.",
      recommendation: {
        title: "Hybrid Studio & Conditioning Track",
        desc: "Cardio-respiratory endurance built through low-impact aerobic work, kettlebell flow patterns, and athletic mobility circuits that leave you energised rather than depleted.",
        tag: "For intermediate movers & outdoor athletes",
        tier: "Elevate & Thrive",
      },
    },
  ];

  const current = goals.find((g) => g.id === activeGoal)!;

  return (
    <div className="w-full bg-surface-container py-space-2xl lg:py-space-3xl" id="assessment">
      <div className="max-w-[1040px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 lg:p-12 shadow-tactile-md border border-outline-variant/30">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-surface-container-high text-primary font-semibold text-xs uppercase tracking-wider mb-3">
              Interactive Self-Audit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary leading-tight mb-3">
              Where is your body today?
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Select your immediate physical readiness to receive a thoughtful, calibrated program blueprint.
            </p>
          </div>

          {/* Option Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {goals.map((g) => {
              const Icon = g.icon;
              const isSelected = activeGoal === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveGoal(g.id)}
                  className={`text-left p-5 rounded-2xl transition-all flex flex-col justify-between group shadow-sm border ${
                    isSelected
                      ? "bg-surface-container border-primary ring-2 ring-primary/10"
                      : "bg-surface-container-low border-outline-variant/30 hover:bg-surface-container hover:border-outline-variant"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`p-2 rounded-xl transition-colors ${
                      isSelected ? "bg-secondary text-on-secondary" : "bg-surface-container-high text-secondary"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                        isSelected
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-high text-transparent"
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-base text-primary mb-1">
                      {g.title}
                    </p>
                    <p className="text-xs text-on-surface-variant leading-snug">
                      {g.sub}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recommendation Output Card */}
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-in fade-in duration-300">
            <div className="space-y-2 max-w-xl">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-secondary">
                {current.recommendation.tag}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium">
                {current.recommendation.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {current.recommendation.desc}
              </p>
            </div>
            <button
              onClick={() => onSelectProgram?.(current.recommendation.tier)}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-all font-sans text-xs font-semibold uppercase tracking-wider shadow-tactile-sm hover:shadow-tactile-md"
            >
              <span>Schedule This Screen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

