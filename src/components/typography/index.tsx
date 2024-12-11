import Typography from "@mui/material/Typography";

const TypographyComponent = ({
  text,
  variant,
}: {
  text: string;
  variant: "h1" | "h2" | "h3" | "body1" | "body2";
}) => {
  return <Typography variant={variant}>{text}</Typography>;
};
export default TypographyComponent;
