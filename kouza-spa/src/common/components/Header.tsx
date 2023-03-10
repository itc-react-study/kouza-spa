import React, { useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { AreaMessageContext } from "../../store/store";

const Header = () => {
  const { areaErrorMessage, setAreaErrorMessage } =
    useContext(AreaMessageContext);

  const handleClose = () => {
    setAreaErrorMessage("");
  };

  return (
    <div className="header">
      {areaErrorMessage ? (
        <div className="header-message">
          <div className="header-message-sapn">
            <span>{areaErrorMessage}</span>
          </div>
          <div className="header-message-icon">
            <CloseIcon onClick={handleClose}></CloseIcon>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
