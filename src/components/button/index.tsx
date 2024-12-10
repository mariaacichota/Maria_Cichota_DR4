import React from "react";
import { Button, ButtonProps } from "@mui/material";

const CustomButton = ({ label }: { label: string }) => {
  return <Button variant="contained">{label}</Button>;
};

export default CustomButton;
