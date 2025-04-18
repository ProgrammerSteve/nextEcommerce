import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

const Section: React.FC<Props> = ({ className = "", children }) => (
  <section className={`w-full max-w-6xl mx-auto px-4 ${className}`}>{children}</section>
);

export default Section;
