import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useSetAreaErrorMessageEffect } from "../../../common/service/hooks.service";
import { CODE_LOCATION_CD } from "../../../constants/code-list.constants";
import { DataGridPro, GridColDef, GridRowsProp } from "@mui/x-data-grid-pro";

import "./TransactionsList.css";

interface List {
  code: string;
  label: string;
}

const TextInput = styled(TextField)({
  ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
    height: 30,
  },
  ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: 30,
  },
});

const TextArea = styled(TextField)({
  ".css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root": {
    padding: "4px 11px",
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

const StyledDataGridPro = styled(DataGridPro)({
  ".css-1st16a5-MuiDataGrid-pinnedColumnHeaders": {
    backgroundColor: "#000",
    color: "#fff",
  },
  ".css-gl260s-MuiDataGrid-columnHeadersInner": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const StyledButton = styled(Button)({
  width: 100,
  height: 30,
});

const createData = (
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string
) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [createData("2件", "2件", "2件", "2件", "2件")];

const gridColumns: GridColDef[] = [
  {
    headerName: "受付番号",
    field: "acceptanceNo",
    width: 123,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "支店号機名",
    field: "branchMachine",
    width: 130,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "顧客名",
    field: "accountName",
    width: 230,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "待ち時間",
    field: "waitingTime",
    width: 100,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: " 担当者（フルネーム）",
    field: "operatorNameFull",
    width: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: " 経過時間",
    field: "passingTime",
    width: 100,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "点 検",
    field: "check",
    width: 80,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "オペレーション",
    field: "accountOpeningOperation",
    width: 150,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "再 鑑",
    field: "reCheck",
    width: 80,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "管理者確認",
    field: "managerJudgement",
    width: 150,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "結 果",
    width: 230,
    field: "result",
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "店 番",
    field: "shopNo",
    width: 80,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "口座番号",
    field: "accountNo",
    width: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "支店指定",
    field: "shopSelected",
    width: 80,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
  {
    headerName: "既存口座",
    field: "existingAccount",
    width: 80,
    headerAlign: "center",
    align: "center",
    sortable: false,
  },
];

const gridRows: GridRowsProp = [
  {
    id: 1,
    acceptanceNo: "2111000001101",
    branchMachine: "本店003",
    accountName: "山田　太郎",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "未済",
    accountOpeningOperation: "未済",
    reCheck: "",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 2,
    acceptanceNo: "2111000002101",
    branchMachine: "本店003",
    accountName: "山田　太郎",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "未済",
    reCheck: "",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 3,
    acceptanceNo: "2111000002101",
    branchMachine: "本店003",
    accountName: "山田　太郎",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "",
    managerJudgement: "25",
    result: "口座開設済",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 4,
    acceptanceNo: "2111000002101",
    branchMachine: "本店003",
    accountName: "山田　太郎",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "",
    managerJudgement: "25",
    result: "口座開設済エラー",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 5,
    acceptanceNo: "2111000002101",
    branchMachine: "本店003",
    accountName: "山田　太郎",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "",
    managerJudgement: "25",
    result: "口座開設未済エラー",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 6,
    acceptanceNo: "2111000003101",
    branchMachine: "本店003",
    accountName: "ＭＯＪＯＯＤ　ＭＯＨＡＭＥＤ　ＭＵＺＡＭＩＬ　ＣＵＺＯＮ",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "未済",
    accountOpeningOperation: "未済",
    reCheck: "",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 7,
    acceptanceNo: "2111000004101",
    branchMachine: "本店003",
    accountName: "ＭＯＪＯＯＤ　ＭＯＨＡＭＥＤ　ＭＵＺＡＭＩＬ　ＣＵＺＯＮ",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "未済",
    reCheck: "",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 8,
    acceptanceNo: "2111000004101",
    branchMachine: "本店003",
    accountName: "ＭＯＪＯＯＤ　ＭＯＨＡＭＥＤ　ＭＵＺＡＭＩＬ　ＣＵＺＯＮ",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "",
    managerJudgement: "25",
    result: "口座開設済",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 9,
    acceptanceNo: "2111000004101",
    branchMachine: "本店003",
    accountName: "ＭＯＪＯＯＤ　ＭＯＨＡＭＥＤ　ＭＵＺＡＭＩＬ　ＣＵＺＯＮ",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "",
    managerJudgement: "25",
    result: "口座開設済エラー",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 10,
    acceptanceNo: "2111000004101",
    branchMachine: "本店003",
    accountName: "ＭＯＪＯＯＤ　ＭＯＨＡＭＥＤ　ＭＵＺＡＭＩＬ　ＣＵＺＯＮ",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "",
    managerJudgement: "25",
    result: "口座開設未済エラー",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 11,
    acceptanceNo: "2111000005101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "未済",
    accountOpeningOperation: "未済",
    reCheck: "",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 12,
    acceptanceNo: "2111000006101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "未済",
    reCheck: "",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 13,
    acceptanceNo: "2111000007101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "依頼中",
    reCheck: "未済",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 14,
    acceptanceNo: "2111000008101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "依頼中",
    reCheck: "未済",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 15,
    acceptanceNo: "2111000009101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "待ち",
    reCheck: "完了",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 16,
    acceptanceNo: "2111000010101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "待ち",
    reCheck: "完了",
    managerJudgement: "25",
    result: "",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 17,
    acceptanceNo: "2111000010101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "完了",
    managerJudgement: "25",
    result: "口座開設済",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 18,
    acceptanceNo: "2111000010101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "完了",
    managerJudgement: "25",
    result: "口座開設済エラー",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
  {
    id: 19,
    acceptanceNo: "2111000010101",
    branchMachine: "本店003",
    accountName: "三菱　由依",
    waitingTime: "13",
    operatorNameFull: "山本太郎",
    passingTime: "13",
    check: "完了",
    accountOpeningOperation: "完了",
    reCheck: "完了",
    managerJudgement: "25",
    result: "口座開設未済エラー",
    shopNo: "203",
    accountNo: "",
    shopSelected: "あり",
    existingAccount: "あり",
  },
];

/**
 * TransactionsList
 *
 * @returns {JSX.Element}
 */
const TransactionsList = (): JSX.Element => {
  const handleInquiry = () => {};

  /**
   * renderSelect
   *
   * @param {List[]} List
   * @return {JSX.Element}
   */
  const renderSelect = (List: List[]): JSX.Element => {
    const item = List.map((ele: List, index: number) => {
      return (
        <MenuItem key={index} value={ele.code}>
          {ele.label}
        </MenuItem>
      );
    });

    return <Select sx={{ width: "100%", height: 30 }}>{item}</Select>;
  };

  useSetAreaErrorMessageEffect();

  return (
    <div className="transactions-list">
      <div className="transactions-list-status">
        {/* 拠点別 */}
        <div className="transactions-list-status-div">
          <div className="transactions-list-status-div-left">
            <span>拠点別</span>
          </div>
          <div className="transactions-list-status-div-right">
            {renderSelect(CODE_LOCATION_CD)}
          </div>
        </div>
        {/* 担当者名 */}
        <div className="transactions-list-status-div">
          <div className="transactions-list-status-div-left">
            <span>担当者名</span>
          </div>
          <div className="transactions-list-status-div-right">
            {renderSelect(CODE_LOCATION_CD)}
          </div>
        </div>
        {/* 処理状況 */}
        <div className="transactions-list-status-div">
          <div className="transactions-list-status-div-left">
            <span>処理状況</span>
          </div>
          <div className="transactions-list-status-div-right">
            {renderSelect(CODE_LOCATION_CD)}
          </div>
        </div>
        {/* 設置店番 */}
        <div className="transactions-list-status-div">
          <div className="transactions-list-status-div-left">
            <span>設置店番</span>
          </div>
          <div className="transactions-list-status-div-right">
            <TextInput fullWidth />
          </div>
        </div>
        {/* 設置店名 */}
        <div className="transactions-list-status-div">
          <div className="transactions-list-status-div-left">
            <span>設置店名</span>
          </div>
          <div className="transactions-list-status-div-right">
            <TextInput fullWidth />
          </div>
        </div>
        <div className="transactions-list-status-div">
          <div className="transactions-list-status-div-left"></div>
          <div className="transactions-list-status-div-right">
            <StyledButton variant="contained" onClick={handleInquiry}>
              検索
            </StyledButton>
          </div>
        </div>
      </div>

      <div className="transactions-list-subTable">
        <div className="transactions-list-subTable-left">
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">形式点検待ち</StyledTableCell>
                <StyledTableCell align="center">
                  オペレーション待ち
                </StyledTableCell>
                <StyledTableCell align="center">管理者確認待ち</StyledTableCell>
                <StyledTableCell align="center">再鑑待ち</StyledTableCell>
                <StyledTableCell align="center">口座開設済</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.protein}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="transactions-list-subTable-right">
          <StyledButton variant="contained" onClick={handleInquiry}>
            最新化
          </StyledButton>
        </div>
      </div>

      <div className="transactions-list-table">
        <StyledDataGridPro
          hideFooter
          showColumnVerticalBorder
          showCellVerticalBorder
          disableColumnFilter
          disableColumnMenu
          disableColumnResize
          disableColumnSelector
          rowHeight={30}
          rows={gridRows}
          columns={gridColumns}
          pinnedColumns={{
            left: [
              "acceptanceNo",
              "branchMachine",
              "accountName",
              "waitingTime",
              "operatorNameFull",
              "passingTime",
            ],
          }}
        />
      </div>

      <div className="transactions-list-information">
        <div className="transactions-list-information-button">
          <p>連絡事項</p>
          <StyledButton variant="contained" onClick={handleInquiry}>
            更 新
          </StyledButton>
        </div>
        <div className="transactions-list-information-textArea">
          <TextArea
            fullWidth
            multiline
            rows={4}
            defaultValue="掲示板の内容テスト用"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
