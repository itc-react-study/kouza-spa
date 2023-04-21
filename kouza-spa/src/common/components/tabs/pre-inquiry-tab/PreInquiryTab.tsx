import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import "./PreInquiryTab.css";

const StyledButton = styled(Button)({
  width: 100,
  height: 30,
  background: "#6083CB",
  "&:hover": {
    backgroundColor: "#40a9ff",
    color: "#fff",
  },
});

/**
 * PreInquiryTab
 *
 * @returns {JSX.Element} }
 */
const PreInquiryTab = (): JSX.Element => {
  return (
    <div className="pre-inquiry-tab">
      <div className="pre-inquiry-tab-title">検索条件</div>

      <div className="pre-inquiry-tab-search">
        <div className="pre-inquiry-tab-search-div">
          <div className="pre-inquiry-tab-search-div-left">
            <span>検索方法</span>
          </div>
          <div className="pre-inquiry-tab-search-div-right">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>
        <div className="pre-inquiry-tab-search-div">
          <div className="pre-inquiry-tab-search-div-left">
            <span>人格</span>
          </div>
          <div className="pre-inquiry-tab-search-div-right">
            <Select fullWidth>
              <MenuItem value={10}>個人</MenuItem>
              <MenuItem value={20}>法人</MenuItem>
            </Select>
          </div>
        </div>
        <div className="pre-inquiry-tab-search-div">
          <div className="pre-inquiry-tab-search-radio-left">
            <span>カナのみ検索</span>
          </div>
          <div className="pre-inquiry-tab-search-radio-right">
            <Checkbox />
          </div>
        </div>
        <div className="pre-inquiry-tab-search-div">
          <div className="pre-inquiry-tab-search-radio-left">
            <span>英字名なし</span>
          </div>
          <div className="pre-inquiry-tab-search-radio-right">
            <Checkbox />
          </div>
        </div>
        <div className="pre-inquiry-tab-search-button">
          <StyledButton variant="contained">検索</StyledButton>
        </div>
      </div>

      <div className="pre-inquiry-tab-title">検索結果</div>
    </div>
  );
};

export default PreInquiryTab;
