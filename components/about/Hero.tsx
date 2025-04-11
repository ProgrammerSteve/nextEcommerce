import React from "react";
import Image from "next/image";
import Section from "./Section";

const Hero: React.FC = () => (
  <Section>
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 dark:border-slate-800 shadow-xl">
      <div className="absolute inset-0">
        <Image
          alt="City skyline"
          src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?auto=format&fit=crop&w=1600&q=80"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent" />
      </div>
      <div className="relative p-8 md:p-12 lg:p-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Our Story
          </h1>
          <p className="mt-3 md:mt-4 text-slate-100/90 text-sm md:text-base">
            We started with a simple idea: build products that people love to use,
            and treat every interaction as an opportunity to earn trust.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;
