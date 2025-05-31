import React from "react";
import Section from "./Section";
import TimelineItem from "./TimelineItem";

const Timeline: React.FC = () => {
  const items = [
    {
      year: "2019",
      title: "The spark",
      desc: "Founded with the goal of simplifying complex workflows for small businesses.",
    },
    {
      year: "2020",
      title: "First release",
      desc: "Launched our MVP and reached our first 1,000 users purely through word of mouth.",
    },
    {
      year: "2022",
      title: "Scale & reliability",
      desc: "Invested heavily in performance and reliability—achieving industry-leading uptime.",
    },
    {
      year: "2024",
      title: "Global",
      desc: "Expanded to new regions and built a multilingual experience powered by customer feedback.",
    },
  ];

  return (
    <Section className="mt-10 md:mt-16">
      <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur p-6 md:p-10 shadow-xl">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Milestones
        </h3>
        <div className="mt-6">
          {items.map((it, idx) => (
            <TimelineItem
              key={it.year}
              year={it.year}
              title={it.title}
              desc={it.desc}
              isLast={idx === items.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
