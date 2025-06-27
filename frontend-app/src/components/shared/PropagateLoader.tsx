import React from "react";
import { PropagateLoader as Spinner } from "react-spinners";

const PropagateLoader = ({
  color = "#ffffff",
  size = 8,
  speedMultiplier = 1,
  ...props
}) => {
  return (
    <Spinner
      color={color}
      size={size}
      speedMultiplier={speedMultiplier}
      {...props}
    />
  );
};

export default PropagateLoader;
