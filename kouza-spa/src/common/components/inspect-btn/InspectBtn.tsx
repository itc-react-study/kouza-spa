import React, { useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import "./InspectBtn.css";

const defaultStyle: React.CSSProperties = {
  color: "#979797",
  backgroundColor: "#e3e3e3",
};
const circleStyle: React.CSSProperties = {
  backgroundColor: "#39bd0a",
};
const clearStyle: React.CSSProperties = {
  color: "#fff",
  backgroundColor: "#ed9347",
};
const defaultClass = "cir-icon-grey";

const circleCss = "cir-icon-white";

/**
 * InspectBtn
 * @returns {JSX.Element}
 */
const InspectBtn = (): JSX.Element => {
  const [circle, setCircle] = useState(defaultStyle);
  const [clear, setClear] = useState(defaultStyle);
  const [circleClass, setCircleClass] = useState(defaultClass);

  const handleCircle = () => {
    setCircle(circleStyle);
    setClear(defaultStyle);
    setCircleClass(circleCss);
  };

  const handleClose = () => {
    setCircle(defaultStyle);
    setClear(clearStyle);
    setCircleClass(defaultClass);
  };

  return (
    <div className="inspect-btn">
      <div className="cir-icon-area" style={circle} onClick={handleCircle}>
        <div className={circleClass}></div>
      </div>
      <ClearOutlinedIcon sx={clear} onClick={handleClose}></ClearOutlinedIcon>
    </div>
  );
};

export default InspectBtn;
