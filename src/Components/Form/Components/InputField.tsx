import { Control, Controller, FieldError } from "react-hook-form";
import "./Components.css";
import React from "react";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  placeholder: string;
  type?: string;
  error?: FieldError;
}

export const InputField = ({ name, control, label, type, placeholder, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            className={`form-control ${error ? "in-invalid" : ""}`}
            {...field}
          />
        )}
      ></Controller>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};
