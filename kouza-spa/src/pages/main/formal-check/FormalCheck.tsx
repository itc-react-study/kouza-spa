import React from "react";
import FormalPointQuantity1 from "../../../common/components/formal-point-quantity1/FormalPointQuantity1";
import HeaderInfoBox from "../../../common/components/header-info-box/HeaderInfoBox";
import IdentityVerificationDocDisplay from "../../../common/components/identity-verification-doc-display/IdentityVerificationDocDisplay";
import MaskingTreatment from "../../../common/components/masking-treatment/MaskingTreatment";
import "./FormalCheck.css";

/**
 * 形式点検
 * @returns {JSX.Element}
 */
const FormalCheck = (): JSX.Element => {
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

          <div className="shadow-box"></div>

          <div className="left-down">
            <MaskingTreatment></MaskingTreatment>
          </div>
        </div>

        <div className="detail-content-right">
          <div className="detail-content-right-up"></div>

          <div className="shadow-box"></div>

          <div className="detail-content-right-down">
            <IdentityVerificationDocDisplay></IdentityVerificationDocDisplay>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormalCheck;
