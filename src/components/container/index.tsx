import React from "react";
import Container from "@mui/material/Container";

const ContainerComponent = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ContainerComponent;
