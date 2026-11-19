import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import "./Components.css";
import React from "react";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  error?: FieldError;
}

export const InputField = <T extends FieldValues,>({
  name,
  control,
  label,
  type = "text",
  placeholder,
  autoComplete,
  error,
}: Props<T>) => {
  const errorId = `${String(name)}-error`;

  return (
    <div className="form-group">
      <label htmlFor={String(name)}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={String(name)}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={`form-control ${error ? "is-invalid" : ""}`}
            {...field}
          />
        )}
      />
      {error && <p className="text-danger" id={errorId} role="alert">{error.message}</p>}
    </div>
  );
};
