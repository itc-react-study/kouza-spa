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
import { randomTraderName } from "@mui/x-data-grid-generator";

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
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "支店号機名",
    field: "branchMachine",
    width: 130,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "顧客名",
    field: "accountName",
    width: 230,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "待ち\r\n時間",
    field: "waitingTime",
    width: 50,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: " 担当者（フルネーム）",
    field: "operatorNameFull",
    width: 115,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: " 経過時間",
    field: "passingTime",
    width: 50,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "点 検",
    field: "check",
    width: 80,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "オペレー<br />ション",
    field: "accountOpeningOperation",
    width: 80,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "再 鑑",
    field: "reCheck",
    width: 80,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "管理者<br />確認",
    field: "managerJudgement",
    width: 80,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "結 果",
    width: 230,
    field: "result",
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "店 番",
    field: "shopNo",
    width: 80,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
  {
    headerName: "口座番号",
    field: "accountNo",
    width: 200,
    headerAlign: "center",
    align: "center",
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
  },
];

const gridRows: GridRowsProp = [
  {
    id: 1,
    acceptanceNo: randomTraderName(),
    branchMachine: randomTraderName(),
    accountName: 25,
    waitingTime: randomTraderName(),
    operatorNameFull: randomTraderName(),
    passingTime: randomTraderName(),
    check: randomTraderName,
    accountOpeningOperation: randomTraderName(),
    reCheck: randomTraderName(),
    managerJudgement: 25,
    result: randomTraderName(),
    shopNo: randomTraderName(),
    accountNo: randomTraderName(),
  },
  {
    id: 2,
    acceptanceNo: randomTraderName(),
    branchMachine: randomTraderName(),
    accountName: 25,
    waitingTime: randomTraderName(),
    operatorNameFull: randomTraderName(),
    passingTime: randomTraderName(),
    check: randomTraderName,
    accountOpeningOperation: randomTraderName(),
    reCheck: randomTraderName(),
    managerJudgement: 25,
    result: randomTraderName(),
    shopNo: randomTraderName(),
    accountNo: randomTraderName(),
  },
  {
    id: 3,
    acceptanceNo: randomTraderName(),
    branchMachine: randomTraderName(),
    accountName: 25,
    waitingTime: randomTraderName(),
    operatorNameFull: randomTraderName(),
    passingTime: randomTraderName(),
    check: randomTraderName,
    accountOpeningOperation: randomTraderName(),
    reCheck: randomTraderName(),
    managerJudgement: 25,
    result: randomTraderName(),
    shopNo: randomTraderName(),
    accountNo: randomTraderName(),
  },
  {
    id: 4,
    acceptanceNo: randomTraderName(),
    branchMachine: randomTraderName(),
    accountName: 25,
    waitingTime: randomTraderName(),
    operatorNameFull: randomTraderName(),
    passingTime: randomTraderName(),
    check: randomTraderName,
    accountOpeningOperation: randomTraderName(),
    reCheck: randomTraderName(),
    managerJudgement: 25,
    result: randomTraderName(),
    shopNo: randomTraderName(),
    accountNo: randomTraderName(),
  },
  {
    id: 5,
    acceptanceNo: randomTraderName(),
    branchMachine: randomTraderName(),
    accountName: 25,
    waitingTime: randomTraderName(),
    operatorNameFull: randomTraderName(),
    passingTime: randomTraderName(),
    check: randomTraderName,
    accountOpeningOperation: randomTraderName(),
    reCheck: randomTraderName(),
    managerJudgement: 25,
    result: randomTraderName(),
    shopNo: randomTraderName(),
    accountNo: randomTraderName(),
  },
];

/**
 * TransactionsList
 *
 * @returns {JSX.Element}
 */
const TransactionsList = (): JSX.Element => {
  const handleInquery = () => {};
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
            <Button
              style={{ width: 100 }}
              variant="contained"
              onClick={handleInquery}
            >
              検索
            </Button>
          </div>
        </div>
      </div>

      <div className="transactions-sub-table">
        <div className="transactions-sub-table-left">
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

        <div className="transactions-sub-table-right">
          <Button
            style={{ width: 100, height: 30 }}
            variant="contained"
            onClick={handleInquery}
          >
            検索
          </Button>
        </div>
      </div>

      <div className="transactions-table" style={{ height: 400 }}>
        <StyledDataGridPro
          hideFooter
          showColumnVerticalBorder
          showCellVerticalBorder
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
    </div>
  );
};

export default TransactionsList;
