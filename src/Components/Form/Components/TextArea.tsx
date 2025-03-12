import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import './Components.css'

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  placeholder: string;
  rows?: number;
  error?: FieldError;
}

export const TextAreaField = ({ name, control, label, placeholder, rows, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            id={name}
            className={`form-control ${error ? "in-invalid" : ""}`}
            placeholder={placeholder}
            rows={rows}
            {...field}
          />
        )}
      />
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};