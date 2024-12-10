import React from "react";
import TextField from "@mui/material/TextField";
const TextFieldComponent = ({
  label,
  type,
}: {
  label: string;
  type?: string;
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type || "text"}
      fullWidth
      margin="normal"
    />
  );
};
export default TextFieldComponent;
