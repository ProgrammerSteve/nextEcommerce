import React from "react";

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="flex items-start gap-3">
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur text-white">
      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-90">
        <circle cx="12" cy="12" r="5" fill="currentColor" />
      </svg>
    </span>
    <div>
      <p className="text-xs uppercase tracking-wide text-white/80">{label}</p>
      <div className="text-white text-sm font-medium">{value}</div>
    </div>
  </div>
);

export default InfoRow;
