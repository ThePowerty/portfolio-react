import React from "react";
import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import './Components.css'

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
  rows?: number;
  error?: FieldError;
}

export const TextAreaField = <T extends FieldValues,>({ name, control, label, placeholder, rows, error }: Props<T>) => {
  const errorId = `${String(name)}-error`;

  return (
    <div className="form-group">
      <label htmlFor={String(name)}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            id={String(name)}
            className={`form-control ${error ? "is-invalid" : ""}`}
            placeholder={placeholder}
            rows={rows}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            {...field}
          />
        )}
      />
      {error && <p className="text-danger" id={errorId} role="alert">{error.message}</p>}
    </div>
  );
};
