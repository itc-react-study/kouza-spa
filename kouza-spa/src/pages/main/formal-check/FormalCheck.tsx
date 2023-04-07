import React, { useState } from "react";
import FormalPointQuantity1 from "../../../common/components/formal-point-quantity1/FormalPointQuantity1";
import HeaderInfoBox from "../../../common/components/header-info-box/HeaderInfoBox";
import IdentityVerificationDocDisplay from "../../../common/components/identity-verification-doc-display/IdentityVerificationDocDisplay";
import MaskingTreatment from "../../../common/components/masking-treatment/MaskingTreatment";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./FormalCheck.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="事前照会" {...a11yProps(0)} />
                <Tab label="制裁対象" {...a11yProps(1)} />
                <Tab label="CDD/EDD" {...a11yProps(2)} />
                <Tab label="リスク評価" {...a11yProps(3)} />
                <Tab label="商品選択" {...a11yProps(4)} />
                <Tab label="エラー" {...a11yProps(5)} />
                <Tab label="本人確認" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
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
              Item Seven
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
