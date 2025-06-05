import React from "react";
import Section from "./Section";

const ValuesGrid: React.FC = () => {
  const values = [
    {
      title: "Empathy first",
      desc:
        "We listen deeply, act thoughtfully, and design for real people with real needs.",
    },
    {
      title: "Craft over hype",
      desc:
        "We value fundamentals, accessibility, and maintainability over trends.",
    },
    {
      title: "Own the outcome",
      desc:
        "We ship with care, measure impact, and iterate until it truly works.",
    },
  ];

  return (
    <Section className="mt-10 md:mt-16 pb-6 md:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur p-6 shadow-sm"
          >
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              {v.title}
            </div>
            <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ValuesGrid;
