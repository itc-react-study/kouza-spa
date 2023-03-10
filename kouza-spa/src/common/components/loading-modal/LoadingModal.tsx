import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext } from "react";
import { LoginContext, MainContext } from "../../../store/store";

const LoadingModal = () => {
  const { isMainLoading } = useContext(MainContext);
  const { isLoginLoading } = useContext(LoginContext);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isMainLoading || isLoginLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingModal;
