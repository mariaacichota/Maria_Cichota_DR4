import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
const GridComponent = () => {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3].map((item) => (
        <Grid item xs={4} key={item}>
          <Paper>Item {item}</Paper>
        </Grid>
      ))}
    </Grid>
  );
};
export default GridComponent;
