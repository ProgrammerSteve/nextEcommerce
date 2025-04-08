import React from "react";

type BaseFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string | null;
  children: React.ReactNode;
};

const FieldShell: React.FC<BaseFieldProps> = ({
  id,
  label,
  hint,
  error,
  children,
}) => {
  const hasError = Boolean(error);
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className={`block text-sm font-medium ${
          hasError
            ? "text-red-600 dark:text-red-400"
            : "text-slate-700 dark:text-slate-300"
        }`}
      >
        {label}
      </label>

      {children}

      {hint && !hasError && (
        <p className="text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      )}

      {hasError && (
        <p className="text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default FieldShell;