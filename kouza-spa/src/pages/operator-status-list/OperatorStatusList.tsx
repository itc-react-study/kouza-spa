import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./OperatorStatusList.css";
import {
  BUSINESS_ROLE,
  CODE_LOCATION_CD,
  ROLE_CD,
  STATUS,
} from "../../assets/configs/CONSTANT";
import { SH1APIOPE044RequestBody } from "../../assets/interfaces/api/sh1apiope044";
import { getApi } from "../../common/service/ApiUtils";
import { ApiIds } from "../../assets/constants/api-id.constant";
import { useEffect } from "react";

interface List {
  code: string;
  label: string;
}
interface Operator {
  operatorID: string;
  operatorName: string;
  necLocation: string;
  roleNo: string;
  roleName: string;
  operatorStatus: string;
  passingTime: string;
  shopNoSetted: string;
  tabletName: string;
  businessRoleName: string;
}

const responseBody = {
  inStandby: 1,
  inHand: 1,
  inPostTreatment: 1,
  inLeave1: 1,
  inLeave2: 1,
  inLeave3: 1,
  operatorList: [
    {
      operatorID: "XXX00001",
      operatorName: "社員A",
      necLocation: "新宿",
      roleNo: "2",
      roleName: "CSR",
      operatorStatus: "待機中",
      passingTime: "1",
      shopNoSetted: "0012",
      tabletName: "新規账号開設新規账号開設账号開設",
      businessRoleName: "新規账号開設",
    },
    {
      operatorID: "XXX00002",
      operatorName: "社員B",
      necLocation: "新宿",
      roleNo: "2",
      roleName: "CSR",
      operatorStatus: "待機中",
      passingTime: "1",
      shopNoSetted: "0012",
      tabletName: "新規账号開設新規账号開設账号開設",
      businessRoleName: "新規账号開設",
    },
  ],
};

// top style
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

/**
 * オペレータ状況一覧
 *
 * @return {JSX.Element}
 */
const OperatorStatusList = (): JSX.Element => {
  const [operator, setOperator] = useState<any>(responseBody);
  const [currentPage, setCurrentPage] = useState(1);
  const perPageSize = 10;
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

    return <Select sx={{ width: 180, height: 30 }}>{item}</Select>;
  };

  /**
   * BasicTable
   *
   * @returns
   */
  const BasicTable = () => {
    return (
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">待機中</TableCell>
                <TableCell align="center">受付中</TableCell>
                <TableCell align="center">後処理中</TableCell>
                <TableCell align="center">離席 1</TableCell>
                <TableCell align="center">離席 2</TableCell>
                <TableCell align="center">離席 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{operator.inStandby}</TableCell>
                <TableCell align="center">{operator.inHand}</TableCell>
                <TableCell align="center">{operator.inPostTreatment}</TableCell>
                <TableCell align="center">{operator.inLeave1}</TableCell>
                <TableCell align="center">{operator.inLeave2}</TableCell>
                <TableCell align="center">{operator.inLeave3}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          style={{
            width: 50,
            height: 40,
            fontSize: 10,
            marginLeft: 18,
            marginRight: 12,
          }}
        >
          最新化
        </Button>
      </Box>
    );
  };

  const handleInquery = async () => {
    const param: SH1APIOPE044RequestBody = {
      ncoLocation: "",
      roleNo: "",
      businessRole: "",
      operatorStatus: "",
      shopNoSetted: "",
      shopNameSetted: "",
    };

    const response = await getApi(ApiIds.SH1APIOPE044, param);
    console.log("response", response);

    setOperator(response.data);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * perPageSize;
  const endIndex = startIndex + perPageSize;
  const currentData = operator.operatorList.slice(startIndex, endIndex);

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  /**
   * styleTable
   *
   * @returns
   */
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  /**
   * pagination
   *
   * @returns
   */

  //
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* top */}
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>
              <InputLabel>拠点別</InputLabel>
              {renderSelect(CODE_LOCATION_CD)}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>権限スキル</InputLabel>
              {renderSelect(ROLE_CD)}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>業務スキル</InputLabel>
              {renderSelect(BUSINESS_ROLE)}
            </Item>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>
              <InputLabel>ステータス</InputLabel>
              {renderSelect(STATUS)}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>店番</InputLabel>
              <input
                type="text"
                style={{
                  width: "174px",
                  height: "26px",
                  borderRadius: "4px",
                  borderColor: "#c4c4c4",
                  borderWidth: "1px",
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>店名</InputLabel>
              <input
                type="text"
                style={{
                  width: "174px",
                  height: "26px",
                  borderRadius: "4px",
                  borderColor: "#c4c4c4",
                  borderWidth: "1px",
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Grid>

      {/* Box style & btn */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Button
          style={{ width: 150 }}
          variant="contained"
          onClick={handleInquery}
        >
          検索
        </Button>
      </Box>

      {/* basicTable */}
      <BasicTable></BasicTable>

      {/* styleTable */}
      <TableContainer component={Paper} style={{ marginTop: 30 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">オペレータID</StyledTableCell>
              <StyledTableCell align="center">オペレータ名</StyledTableCell>
              <StyledTableCell align="center">拠点</StyledTableCell>
              <StyledTableCell align="center">権限</StyledTableCell>
              <StyledTableCell align="center">ステータス</StyledTableCell>
              <StyledTableCell align="center">経過時間</StyledTableCell>
              <StyledTableCell align="center">店番</StyledTableCell>
              <StyledTableCell align="center">支店号記名</StyledTableCell>
              <StyledTableCell align="center">業務スキル</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((operatorRow: Operator, index: number) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="center">
                  {operatorRow.operatorID}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.operatorName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.necLocation}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.roleName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.operatorStatus}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.passingTime}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.shopNoSetted}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.tabletName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operatorRow.businessRoleName}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" style={{ marginTop: 10 }}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(operator.operatorList.length / perPageSize)}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default OperatorStatusList;
