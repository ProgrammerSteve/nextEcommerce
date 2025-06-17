import React, { useState } from "react";
import TextInput from "./fields/TextInput";
import TextArea from "./fields/TextArea";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [formSuccess, setFormSuccess] = useState(false);

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const validPhone = new RegExp(/\+?1?[-]?[ ]?[\(]?(\d{3})[\)]?[ ]?[-]?(\d{3})[ ]?[-]?(\d{4})/m);
  const validEmail = new RegExp(/(\w*(?=@))@(\w*(?=\.))(\.com|\.net)/m);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setNameErr(!name);
    setEmailErr(!validEmail.test(email));
    setPhoneErr(!validPhone.test(phone));
    setMessageErr(!message);
    if (!name || !email || !phone || !message) return;
    setFormSuccess(true);
    setName(""); setEmail(""); setMessage(""); setPhone("");
  };

  return (
    <div className="w-full px-2 md:px-3 lg:px-4  py-6 md:py-7 lg:py-8 md:col-start-2">
      <div className="h-full rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-xl backdrop-blur-md">
        <div className="px-6 md:px-8 pt-6 md:pt-8">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 text-center">
            Contact Us
          </h1>
          <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
            Have a question or need help? Send us a message and we’ll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextInput id="name" label="Your Name" value={name} onChange={(e)=>setName(e.target.value)} error={nameErr ? "Please enter your name" : null} placeholder="Jane Doe" />
            <TextInput id="email" label="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} error={emailErr ? "Incorrect email format" : null} placeholder="jane@example.com" />
          </div>
          <TextInput id="phone" label="Your Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} error={phoneErr ? "Incorrect phone number format" : null} placeholder="(555) 123-4567" />
          <TextArea id="message" label="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} error={messageErr ? "Please enter your message" : null} placeholder="Write your message here..." />
          <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-2">
            <button type="reset" onClick={()=>{setName('');setEmail('');setMessage('');setPhone('')}} className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400/40 transition">Reset</button>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400/40 transition">Send</button>
          </div>
        </form>

        {formSuccess && (
          <div className="mx-6 md:mx-8 mb-8 rounded-xl border border-emerald-300/60 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100 dark:border-emerald-800 px-4 py-3 flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">✓</span>
            <div className="text-sm">Your message has been sent successfully!
              <button className="ml-3 inline text-emerald-700 dark:text-emerald-200 underline underline-offset-2" onClick={()=>setFormSuccess(false)}>dismiss</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
