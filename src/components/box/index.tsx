import React from "react";
import Box from "@mui/material/Box";

const BoxComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f0f0f0", borderRadius: 2 }}>
      {children}
    </Box>
  );
};

export default BoxComponent;
