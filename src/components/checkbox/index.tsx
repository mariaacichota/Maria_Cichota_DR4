import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckboxComponent = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      color="primary"
    />
  );
};

export default CheckboxComponent;
