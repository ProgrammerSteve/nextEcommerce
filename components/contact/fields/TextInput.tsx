import React from "react";
import FieldShell from "./FieldShell";

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hint?: string;
  error?: string | null;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, value, onChange, placeholder, hint, error, type="text" }) => {
  const hasError = Boolean(error);
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} aria-invalid={hasError} className={["w-full rounded-xl","bg-white/70 dark:bg-slate-800/60","border",hasError?"border-red-500 focus:border-red-500 focus:ring-red-400/40":"border-slate-300/80 dark:border-slate-700","px-4 py-2.5","text-slate-900 dark:text-slate-200 placeholder:text-slate-400","outline-none ring-2 ring-transparent focus:ring-slate-400/30","transition duration-200","backdrop-blur-sm"].join(" ")} />
    </FieldShell>
  );
};

export default TextInput;
