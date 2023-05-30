import React, { useContext, useEffect, useState } from "react";
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
  TREATMENT_STATUS,
} from "../../../constants/code-list.constants";
import { AxiosResponse } from "axios";
import { MainContext } from "../../../store/store";
import { useSetAreaErrorMessageEffect } from "../../../common/service/hooks.service";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { set } from "react-hook-form";
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

const detailResponseBody = {
  operatorID: 1,
  operatorName: 1,
  necLocation: 1,
  roleNo: 1,
  roleName: 1,
  operatorStatus: 1,
  passingTime: 1,
  shopNoSetted: 1,
  tabletName: 1,
  businessRoleName: 1,
};

//搜索对象
interface SearchParams {
  selectedNcoLocation: string;
  selectedRoleNo: string;
  selectedBusinessRole: string;
  selectedOperatorStatus: string;
  inputShopNoSetted: string;
  inputShopNameSetted: string;
}
//默认搜索对象 最新化使用
const DEFAULT_SEARCH_PARAMS: SearchParams = {
  selectedNcoLocation: "",
  selectedRoleNo: "",
  selectedBusinessRole: "",
  selectedOperatorStatus: "",
  inputShopNoSetted: "",
  inputShopNameSetted: "",
};

const renderTextField = (
  label: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
): JSX.Element => {
  return (
    <TextField onChange={onChange} sx={{ flexGrow: 1, padding: "20px 16px" }} />
  );
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
  const [detailedTable, setDetailTable] = useState<any>(detailResponseBody);
  const [currentPageData, setCurrentPageData] = useState<any[]>([]);
  const { areaErrorMessage, setAreaErrorMessage } = useContext(MainContext);
  const [locationCode, setLocationCode] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [businessRole, setBusinessRole] = useState("");
  const [treatmentStatus, setTreatmentStatus] = useState("");
  const [storeNumber, setStoreNumber] = useState("");
  const [storeName, setStoreName] = useState("");
  const [searchParams, setSearchParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  const [searchDefaultParams, setSearchDefaultParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  const [shouldRefresh, setShouldRefresh] = useState(false);

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
  const DetailedTable = () => {
    Object.keys(detailedTable)
      .slice(startIndex, endIndex)
      .map((key: string) => detailedTable[key]);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">オペレータID</TableCell>
              <TableCell align="center">オペレータ名</TableCell>
              <TableCell align="center">拠点</TableCell>
              <TableCell align="center">権限</TableCell>
              <TableCell align="center">ステータス</TableCell>
              <TableCell align="center">経過時間</TableCell>
              <TableCell align="center">店番</TableCell>
              <TableCell align="center">支店号機名</TableCell>
              <TableCell align="center">業務スキル</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData.map((data: any) => (
              <TableRow key={data.operatorID}>
                <TableCell align="center">{data.operatorID}</TableCell>
                <TableCell align="center">{data.operatorName}</TableCell>
                <TableCell align="center">{data.necLocation}</TableCell>
                <TableCell align="center">{data.roleName}</TableCell>
                <TableCell align="center">{data.operatorStatus}</TableCell>
                <TableCell align="center">{data.passingTime}</TableCell>
                <TableCell align="center">{data.shopNoSetted}</TableCell>
                <TableCell align="center">{data.tabletName}</TableCell>
                <TableCell align="center">{data.businessRoleName}</TableCell>
              </TableRow>
            ))}
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
    const {
      selectedNcoLocation,
      selectedRoleNo,
      selectedBusinessRole,
      selectedOperatorStatus,
      inputShopNoSetted,
      inputShopNameSetted,
    } = searchParams;

    if (!searchDefaultParams || searchDefaultParams !== searchParams) {
      setSearchDefaultParams(searchParams);
    }

    const param: SH1APIOPE044RequestBody = {
      ncoLocation: selectedNcoLocation,
      roleNo: selectedRoleNo,
      businessRole: selectedBusinessRole,
      operatorStatus: selectedOperatorStatus,
      shopNoSetted: inputShopNoSetted,
      shopNameSetted: inputShopNameSetted,
    };

    try {
      const response = (await getApi(
        ApiIds.SH1APIOPE044,
        param
      )) as AxiosResponse<SH1APIOPE044ResponseBody, any>;

      setOperator(response.data);

      console.log("response", response);
    } catch (error: any) {
      setAreaErrorMessage(error?.message);
      console.log(error);
    }
  };

  /**
   * 用于刷新当前查询条件下的操作员数据的函数
   * 首先获取之前保存的查询条件searchDefaultParams，然后根据这些条件构造一个API请求的参数对象param，并使用该参数调用getApi函数来获取数据。
   * 最后，它使用setOperator函数将新数据设置为当前操作员数据，实现了刷新操作。
   */
  const handleRefresh = async () => {
    setShouldRefresh(true);
    const {
      selectedNcoLocation,
      selectedRoleNo,
      selectedBusinessRole,
      selectedOperatorStatus,
      inputShopNoSetted,
      inputShopNameSetted,
    } = searchDefaultParams;

    const param: SH1APIOPE044RequestBody = {
      ncoLocation: selectedNcoLocation,
      roleNo: selectedRoleNo,
      businessRole: selectedBusinessRole,
      operatorStatus: selectedOperatorStatus,
      shopNoSetted: inputShopNoSetted,
      shopNameSetted: inputShopNameSetted,
    };

    try {
      const response = await getApi(ApiIds.SH1APIOPE044, param);
      console.log("response", response);

      setOperator(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  /**
   * 自动更新
   *
   * handleRefresh 函数会被调用，它会请求一些数据并更新组件状态。setInterval 函数会定时调用 handleRefresh 函数，每隔 60 秒刷新一次数据。
   * 在 useEffect 的返回值中，又包含了一个 clearInterval 函数，用于清除定时器，防止内存泄漏。
   * 整个 useEffect 函数在组件挂载后只会执行一次，因为第二个参数是一个空数组，这个空数组表示该 useEffect 只在组件挂载时执行一次，不会在组件的重新渲染中重复执行。
   */
  useEffect(() => {
    if (shouldRefresh) {
      var timer = setInterval(() => {
        handleRefresh();
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [shouldRefresh]);

  // const handleQuery = async () => {
  //   console.log("areaErrorMessage", areaErrorMessage);
  //   const param: SH1APIOPE044RequestBody = {};

  //   try {
  //     const response = (await getApi(
  //       ApiIds.SH1APIOPE044,
  //       param
  //     )) as AxiosResponse<SH1APIOPE044ResponseBody, any>;

  //     const fullData = response.data.operatorList;
  //     setDetailTable(fullData);
  //     const slicedData = fullData.slice(startIndex, endIndex);

  //     setCurrentPageData(slicedData);
  //   } catch (error: any) {
  //     setAreaErrorMessage(error?.message);
  //     console.log(error);
  //   }
  // };

  const handleLocationCodeChange = (event: any) => {
    setLocationCode(event.target.value);
  };

  const handleRoleCodeChange = (event: any) => {
    setRoleCode(event.target.value);
  };

  const handleBusinessRoleChange = (event: any) => {
    setBusinessRole(event.target.value);
  };

  const handleTreatmentStatusChange = (event: any) => {
    setTreatmentStatus(event.target.value);
  };

  const handleStoreNumberChange = (event: any) => {
    setStoreNumber(event.target.value);
  };

  const handleStoreNameChange = (event: any) => {
    setStoreName(event.target.value);
  };

  useSetAreaErrorMessageEffect();

  const handleButtonClick = () => {
    handleInquery();
    // handleQuery();
  };
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    const startIndex = (value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = detailedTable.slice(startIndex, endIndex);
    setCurrentPageData(slicedData);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "16px 16px" }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>
              <InputLabel>拠点別</InputLabel>
              {renderSelect("",locationCode,handleLocationCodeChange)}
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
              {renderSelect(TREATMENT_STATUS)}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>店番</InputLabel>
              {renderTextField("", storeNumber, handleStoreNumberChange)}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>店名</InputLabel>
              {renderTextField("", storeName, handleStoreNameChange)}
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
          onClick={handleButtonClick}
        >
          検索
        </Button>
      </Box>

      <BasicTable></BasicTable>

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
          onClick={handleButtonClick}
        >
          最新化
        </Button>
      </Box>
      <DetailedTable></DetailedTable>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Stack spacing={1}>
          <Pagination
            count={Math.ceil(detailedTable.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </Box>
  );
};

export default OperatorStatusList;
