import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./MaskingTreatment.css";

const TextArea = styled(TextField)({
  width: "100%",
  ".css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root": {
    paddingTop: 4,
    paddingBottom: 4,
  },
});

const ReturnBtn = styled(Button)({
  height: "28px",
  backgroundColor: "#e3e3e3",
  color: "#333",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: "#1890ff",
    color: "#fff",
  },
});

const OverBtn = styled(Button)({
  height: "28px",
  backgroundColor: "#e53935",
  color: "#fff",
  fontSize: "12px",
  "&:hover": {
    backgroundColor: "#ff7875",
    color: "#fff",
  },
});

/**
 * MaskingTreatment
 * @returns {JSX.Element}
 */
const MaskingTreatment = (): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="masking-treatment">
      <section className="masking-treatment-mask-box">
        <div className="masking-treatment-masking-label">
          <span>マスキング処理</span>
        </div>

        <div className="masking-treatment-masking-radio">
          <div>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <label>あり</label>
          </div>
          <div>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            <label>なし</label>
          </div>
        </div>
      </section>

      <section>
        <div>取引時確認備考欄</div>
        <TextArea multiline rows={2} variant="outlined" />
      </section>

      <section>
        <div>メモ欄</div>
        <TextArea multiline rows={2} variant="outlined" />
      </section>

      <section className="masking-treatment-btn-box">
        <div className="masking-treatment-return-btn">
          <ReturnBtn>戻る</ReturnBtn>
        </div>
        <div className="masking-treatment-over-btn">
          <OverBtn>形式点検完了</OverBtn>
        </div>
      </section>
    </div>
  );
};

export default MaskingTreatment;
