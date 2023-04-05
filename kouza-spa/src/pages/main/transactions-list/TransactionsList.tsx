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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    minWidth: 200,
    height: 32,
    padding: 0,
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #e3e3e3",
  },
  [`&.${tableCellClasses.body}`]: {
    minWidth: 200,
    height: 32,
    padding: 0,
    fontSize: 14,
    border: "1px solid #e3e3e3",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
}));

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

      <div className="transactions-table"></div>
    </div>
  );
};

export default TransactionsList;
