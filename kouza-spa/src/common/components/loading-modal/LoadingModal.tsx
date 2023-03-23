import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

/**
 * LoadingModal sss
 * @date 2023-03-11
 * @returns {JSX.Element}
 */
const LoadingModal = (): JSX.Element => {
  return (
    <Backdrop
      open
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingModal;
