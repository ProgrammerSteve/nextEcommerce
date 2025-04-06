import React from "react";
import Hero from "./Hero";
import MissionSection from "./MissionSection";
import StatsGrid from "./StatsGrid";
import Timeline from "./Timeline";
import ValuesGrid from "./ValuesGrid";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-950 dark:to-black py-10 md:py-16">
      <Hero />
      <MissionSection />
      <StatsGrid />
      <Timeline />
      <ValuesGrid />
    </div>
  );
};

export default AboutPage;
