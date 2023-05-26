import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import "./ErrorTab.css";

interface Rows {
  registEifNameLabel: string;
  registEifResultLabel: string;
  registEifErrorCd: string;
  registEifErrorMsg: string;
  registEifName: string;
}

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
    paddingLeft: 10,
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
  registEifNameLabel: string,
  registEifResultLabel: string,
  registEifErrorCd: string,
  registEifErrorMsg: string,
  registEifName: string
) => {
  return {
    registEifNameLabel,
    registEifResultLabel,
    registEifErrorCd,
    registEifErrorMsg,
    registEifName,
  };
};

const list = [
  "新規[普通]",
  "印影受付情報コード登録",
  "ダイレクト契約新規",
  "サービス指定口座登録",
  "E通知登録",
  "ブランドデビットカード発行",
  "印影受付情報コード登録（デビット）",
  "実特法登録",
  "属性登録",
  "本人確認記録表登録",
  "KYC情報登録",
  "印影レス登録",
  "記録表イメージ登録",
];

const rows: Rows[] = [];

list.forEach((ele) => {
  rows.push(createData(ele, "", "", "", ""));
});

const ErrorTab = () => {
  return (
    <div className="error-tab">
      <div className="error-tab-title">エラー</div>

      <div className="error-tab-table">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">登録内容</StyledTableCell>
              <StyledTableCell align="center">結果</StyledTableCell>
              <StyledTableCell align="center">エラーコード</StyledTableCell>
              <StyledTableCell align="center">エラーメッセージ</StyledTableCell>
              <StyledTableCell align="center">SBT処理済み</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="left">
                  {row.registEifNameLabel}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.registEifResultLabel}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.registEifErrorCd}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.registEifErrorMsg}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Checkbox />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ErrorTab;
