import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import React from "react";
import "./CddEddTab.css";

const StyledButton = styled(Button)({
  width: 57,
  minWidth: 57,
  height: 30,
  fontSize: 12,
  marginRight: 10,
  marginLeft: 10,
  background: "#6083CB",
  "&:hover": {
    backgroundColor: "#40a9ff",
    color: "#fff",
  },
});

const CddEddTab = () => {
  return (
    <div className="cdd-edd-tab">
      <div className="cdd-edd-tab-title">基本情報</div>

      <div className="cdd-edd-tab-info">
        <FormGroup>
          <div className="cdd-edd-tab-info-transaction">
            <div>取引目的</div>
            <div>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="生計費決済"
              />

              <FormControlLabel
                control={<Checkbox size="small" />}
                label="貯蓄/資産運用"
              />

              <FormControlLabel
                control={<Checkbox size="small" />}
                label="200万円超/回の現金取引"
              />
            </div>

            <div>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="給与受取/年金受取"
              />

              <FormControlLabel
                control={<Checkbox size="small" />}
                label="外国送金及び送金受取"
              />

              <FormControlLabel
                control={<Checkbox size="small" />}
                label="外貨両替"
              />
            </div>

            <div>
              <div>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="借入・ローン"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="貿易取引"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="仮想通貨取引"
                />
              </div>
            </div>

            <div>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="事業性決済"
              />

              <FormControlLabel
                control={<Checkbox size="small" />}
                label="貸金庫取引"
              />
            </div>
          </div>
        </FormGroup>

        <div className="cdd-edd-tab-info-grid">
          <div>通常月の取引予定額</div>
          <div>
            <div className="cdd-edd-tab-info-grid-select">
              <Select fullWidth>
                <MenuItem value={10}>居住者日本人</MenuItem>
                <MenuItem value={20}>非居住者・外国人</MenuItem>
              </Select>
            </div>
          </div>

          <div>職 業</div>
          <div>
            <div className="cdd-edd-tab-info-grid-select">
              <Select fullWidth>
                <MenuItem value={10}>居住者日本人</MenuItem>
                <MenuItem value={20}>非居住者・外国人</MenuItem>
              </Select>
            </div>
            <div className="cdd-edd-tab-info-grid-text1">業種その他(詳細)</div>
            <div>
              <div className="cdd-edd-tab-info-grid-select">
                <Select fullWidth>
                  <MenuItem value={10}>居住者日本人</MenuItem>
                  <MenuItem value={20}>非居住者・外国人</MenuItem>
                </Select>
              </div>
            </div>
          </div>

          <div>業 種</div>
          <div>
            <div className="cdd-edd-tab-info-grid-select">
              <Select fullWidth>
                <MenuItem value={10}>居住者日本人</MenuItem>
                <MenuItem value={20}>非居住者・外国人</MenuItem>
              </Select>
            </div>
            <div className="cdd-edd-tab-info-grid-text1">
              個人事業主/自営業(詳細)
            </div>
            <div>
              <div className="cdd-edd-tab-info-grid-select">
                <Select fullWidth>
                  <MenuItem value={10}>居住者日本人</MenuItem>
                  <MenuItem value={20}>非居住者・外国人</MenuItem>
                </Select>
              </div>
            </div>
          </div>

          <div>勤務先名(カナ)</div>
          <div>
            <div className="cdd-edd-tab-info-grid-input">
              <TextField fullWidth></TextField>
            </div>
          </div>

          <div>勤務先名(漢字)</div>
          <div>
            <div className="cdd-edd-tab-info-grid-input">
              <TextField fullWidth></TextField>
            </div>
          </div>

          <div>勤務先住所</div>
          <div>
            <div className="cdd-edd-tab-info-grid-post">
              <TextField fullWidth></TextField>
            </div>

            <StyledButton variant="contained">検索</StyledButton>

            <div className="cdd-edd-tab-info-grid-address">
              <TextField fullWidth></TextField>
            </div>
          </div>

          <div>勤務先電話番号</div>
          <div>
            <div className="cdd-edd-tab-info-grid-tel">
              <TextField fullWidth></TextField>
            </div>
          </div>
        </div>
      </div>

      <div className="cdd-edd-tab-title">制裁対象国</div>

      <div className="cdd-edd-tab-info-grid">
        <div>制裁対象国</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>
        <div>制裁対象国1</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">制裁対象国2</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">制裁対象国3</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>
        <div>取引/資産</div>
        <div>
          <div className="cdd-edd-tab-info-grid-input">
            <TextField fullWidth></TextField>
          </div>
        </div>
      </div>

      <div className="cdd-edd-tab-title">資産・収入</div>

      <div className="cdd-edd-tab-info-grid">
        <div>資 産</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text3">
           
            <span>千円</span>
            <span>収入の背景</span>
          </div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>

        <div>資産の背景</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text3">
            <span>千円</span>
            <span>資産の背景</span>
          </div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      <div className="cdd-edd-tab-title">国籍・在留資格</div>

      <div className="cdd-edd-tab-info-grid">
        <div>国籍1</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">国籍2</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">国籍3</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>

        <div>在留資格</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2"></div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">許可年月日</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>

        <div>在留資格満了日</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">入国6カ月超確認</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">居住国</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      <div className="cdd-edd-tab-title">外国送金/受取</div>

      <div className="cdd-edd-tab-info-grid">
        <div>外国送金の目的</div>
        <div>
          <div className="cdd-edd-tab-info-grid-input">
            <TextField fullWidth></TextField>
          </div>
        </div>

        <div>送金相手国1</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">送金相手国2</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">送金相手国3</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>

        <div>送金通貨種類1</div>
        <div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">送金通貨種類2</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
          <div className="cdd-edd-tab-info-grid-text2">送金通貨種類3</div>
          <div className="cdd-edd-tab-info-grid-select">
            <Select fullWidth>
              <MenuItem value={10}>居住者日本人</MenuItem>
              <MenuItem value={20}>非居住者・外国人</MenuItem>
            </Select>
          </div>
        </div>

        <div>高リスク職業業種区分</div>
        <div>
          <div className="cdd-edd-tab-info-grid-input">
            <TextField fullWidth></TextField>
          </div>
        </div>
      </div>

      <div className="cdd-edd-tab-title">
        200万円超/回現金取引・通常月1,000万円超
      </div>

      <div className="cdd-edd-tab-info-grid">
        <div>200万円超/回目的</div>
        <div>
          <div className="cdd-edd-tab-info-grid-input">
            <TextField fullWidth></TextField>
          </div>
        </div>
        <div>通常月1,000万円目的</div>
        <div>
          <div className="cdd-edd-tab-info-grid-input">
            <TextField fullWidth></TextField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CddEddTab;
