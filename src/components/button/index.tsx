import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ label }: { label: string }) => {
  return <Button variant="contained">{label}</Button>;
};

export default CustomButton;
