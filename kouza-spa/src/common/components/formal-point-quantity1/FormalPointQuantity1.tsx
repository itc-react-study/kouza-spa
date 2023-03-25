import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import "./FormalPointQuantity1.css";
import InspectBtn from "../inspect-btn/InspectBtn";

/**
 * 形式点検 顧客情報
 * @returns {JSX.Element}
 */
const FormalPointQuantity1 = (): JSX.Element => {
  return (
    <div className="customer-box">
      {/* 顧客情報 */}
      <div className="customer-box-title">顧客情報</div>

      <div className="customer-box-content">
        <div>
          {/* おなまえ */}
          <div className="flag-style">
            <div className="flag-style-left">
              <span>おなまえ</span>
            </div>
            <div className="flag-style-middle"></div>
            <div className="flag-style-right">
              <span>点検者</span>
            </div>
          </div>

          {/* 漢 字 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>漢 字</span>
            </div>
            <div className="flag-style-middle">
              <TextField multiline disabled rows={4} variant="filled" />
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>

          {/* カ ナ */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>カ ナ</span>
            </div>
            <div className="flag-style-middle">
              <TextField multiline disabled rows={4} variant="filled" />
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>

          {/* 英 字 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>英 字</span>
            </div>
            <div className="flag-style-middle">
              <TextField multiline disabled rows={4} variant="filled" />
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>
        </div>

        <hr />

        <div>
          {/* おところ */}
          <div className="flag-style">
            <div className="flag-style-left">
              <span>おところ</span>
            </div>
            <div className="flag-style-middle"></div>
            <div className="flag-style-right"></div>
          </div>

          {/* 郵便番号 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>郵便番号</span>
            </div>
            <div className="flag-style-middle">
              <TextField multiline disabled variant="filled" />
            </div>
            <div className="flag-style-right"></div>
          </div>

          {/* 郵便番号 textArea */}
          <div className="flag-style">
            <div className="flag-style-left"></div>
            <div className="flag-style-middle">
              <TextField multiline disabled rows={4} variant="filled" />
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>

          {/* 漢 字 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>漢 字</span>
            </div>
            <div className="flag-style-middle">
              <TextField multiline disabled rows={2} variant="filled" />
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>

          {/* カ ナ */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>カ ナ</span>
            </div>
            <div className="flag-style-middle">
              <TextField multiline disabled rows={4} variant="filled" />
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>
        </div>

        <hr />

        <div>
          {/* 生年月日 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>生年月日</span>
            </div>
            <div className="flag-style-middle">
              <div className="flag-style-middle-select">
                <Select disabled variant="filled">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div className="flag-style-middle-year">
                <TextField multiline disabled variant="filled" />
              </div>
              /
              <div className="flag-style-middle-month">
                <TextField multiline disabled variant="filled" />
              </div>
              /
              <div className="flag-style-middle-day">
                <TextField multiline disabled variant="filled" />
              </div>
            </div>
            <div className="flag-style-right">
              <InspectBtn />
            </div>
          </div>
        </div>

        <hr />

        <div>
          {/* 電話番号 */}
          <div className="flag-style">
            <div className="flag-style-left">
              <span>電話番号</span>
            </div>
            <div className="flag-style-middle"></div>
            <div className="flag-style-right"></div>
          </div>

          {/* 自 宅 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>自 宅</span>
            </div>
            <div className="flag-style-middle right">
              <TextField multiline disabled variant="filled" />
            </div>
          </div>

          {/* 携 帯 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>携 帯</span>
            </div>
            <div className="flag-style-middle right">
              <TextField multiline disabled variant="filled" />
            </div>
          </div>
        </div>

        <div>
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>性 別</span>
            </div>
            <div className="flag-style-middle right">
              <Select disabled variant="filled">
                <MenuItem value={10}>男</MenuItem>
                <MenuItem value={20}>女</MenuItem>
              </Select>
              <span>人格区分</span>
              <Select disabled variant="filled">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </div>

          {/* Eメールアドレス */}
          <div className="flag-style">
            <div className="flag-style-left address-left bold">
              <span>Eメールアドレス</span>
            </div>
            <div className="flag-style-middle address-right">
              <TextField multiline disabled rows={6} variant="filled" />
            </div>
          </div>
        </div>
      </div>

      {/* 本人確認情報 */}
      <div className="customer-box-title">本人確認情報</div>

      <div className="customer-box-content">
        <div>
          <div className="flag-style">
            <div className="flag-style-left item1 bold">
              <span>確認書類名</span>
            </div>
            <div className="flag-style-middle item2">
              <span>コード</span>
            </div>
            <div className="flag-style-right item2">
              <span>現住所確認</span>
            </div>
            <div className="flag-style-right item2">
              <span>CIF登録</span>
            </div>
          </div>

          <div className="flag-style">
            <div className="flag-style-left item1">
              <Select disabled variant="filled">
                <MenuItem value={10}>男</MenuItem>
                <MenuItem value={20}>女</MenuItem>
              </Select>
            </div>
            <div className="flag-style-middle item2">
              <TextField multiline disabled variant="filled" />
            </div>
            <div className="flag-style-right item2">
              <Radio disabled />
            </div>
            <div className="flag-style-right item2">
              <Radio disabled />
            </div>
          </div>

          {/* 書類名1 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>書類名</span>
            </div>
            <div className="flag-style-middle right">
              <TextField multiline disabled variant="filled" />
            </div>
          </div>

          <div className="flag-style">
            <div className="flag-style-left item1">
              <Select disabled variant="filled">
                <MenuItem value={10}>男</MenuItem>
                <MenuItem value={20}>女</MenuItem>
              </Select>
            </div>
            <div className="flag-style-middle item2">
              <TextField multiline disabled variant="filled" />
            </div>
            <div className="flag-style-right item2">
              <Radio disabled />
            </div>
            <div className="flag-style-right item2">
              <Radio disabled />
            </div>
          </div>

          {/* 書類名2 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>書類名</span>
            </div>
            <div className="flag-style-middle right">
              <TextField multiline disabled variant="filled" />
            </div>
          </div>

          <div className="flag-style">
            <div className="flag-style-left item1">
              <Select disabled variant="filled">
                <MenuItem value={10}>男</MenuItem>
                <MenuItem value={20}>女</MenuItem>
              </Select>
            </div>
            <div className="flag-style-middle item2">
              <TextField multiline disabled variant="filled" />
            </div>
            <div className="flag-style-right item2"></div>
            <div className="flag-style-right item2"></div>
          </div>

          {/* 書類名3 */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>書類名</span>
            </div>
            <div className="flag-style-middle right">
              <TextField multiline disabled variant="filled" />
            </div>
          </div>

          {/* 行員ID */}
          <div className="flag-style">
            <div className="flag-style-left bold">
              <span>行員ID</span>
            </div>
            <div className="flag-style-middle right">
              <TextField multiline disabled variant="filled" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormalPointQuantity1;
