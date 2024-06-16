import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

interface FormAutocompleteProps {
  name: string;
  control: any;
  options: string[];
  label: string;
}

const FormAutocomplete: React.FC<FormAutocompleteProps> = ({
  name,
  control,
  options,
  label,
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Autocomplete
        {...field}
        options={options}
        onChange={(_, data) => field.onChange(data)}
        noOptionsText="No options"
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    )}
  />
);

export default FormAutocomplete;
