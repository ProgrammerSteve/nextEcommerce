import React from "react";
import FieldShell from "./FieldShell";

interface TextAreaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  hint?: string;
  error?: string | null;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ id, label, value, onChange, placeholder, hint, error, rows=5 }) => {
  const hasError = Boolean(error);
  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} rows={rows} aria-invalid={hasError} className={["w-full rounded-xl","bg-white/70 dark:bg-slate-800/60","border",hasError?"border-red-500 focus:border-red-500 focus:ring-red-400/40":"border-slate-300/80 dark:border-slate-700","px-4 py-3","text-slate-900 dark:text-slate-200 placeholder:text-slate-400","outline-none ring-2 ring-transparent focus:ring-slate-400/30","transition duration-200","backdrop-blur-sm","resize-y min-h-[140px]"].join(" ")} />
    </FieldShell>
  );
};

export default TextArea;
