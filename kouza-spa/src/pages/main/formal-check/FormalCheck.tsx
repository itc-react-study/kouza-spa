import React, { useState } from "react";
import FormalPointQuantity1 from "../../../common/components/formal-point-quantity1/FormalPointQuantity1";
import HeaderInfoBox from "../../../common/components/header-info-box/HeaderInfoBox";
import IdentityVerificationDocDisplay from "../../../common/components/identity-verification-doc-display/IdentityVerificationDocDisplay";
import MaskingTreatment from "../../../common/components/masking-treatment/MaskingTreatment";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./FormalCheck.css";
import styled from "@emotion/styled";
import PreInquiryTab from "../../../common/components/tabs/pre-inquiry-tab/PreInquiryTab";
import IdentityVerificationDocTab from "../../../common/components/tabs/identity-verification-doc-tab/IdentityVerificationDocTab";
import SanctionsTab from "../../../common/components/tabs/sanctions-tab/SanctionsTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabStyle = {
  background: "#e9e9e9",
  color: "#000",
  marginRight: 2,
  "&.Mui-selected": {
    background: "#696969",
    color: "#fff",
  },
};

const StyledTab = styled(Tab)(tabStyle);

const a11yProps = (index: number): { id: string; "aria-controls": string } => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ height: "calc(100% - 48px)", overflow: "auto" }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
};

/**
 * 形式点検
 * @returns {JSX.Element}
 */
const FormalCheck = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = { background: "#e9e9e9", marginRight: 0.5 };

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
          <div className="detail-content-right-up">
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="basic tabs example"
                TabIndicatorProps={{
                  sx: { backgroundColor: "transparent" },
                }}
              >
                <StyledTab sx={tabStyle} label="事前照会" {...a11yProps(0)} />
                <StyledTab sx={tabStyle} label="制裁対象" {...a11yProps(1)} />
                <StyledTab sx={tabStyle} label="CDD/EDD" {...a11yProps(2)} />
                <StyledTab sx={tabStyle} label="リスク評価" {...a11yProps(3)} />
                <StyledTab sx={tabStyle} label="商品選択" {...a11yProps(4)} />
                <StyledTab sx={tabStyle} label="エラー" {...a11yProps(5)} />
                <StyledTab sx={tabStyle} label="本人確認" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <PreInquiryTab></PreInquiryTab>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SanctionsTab></SanctionsTab>
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
              <IdentityVerificationDocTab></IdentityVerificationDocTab>
            </TabPanel>
          </div>

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
