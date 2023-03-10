import React from "react";
import { ErrorCodes } from "../../constants/error-code.constant";
import { getMessage } from "../service/message.service";

import "./Header.css";

const Header = () => {
  const msg = getMessage(ErrorCodes.C30397, "", "30", "40");

  return <div className="header">{msg.message}</div>;
};

export default Header;
