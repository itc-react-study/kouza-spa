import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./SanctionsTab.css";

const StyledTextField = styled(TextField)({
  ".css-10botns-MuiInputBase-input-MuiFilledInput-input": {
    padding: "0px 0px 0px 10px",
    height: 30,
  },
});

const StyledButton = styled(Button)({
  width: 120,
  height: 30,
  fontSize: 12,
  background: "#6083CB",
  "&:hover": {
    backgroundColor: "#40a9ff",
    color: "#fff",
  },
});

/**
 * 画面ID: SH1SCROPE025
 * 画面名: 制裁対象タブ
 * @returns {JSX.Element}
 */
const SanctionsTab = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState("3");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="sanctions-tab">
      <div className="sanctions-tab-title">検索結果（制裁対象者チェック）</div>

      <div className="sanctions-tab-grid">
        <div className="sanctions-tab-grid-title">制裁対象者</div>
        <div>
          <div className="sanctions-tab-grid-left">漢字</div>
          <div className="sanctions-tab-grid-right">
            <StyledTextField
              disabled
              fullWidth
              variant="filled"
              value={"検索済"}
            />
          </div>
        </div>
        <div>
          <div className="sanctions-tab-grid-left">カナ</div>
          <div className="sanctions-tab-grid-right">
            <StyledTextField
              disabled
              fullWidth
              variant="filled"
              value={"検索済"}
            />
          </div>
        </div>
        <div>
          <div className="sanctions-tab-grid-left">英字</div>
          <div className="sanctions-tab-grid-right">
            <StyledTextField
              disabled
              fullWidth
              variant="filled"
              value={"検索済"}
            />
          </div>
        </div>
        <div>
          <div className="sanctions-tab-grid-left">
            <StyledTextField disabled fullWidth variant="filled" value={"10"} />
          </div>
          <div className="sanctions-tab-grid-right padding">件</div>
        </div>
        <div className="sanctions-tab-grid-title">各種PEPs・否定的報道先</div>
        <div>
          <div className="sanctions-tab-grid-left">漢字</div>
          <div className="sanctions-tab-grid-right">
            <StyledTextField
              disabled
              fullWidth
              variant="filled"
              value={"検索済"}
            />
          </div>
        </div>
        <div>
          <div className="sanctions-tab-grid-left">カナ</div>
          <div className="sanctions-tab-grid-right">
            <StyledTextField
              disabled
              fullWidth
              variant="filled"
              value={"検索済"}
            />
          </div>
        </div>
        <div>
          <div className="sanctions-tab-grid-left">英字</div>
          <div className="sanctions-tab-grid-right">
            <StyledTextField
              disabled
              fullWidth
              variant="filled"
              value={"検索済"}
            />
          </div>
        </div>
        <div>
          <div className="sanctions-tab-grid-left">
            <StyledTextField disabled fullWidth variant="filled" value={"10"} />
          </div>
          <div className="sanctions-tab-grid-right padding">件</div>
        </div>
      </div>

      <div className="sanctions-tab-description">
        ※「居住者日本人」で1件以上、または「非居住者・外国人」の場合は照会ボタンを押下し詳細を確認。
      </div>

      <div className="sanctions-tab-button">
        <StyledButton variant="contained">制裁対象者照会</StyledButton>
      </div>

      <div className="sanctions-tab-title">PEPs等チェック</div>

      <div className="sanctions-tab-radio">
        <div>
          <Radio
            checked={selectedValue === "3"}
            onChange={handleChange}
            value="3"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
          <label>その他PEPs</label>
        </div>
        <div>
          <Radio
            checked={selectedValue === "4"}
            onChange={handleChange}
            value="4"
            name="radio-buttons"
            inputProps={{ "aria-label": "B" }}
          />
          <label>否定的報道先</label>
        </div>
        <div>
          <Radio
            checked={selectedValue === "0"}
            onChange={handleChange}
            value="0"
            name="radio-buttons"
            inputProps={{ "aria-label": "C" }}
          />
          <label>該当せず</label>
        </div>
      </div>
    </div>
  );
};

export default SanctionsTab;
