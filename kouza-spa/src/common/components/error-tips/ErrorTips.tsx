import React, { useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import "./ErrorTips.css";
import { AreaMessageContext } from "../../../store/store";

const ErrorTips = () => {
  const { areaErrorMessage, setAreaErrorMessage } =
    useContext(AreaMessageContext);

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
