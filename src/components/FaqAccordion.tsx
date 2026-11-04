"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-primary/30 bg-surface-container-lowest shadow-sm"
                : "border-outline-variant/30 bg-surface-container-low hover:bg-surface-container/60"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              aria-expanded={isOpen}
            >
              <h3 className="font-sans font-semibold text-base sm:text-lg text-primary">
                {item.question}
              </h3>
              <span
                className={`p-1.5 rounded-full transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180 bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

