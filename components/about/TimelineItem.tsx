import React from "react";

type Props = {
  year: string;
  title: string;
  desc: string;
  isLast?: boolean;
};

const TimelineItem: React.FC<Props> = ({ year, title, desc, isLast }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-slate-900 dark:bg-white ring-4 ring-slate-200 dark:ring-slate-800" />
    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{year}</div>
    <div className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
      {title}
    </div>
    <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300">{desc}</p>
    {!isLast && (
      <div className="absolute left-[5px] top-4 bottom-[-1rem] w-[2px] bg-slate-200 dark:bg-slate-800" />
    )}
  </div>
);

export default TimelineItem;
