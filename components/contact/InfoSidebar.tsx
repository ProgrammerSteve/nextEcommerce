import React from "react";
import InfoRow from "./InfoRow";
import HoursList from "./HoursList";

const InfoSidebar: React.FC = () => {
  return (
    <aside className="w-full px-2 md:px-3 lg:px-4  py-6 md:py-7 lg:py-8">
      <div className="h-full min-w-[260px] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl p-5 md:p-6 space-y-6">
        <div className="space-y-4">
          <InfoRow label="Phone" value={<span>999-999-9999</span>} />
          <InfoRow
            label="Address"
            value={
              <div>
                <p>123 Fake St, 99999</p>
                <p>Fake City, Texas</p>
              </div>
            }
          />
        </div>
        <div className="h-px bg-white/10" />
        <HoursList />
        <div className="rounded-xl bg-white/5 p-3 text-xs text-white/80">
          We typically reply within 1–2 business days.
        </div>
      </div>
    </aside>
  );
};

export default InfoSidebar;
