import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React from "react";
import "./PreInquiryTab.css";

const StyledButton = styled(Button)({
  width: 110,
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

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    height: 32,
    padding: 0,
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #e3e3e3",
  },
  [`&.${tableCellClasses.body}`]: {
    height: 32,
    padding: 0,
    fontSize: 14,
    border: "1px solid #e3e3e3",
  },
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
});

const createData = (
  storeNo: string,
  storeNameKj: string,
  cifNo: string,
  nameKn: string,
  namekj: string,
  birthday: string,
  sex: string
) => {
  return { storeNo, storeNameKj, cifNo, nameKn, namekj, birthday, sex };
};

const rows = [
  createData(
    "123",
    "ｺﾝﾌﾟﾗJM",
    "14773989",
    "ﾔﾏﾀﾞ ｹﾝ",
    "山田　けん",
    "昭77-00-00",
    "男"
  ),
];

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

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">店 番</StyledTableCell>
              <StyledTableCell align="center">支店名</StyledTableCell>
              <StyledTableCell align="center">CIF番号</StyledTableCell>
              <StyledTableCell align="center">カナ氏名</StyledTableCell>
              <StyledTableCell align="center">取引先名</StyledTableCell>
              <StyledTableCell align="center">生年月日</StyledTableCell>
              <StyledTableCell align="center">性别</StyledTableCell>
              <StyledTableCell align="center">i-CIF照会</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.storeNo}>
                <StyledTableCell align="center">{row.storeNo}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.storeNameKj}
                </StyledTableCell>
                <StyledTableCell align="center">{row.cifNo}</StyledTableCell>
                <StyledTableCell align="center">{row.nameKn}</StyledTableCell>
                <StyledTableCell align="center">{row.namekj}</StyledTableCell>
                <StyledTableCell align="center">{row.birthday}</StyledTableCell>
                <StyledTableCell align="center">{row.sex}</StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-button">
        <StyledButton variant="contained">i-CIF照会</StyledButton>
      </div>

      <div className="pre-inquiry-tab-title">CIF照会結果</div>

      <div className="pre-inquiry-tab-cif">
        <div>
          <span className="pre-inquiry-tab-label">店 番</span>
          <span className="pre-inquiry-tab-value">123</span>
        </div>
        <div>
          <span className="pre-inquiry-tab-label">CIF番号</span>
          <span className="pre-inquiry-tab-value">14773989</span>
        </div>
        <div className="pre-inquiry-tab-link dark">被リンク新規</div>
        <div className="pre-inquiry-tab-link">
          <Checkbox />
        </div>
      </div>

      <div className="pre-inquiry-tab-address">
        <div className="pre-inquiry-tab-address-left">第1住所</div>
        <div className="pre-inquiry-tab-address-right">
          東京都調布市中央町１－１－１
        </div>
      </div>

      <div className="pre-inquiry-tab-address">
        <div className="pre-inquiry-tab-address-left">第2住所</div>
        <div className="pre-inquiry-tab-address-right">
          東京都調布市中央町１－１－１
        </div>
      </div>

      <div className="pre-inquiry-tab-address">
        <div className="pre-inquiry-tab-address-left">英字名</div>
        <div className="pre-inquiry-tab-address-right">Charlie</div>
      </div>

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">本確</StyledTableCell>
              <StyledTableCell align="center">CDD</StyledTableCell>
              <StyledTableCell align="center">EDD</StyledTableCell>
              <StyledTableCell align="center">禁通</StyledTableCell>
              <StyledTableCell align="center">人格区分</StyledTableCell>
              <StyledTableCell align="center">TEL1</StyledTableCell>
              <StyledTableCell align="center">TEL2</StyledTableCell>
              <StyledTableCell align="center">TEL3</StyledTableCell>
              <StyledTableCell align="center">本部</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">取引開始日</StyledTableCell>
              <StyledTableCell align="center">本人確認資料</StyledTableCell>
              <StyledTableCell align="center">本人確認資料番号</StyledTableCell>
              <StyledTableCell align="center">勤務先</StyledTableCell>
              <StyledTableCell align="center">共通印鑑</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">国籍1</StyledTableCell>
              <StyledTableCell align="center">国籍2</StyledTableCell>
              <StyledTableCell align="center">国籍3</StyledTableCell>
              <StyledTableCell align="center">
                海外住所
                <br /> (漢字)
              </StyledTableCell>
              <StyledTableCell align="center">
                海外住所
                <br /> (英字)
              </StyledTableCell>
              <StyledTableCell align="center">
                非<br />居
              </StyledTableCell>
              <StyledTableCell align="center">おるすばん番号</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">店 番</StyledTableCell>
              <StyledTableCell align="center">CIF番号</StyledTableCell>
              <StyledTableCell align="center">科 目</StyledTableCell>
              <StyledTableCell align="center">口座番号</StyledTableCell>
              <StyledTableCell align="center">種 類</StyledTableCell>
              <StyledTableCell align="center">通知区分</StyledTableCell>
              <StyledTableCell align="center">
                本<br />部
              </StyledTableCell>

              <StyledTableCell align="center">
                郵<br />便
              </StyledTableCell>
              <StyledTableCell align="center">
                E<br />帳
              </StyledTableCell>
              <StyledTableCell align="center">
                共<br />通
              </StyledTableCell>
              <StyledTableCell align="center">ダイレクト</StyledTableCell>

              <StyledTableCell align="center">
                異動
                <br />
                明細
                <br />
                照会
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">
                <Checkbox />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-button">
        <StyledButton variant="contained">異動明細照会</StyledButton>
      </div>

      <div className="pre-inquiry-tab-title">異動明細照会</div>

      <div className="pre-inquiry-tab-tips">
        <span>
          <span className="pre-inquiry-tab-tips-label">店 番</span>
          <span className="pre-inquiry-tab-tips-value">769</span>
        </span>
        <span>
          <span className="pre-inquiry-tab-tips-label">科 目</span>
          <span className="pre-inquiry-tab-tips-value">普通</span>
        </span>
        <span>
          <span className="pre-inquiry-tab-tips-label">口座番号</span>
          <span className="pre-inquiry-tab-tips-value">5257463</span>
        </span>
        <span>
          <span className="pre-inquiry-tab-tips-label">元帳残高</span>
          <span className="pre-inquiry-tab-tips-value">146,527</span>
        </span>
      </div>

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">処理日</StyledTableCell>
              <StyledTableCell align="center">摘要</StyledTableCell>
              <StyledTableCell align="center">支払金額</StyledTableCell>
              <StyledTableCell align="center">入金金額</StyledTableCell>
              <StyledTableCell align="center">処理店等</StyledTableCell>
              <StyledTableCell align="center">取引明細</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-button">
        <StyledButton variant="contained">取引明細照会</StyledButton>
      </div>

      <div className="pre-inquiry-tab-title">取引明細照会</div>

      <div className="pre-inquiry-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">取引金額</StyledTableCell>
              <StyledTableCell align="center">入払区分</StyledTableCell>
              <StyledTableCell align="center">入払摘要</StyledTableCell>
              <StyledTableCell align="center">カナ摘要</StyledTableCell>
              <StyledTableCell align="center">付込店</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
              <StyledTableCell align="center">123</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </div>

      <div className="pre-inquiry-tab-title">EDD先分類区分</div>

      <div className="pre-inquiry-tab-edd">
        <div className="pre-inquiry-tab-edd-input">
          <StyledTextField
            disabled
            fullWidth
            variant="filled"
            value={"マネロン対策不十分国の居住者"}
          />
        </div>
      </div>
    </div>
  );
};

export default PreInquiryTab;
