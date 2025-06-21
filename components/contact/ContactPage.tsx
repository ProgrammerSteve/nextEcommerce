import React from "react";
import InfoSidebar from "./InfoSidebar";
import ContactForm from "./ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-950 dark:to-black py-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-4 items-stretch">
          <InfoSidebar />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
