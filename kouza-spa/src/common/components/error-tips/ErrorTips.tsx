import React, { useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import "./ErrorTips.css";
import { MainContext } from "../../../store/store";

const ErrorTips = () => {
  const { areaErrorMessage, setAreaErrorMessage } =
    useContext(MainContext);

  const handleClose = () => {
    setAreaErrorMessage("");
  };

  return (
    <div className="error-tips">
      {areaErrorMessage ? (
        <div className="error-tips-message">
          <div className="error-tips-message-span">
            <span>{areaErrorMessage}</span>
          </div>
          <div className="error-tips-message-icon">
            <CloseIcon onClick={handleClose}></CloseIcon>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ErrorTips;
