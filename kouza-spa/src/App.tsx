import React from "react";
import Login from "./pages/login/Login";
import { LicenseInfo } from "@mui/x-license-pro";
import "./App.css";

const App = () => {
  LicenseInfo.setLicenseKey(
    "x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e"
  );

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
};

export default App;
