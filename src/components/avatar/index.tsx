import React from "react";
import Avatar from "@mui/material/Avatar";
const AvatarComponent = ({ alt, src }: { alt: string; src: string }) => {
  return <Avatar alt={alt} src={src} />;
};
export default AvatarComponent;
