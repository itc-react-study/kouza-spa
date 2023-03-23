import React from "react";
import FormalPointQuantity1 from "../../../common/components/formal-point-quantity1/FormalPointQuantity1";
import HeaderInfoBox from "../../../common/components/header-info-box/HeaderInfoBox";
import "./FormalCheck.css";

const FormalCheck = () => {
  return (
    <div className="formal-check">
      <section className="info-box">
        <HeaderInfoBox></HeaderInfoBox>
      </section>

      <section className="detail-content">
        <div className="detail-content-left">
          <div className="left-up">
            <FormalPointQuantity1></FormalPointQuantity1>
          </div>

          <div className="left-down"></div>
        </div>
        <div className="detail-content-right"></div>
      </section>
    </div>
  );
};

export default FormalCheck;
