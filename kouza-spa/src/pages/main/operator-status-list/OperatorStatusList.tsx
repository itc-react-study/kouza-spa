import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./OperatorStatusList.css";

import Button from "@mui/material/Button";

import { getApi } from "../../../common/service/api.service";
import { ApiIds } from "../../../constants/api-id.constant";
import {
  SH1APIOPE044RequestBody,
  SH1APIOPE044ResponseBody,
} from "../../../interfaces/api/sh1apiope044";
import {
  BUSINESS_ROLE,
  CODE_LOCATION_CD,
  ROLE_CD,
} from "../../../constants/code-list.constants";
import { AxiosError, AxiosResponse } from "axios";
import { MainContext } from "../../../store/store";
// import { ErrorCodes } from "../../../constants/error-code.constant";
// import { getMessage } from "../../../common/service/message.service";
// import { KouzaMessage } from "../../../interfaces/common/common";

interface List {
  code: string;
  label: string;
}

const responseBody = {
  inStandby: 1,
  inHand: 1,
  inPostTreatment: 1,
  inLeave1: 1,
  inLeave2: 1,
  inLeave3: 1,
};

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

  const { areaErrorMessage, setAreaErrorMessage, setIsMainLoading } =
    useContext(MainContext);

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

    return <Select sx={{ width: 200, height: 30 }}>{item}</Select>;
  };

  const BasicTable = () => {
    return (
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
    );
  };

  const handleInquery = async () => {
    console.log("areaErrorMessage", areaErrorMessage);

    // const kouzaMessage = getMessage(ErrorCodes.C30388) as KouzaMessage;

    // console.log("kouzaMessage", kouzaMessage);

    // if (kouzaMessage.display === "area") {
    //   setAreaErrorMessage(kouzaMessage.message);
    // }

    const param: SH1APIOPE044RequestBody = {
      ncoLocation: "ncoLocation",
    };

    // 在发送API请求前显示loading
    setIsMainLoading(true);

    try {
      const response = (await getApi(
        ApiIds.SH1APIOPE044,
        param
      )) as AxiosResponse<SH1APIOPE044ResponseBody, any>;

      setOperator(response.data);

      console.log("response", response);
    } catch (error: AxiosError<any,any>) {
      setAreaErrorMessage(error?.message);
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "16px 16px" }}>
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
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>店番</InputLabel>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>店名</InputLabel>
            </Item>
          </Grid>
        </Grid>
      </Grid>

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

      <BasicTable></BasicTable>
    </Box>
  );
};

export default OperatorStatusList;
