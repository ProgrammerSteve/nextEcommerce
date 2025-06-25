import React from "react";

interface HourRowProps {
  day: string;
  open: string;
  close: string;
}

const HourRow: React.FC<HourRowProps> = ({ day, open, close }) => (
  <div className="flex items-center justify-between text-white/90">
    <span className="text-sm">{day}</span>
    <span className="text-xs px-2 py-0.5 rounded-md bg-white/10">
      {open} – {close}
    </span>
  </div>
);

export default HourRow;
