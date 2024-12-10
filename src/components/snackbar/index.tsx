import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
const SnackBarComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
      <Snackbar
        open={open}
        message="This is a Snackbar"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
export default SnackBarComponent;
