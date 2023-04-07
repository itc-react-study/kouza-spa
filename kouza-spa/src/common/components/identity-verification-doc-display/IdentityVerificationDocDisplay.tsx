import React from "react";
import "./IdentityVerificationDocDisplay.css";
import informationImg from "../../../assets/image/information-detail-bg.png";
import rotateIcon from "../../../assets/image/1.svg";
import addIcon from "../../../assets/image/a-.svg";
import minusIcon from "../../../assets/image/a--.svg";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  width: 60,
  height: 24,
  margin: "6px 0px",
  fontSize: 13,
  background: "#6083CB",
  "&:hover": {
    backgroundColor: "#40a9ff",
    color: "#fff",
  },
});

const IdentityVerificationDocDisplay = () => {
  return (
    <div className="identity-verification-doc-display">
      <div
        className="identity-verification-doc-display-left"
        style={{ background: `url(${informationImg})` }}
      >
        <div className="identity-verification-doc-display-left-information"></div>
        <div className="identity-verification-doc-display-left-operator">
          <div className="identity-verification-doc-display-left-icon">
            <div>
              <img src={rotateIcon} />
            </div>
            <div>
              <img src={addIcon} />
            </div>
            <div>
              <img src={minusIcon} />
            </div>
          </div>
          <div className="identity-verification-doc-display-left-button">
            <StyledButton variant="contained">拡 大</StyledButton>
            <StyledButton variant="contained">縮 小</StyledButton>
          </div>
        </div>
      </div>

      <div className="identity-verification-doc-display-right"></div>
    </div>
  );
};

export default IdentityVerificationDocDisplay;
