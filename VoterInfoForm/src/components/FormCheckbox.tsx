import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface FormCheckboxProps {
  name: string;
  label: string;
  control: Control<any>;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox checked={field.value} {...field} />}
          label={label}
        />
      )}
    />
  );
};

export default FormCheckbox;
