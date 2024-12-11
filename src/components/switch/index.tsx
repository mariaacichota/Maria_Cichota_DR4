import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
const SwitchComponent = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label={label}
    />
  );
};
export default SwitchComponent;
