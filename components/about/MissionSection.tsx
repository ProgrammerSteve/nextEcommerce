import React from "react";
import Image from "next/image";
import Section from "./Section";

const MissionSection: React.FC = () => (
  <Section className="mt-10 md:mt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Built on craft, powered by care
        </h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </p>
      </div>

      <div className="order-1 md:order-2">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-lg aspect-[4/3]">
          <Image
            alt="Team collaborating"
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80"
            fill
            sizes="(min-width: 768px) 40rem, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default MissionSection;
