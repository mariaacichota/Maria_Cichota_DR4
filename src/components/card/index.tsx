import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const CardComponent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
};
export default CardComponent;
