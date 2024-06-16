import React from "react";
import { TextField } from "@mui/material";
import { Controller, Control, FieldError } from "react-hook-form";

interface FormTextFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  rules?: object;
  type?: string;
  select?: boolean;
  children?: React.ReactNode;
  error?: FieldError;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  control,
  rules = {},
  type = "text",
  select = false,
  children,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          type={type}
          select={select}
          error={!!error}
          helperText={error ? error.message : ""}
          InputLabelProps={{
            shrink: true,
          }}
        >
          {children}
        </TextField>
      )}
    />
  );
};

export default FormTextField;
