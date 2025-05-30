import React from "react";
import Section from "./Section";
import Stat from "./Stat";

const StatsGrid: React.FC = () => (
  <Section className="mt-10 md:mt-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <Stat label="Customers" value="87k+" />
      <Stat label="Brands" value="250+" />
      <Stat label="Countries" value="36" />
      <Stat label="Transactions" value="10 mil+" />
    </div>
  </Section>
);

export default StatsGrid;
