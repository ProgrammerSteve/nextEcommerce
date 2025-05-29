import React from "react";

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 backdrop-blur p-5 shadow-sm">
    <div className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
      {value}
    </div>
    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mt-1">
      {label}
    </div>
  </div>
);

export default Stat;
