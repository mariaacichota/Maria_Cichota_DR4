import React from "react";
import Alert from "@mui/material/Alert";

const AlertComponent = ({
  severity,
  message,
}: {
  severity: "error" | "warning" | "info" | "success";
  message: string;
}) => {
  return <Alert severity={severity}>{message}</Alert>;
};

export default AlertComponent;
