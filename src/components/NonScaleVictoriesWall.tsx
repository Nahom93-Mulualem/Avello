"use client";

import React, { useState } from "react";
import { Sparkles, Moon, Mountain, Heart, Activity, Smile, Coffee, Luggage } from "lucide-react";

interface Victory {
  id: number;
  category: "all" | "posture" | "energy" | "mindset";
  tag: string;
  quote: string;
  client: string;
  timeframe: string;
  icon: any;
  colorClass: string;
}

export default function NonScaleVictoriesWall() {
  const [activeFilter, setActiveFilter] = useState<"all" | "posture" | "energy" | "mindset">("all");

  const victories: Victory[] = [
    {
      id: 1,
      category: "energy",
      tag: "Functional Stamina",
      quote: "Carried four bags of heavy groceries up three flights of stairs without pausing to catch my breath.",
      client: "Julian R., 41",
      timeframe: "4 Months in Program",
      icon: Activity,
      colorClass: "bg-secondary-fixed text-secondary",
    },
    {
      id: 2,
      category: "energy",
      tag: "Deep Restoration",
      quote: "Slept uninterrupted through the entire night for the first time in five years without sleep aids.",
      client: "Claire D., 52",
      timeframe: "6 Months in Program",
      icon: Moon,
      colorClass: "bg-primary-fixed text-primary",
    },
    {
      id: 3,
      category: "posture",
      tag: "Alpine Agility",
      quote: "Hiked eight miles over rocky ridge trails on our family vacation feeling energetic and sure-footed.",
      client: "David M., 48",
      timeframe: "9 Months in Program",
      icon: Mountain,
      colorClass: "bg-tertiary-fixed text-tertiary",
    },
    {
      id: 4,
      category: "mindset",
      tag: "Strength Sovereignty",
      quote: "Finally shed the deep psychological fear of weights and now look forward to deadlift mornings.",
      client: "Sarah B., 38",
      timeframe: "1 Year in Program",
      icon: Sparkles,
      colorClass: "bg-secondary-fixed text-secondary",
    },
    {
      id: 5,
      category: "posture",
      tag: "Play & Mobility",
      quote: "Can get down onto the carpet and back up effortlessly without needing a hand or groaning.",
      client: "Robert K., 64",
      timeframe: "5 Months in Program",
      icon: Heart,
      colorClass: "bg-primary-fixed text-primary",
    },
    {
      id: 6,
      category: "mindset",
      tag: "Mental Equanimity",
      quote: "Handled a 50-hour corporate audit week without tight neck knots or tension migraines.",
      client: "Jessica L., 34",
      timeframe: "3 Months in Program",
      icon: Smile,
      colorClass: "bg-tertiary-fixed text-tertiary",
    },
    {
      id: 7,
      category: "mindset",
      tag: "Nutritional Peace",
      quote: "Ate dinner at an authentic Italian family reunion without an ounce of shame or food anxiety.",
      client: "Anita T., 29",
      timeframe: "7 Months in Program",
      icon: Coffee,
      colorClass: "bg-secondary-fixed text-secondary",
    },
    {
      id: 8,
      category: "posture",
      tag: "Ease of Travel",
      quote: "Hoisted my heavy carry-on suitcase directly overhead into the airplane bin without shoulder twinges.",
      client: "Anthony W., 55",
      timeframe: "6 Months in Program",
      icon: Luggage,
      colorClass: "bg-primary-fixed text-primary",
    },
  ];

  const filtered = activeFilter === "all" ? victories : victories.filter((v) => v.category === activeFilter);

  const filters = [
    { id: "all" as const, label: "All Victories" },
    { id: "posture" as const, label: "Joint Freedom & Mobility" },
    { id: "energy" as const, label: "Energy & Sleep" },
    { id: "mindset" as const, label: "Mindset & Daily Life" },
  ];

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeFilter === f.id
                ? "bg-primary text-on-primary shadow-tactile-sm"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-tactile-sm hover:shadow-tactile-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${item.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-secondary">
                    {item.tag}
                  </span>
                </div>
                <p className="font-serif text-base sm:text-lg text-primary leading-snug group-hover:text-secondary transition-colors">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant">
                <span className="font-medium text-on-surface">{item.client}</span>
                <span className="text-secondary">{item.timeframe}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

