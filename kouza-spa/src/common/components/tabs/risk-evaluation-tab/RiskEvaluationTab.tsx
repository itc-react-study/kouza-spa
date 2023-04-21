import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import React from "react";
import "./RiskEvaluationTab.css";

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

const StyledTextField = styled(TextField)({
  ".css-10botns-MuiInputBase-input-MuiFilledInput-input": {
    padding: "0px 0px 0px 10px",
    height: 30,
  },
});

const TabRadio = () => {
  return (
    <div className="risk-evaluation-tab-radio">
      <div>
        <Radio
          disabled
          value="3"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <label>H</label>
      </div>
      <div>
        <Radio
          disabled
          value="4"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
        <label>M</label>
      </div>
      <div>
        <Radio
          disabled
          value="0"
          name="radio-buttons"
          inputProps={{ "aria-label": "C" }}
        />
        <label>L</label>
      </div>
    </div>
  );
};

const RiskEvaluationTab = () => {
  return (
    <div className="risk-evaluation-tab">
      <div className="risk-evaluation-tab-title">KYCリスク評価</div>

      <div className="risk-evaluation-tab-kyc">
        <div>KYC受付番号</div>
        <div>
          <StyledTextField disabled fullWidth variant="filled" value={""} />
        </div>
        <div>
          <StyledButton variant="contained">リスク評価照会</StyledButton>
        </div>
      </div>

      <div className="risk-evaluation-tab-grid">
        <div>総合評価</div>
        <div>
          <TabRadio></TabRadio>
        </div>
        <div>顧客タイプ評価</div>
        <div>
          <TabRadio></TabRadio>
        </div>
        <div>国・地方評価</div>
        <div>
          <TabRadio></TabRadio>
        </div>
        <div>商品・サービス評価</div>
        <div>
          <TabRadio></TabRadio>
        </div>
      </div>

      <div className="risk-evaluation-tab-title top">受入方針</div>

      <div className="risk-evaluation-tab-comment">
        <div>
          <div className="risk-evaluation-tab-comment-left">コメント</div>
          <div className="risk-evaluation-tab-comment-right">
            <div className="risk-evaluation-tab-radio">
              <div>
                <Radio
                  disabled
                  value="3"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <label>受入可</label>
              </div>
              <div>
                <Radio
                  disabled
                  value="4"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <label>謝絶</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TextField multiline disabled fullWidth rows={4} variant="filled" />
        </div>
      </div>

      <div className="risk-evaluation-tab-button">
        <StyledButton variant="contained">受入判定登録</StyledButton>
      </div>

      <div className="risk-evaluation-tab-title">承認結果</div>

      <div className="risk-evaluation-tab-comment">
        {" "}
        <div>
          <div className="risk-evaluation-tab-comment-left">コメント</div>
          <div className="risk-evaluation-tab-comment-right">
            <div className="risk-evaluation-tab-radio">
              <div>
                <Radio
                  disabled
                  value="3"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <label>承認</label>
              </div>
              <div>
                <Radio
                  disabled
                  value="4"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <label>差戻</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TextField multiline disabled fullWidth rows={4} variant="filled" />
        </div>
      </div>

      <div className="risk-evaluation-tab-button">
        <StyledButton variant="contained">承認結果反映</StyledButton>
      </div>
    </div>
  );
};

export default RiskEvaluationTab;
