import React from "react";
import HourRow from "./HourRow";

const hours = [
  ["Mon", "8:00am", "6:00pm"],
  ["Tue", "8:00am", "6:00pm"],
  ["Wed", "8:00am", "6:00pm"],
  ["Thu", "8:00am", "6:00pm"],
  ["Fri", "8:00am", "6:00pm"],
  ["Sat", "8:00am", "3:00pm"],
  ["Sun", "8:00am", "3:00pm"],
];

const HoursList: React.FC = () => (
  <div>
    <p className="text-xs uppercase tracking-wide text-white/70 mb-3">Hours</p>
    <div className="space-y-1.5">
      {hours.map(([day, open, close]) => (
        <HourRow key={day} day={day} open={open} close={close} />
      ))}
    </div>
  </div>
);

export default HoursList;
