import React from "react";
import IdentityVerificationDocDisplay from "../../identity-verification-doc-display/IdentityVerificationDocDisplay";
import "./IdentityVerificationDocTab.css";


const IdentityVerificationDocTab = () => {
  return (
    <div className="identity-verification-doc-tab">
      <div className="identity-verification-doc-tab-title">本人確認</div>
      <IdentityVerificationDocDisplay />
    </div>
  );
};

export default IdentityVerificationDocTab;
