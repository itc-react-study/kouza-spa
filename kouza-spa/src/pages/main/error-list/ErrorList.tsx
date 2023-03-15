import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material/Select";
import { getApi } from "../../../common/service/api.service";
import { ApiIds } from "../../../constants/api-id.constant";
import {
  SH1APIOPE050RequestBody,
  SH1APIOPE050ResponseBody,
} from "../../../interfaces/api/sh1apiope050";
import {
  NCO_LOCATION_CD,
  ACCOUNT_FINISH_STATUS,
} from "../../../constants/code-list.constants";
import { ErrorCodes } from "../../../constants/error-code.constant";
import { getMessage } from "../../../common/service/message.service";
import { KouzaMessage } from "../../../interfaces/common/common";
import "../error-list/ErrorList.css";
import { MainContext } from "../../../store/store";

// 设置List的类型
interface List {
  code: string;
  label: string;
}

interface ErrorList {
  acceptanceDate: string;
  acceptanceNo: string;
  lastName: string;
  states: string;
  newKey: string;
  directNew: string;
  eNotice: string;
  brandDebitCard: string;
  oecd: string;
  printAcceptInfoIcLogin: string;
  printAcceptInfoDebitLogin: string;
  appointAccountBranchLogin: string;
  attributeLogi: string;
  kycInfomationLogin: string;
  selfComfirmationRecord: string;
  printLogin: string;
  recordImagLogin: string;
  errorOperatorId: string;
  errorReexamOperatorId: string;
}
// 设定SearchParam类型
interface SearchParams {
  selectAcceptanceDate: string;
  selectBranchName: string;
  selectAccountFinishFlag: string;
  inputShopNoSetted: string;
  inputShopNameSetted: string;
}

interface InputError {
  inputName: string;
  errorMessage: string;
}

const DEFAULT_PER_PAGE_SIZE = 10;

const DEFAULT_SEARCH_PARAMS: SearchParams = {
  selectAcceptanceDate: "",
  selectBranchName: "",
  selectAccountFinishFlag: "",
  inputShopNoSetted: "",
  inputShopNameSetted: "",
};

const responseBody = {
  kensuu: 1,
  errorList: [
    {
      acceptanceDate: "2023.11.11",
      acceptanceNo: "0290000040101",
      lastName: "山田　太郎",
      states: "処理中",
      newKey: "NG",
      directNew: "済",
      eNotice: "済",
      brandDebitCard: "済",
      oecd: "済",
      printAcceptInfoIcLogin: "済",
      printAcceptInfoDebitLogin: "済",
      appointAccountBranchLogin: "済",
      attributeLogin: "済",
      kycInfomationLogin: "済",
      selfComfirmationRecord: "済",
      printLogin: "済",
      recordImagLogin: "済",
      errorOperatorId: "",
      errorReexamOperatorId: "",
    },
  ],
};

// 头部设计样式
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  paddingTop: 8,
  paddingBottom: 8,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 40,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "none",
}));

const ErrorList = (): JSX.Element => {
  const [operator, setOperator] = useState<any>(responseBody);
  const [searchParams, setSearchParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  const [searchDefaultParams, setSearchDefaultParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  const [inputError, setInputError] = useState<InputError>({
    inputName: "",
    errorMessage: "",
  });
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { setIsMainLoading } = useContext(MainContext);

  // 头部
  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    name: string
  ) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: event.target.value as string,
    }));
  };

  // 下拉菜单
  const renderSelect = (
    List: List[],
    Value: string,
    Name: string
  ): JSX.Element => {
    const item = List.map((ele: List, index: number) => {
      return (
        <MenuItem key={index} value={ele.code}>
          {ele.label}
        </MenuItem>
      );
    });

    return (
      <Select
        sx={{ width: 180, height: 30 }}
        value={Value}
        onChange={(event) => handleSelectChange(event, Name)}
      >
        {item}
      </Select>
    );
  };

  // input
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: event.target.value,
    }));
  };

  // 检索btn触发
  const handleInquery = async () => {
    const {
      selectAcceptanceDate,
      selectBranchName,
      selectAccountFinishFlag,
      inputShopNoSetted,
      inputShopNameSetted,
    } = searchParams;

    // 当最新化里没有数据，或者数据与检索后的数据不一致时，把检索后的数据赋值给最新化。
    if (!searchDefaultParams || searchDefaultParams !== searchParams) {
      setSearchDefaultParams(searchParams);
    }

    const param: SH1APIOPE050RequestBody = {
      acceptanceDate: selectAcceptanceDate,
      branchName: selectBranchName,
      accountFinishFlg: selectAccountFinishFlag,
      shopNoSetted: inputShopNoSetted,
      shopNameSetted: inputShopNameSetted,
    };

    // 在发送API请求前显示loading
    setIsMainLoading(true);

    try {
      const response = await getApi(ApiIds.SH1APIOPE050, param);
      console.log("response", response);

      setOperator(response.data);
      setCurrentPage(1);
    } catch (error: any) {
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    const kouzaMessage = getMessage(ErrorCodes.C30002) as KouzaMessage;
    if (inputValue.length !== 4 || isNaN(Number(inputValue))) {
      setInputError({
        inputName: "inputShopNoSetted",
        errorMessage: kouzaMessage.message,
      });
    } else {
      setInputError({
        inputName: "",
        errorMessage: "",
      });
    }
  };

  // 最新化
  const handleRefresh = async () => {
    setShouldRefresh(true);
    const {
      selectAcceptanceDate,
      selectBranchName,
      selectAccountFinishFlag,
      inputShopNoSetted,
      inputShopNameSetted,
    } = searchDefaultParams;

    const param: SH1APIOPE050RequestBody = {
      acceptanceDate: selectAcceptanceDate,
      branchName: selectBranchName,
      accountFinishFlg: selectAccountFinishFlag,
      shopNoSetted: inputShopNoSetted,
      shopNameSetted: inputShopNameSetted,
    };

    // 在发送API请求前显示loading
    setIsMainLoading(true);

    try {
      const response = await getApi(ApiIds.SH1APIOPE050, param);
      console.log("response", response);

      setOperator(response.data);
    } catch (error: any) {
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
  };

  // 受付日
  const handleAcceptanceDateChange = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format("YYYY.MM.DD") ?? "";
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      selectAcceptanceDate: formattedDate,
    }));
  };

  // card
  const card = (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={1}>
          <Grid container item spacing={1}>
            <Grid item xs={4}>
              <Item>
                <InputLabel>受付日</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="YYYY.MM.DD"
                      onChange={handleAcceptanceDateChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <InputLabel>拠点別</InputLabel>
                {renderSelect(
                  NCO_LOCATION_CD,
                  searchParams.selectBranchName,
                  "selectBranchName"
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <InputLabel>口座開設済/未済</InputLabel>
                {renderSelect(
                  ACCOUNT_FINISH_STATUS,
                  searchParams.selectAccountFinishFlag,
                  "selectAccountFinishFlag"
                )}
              </Item>
            </Grid>
          </Grid>
          <Grid container item spacing={1}>
            <Grid item xs={4}>
              <Item>
                <InputLabel>店番</InputLabel>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    style={{
                      width: "174px",
                      height: "26px",
                      borderRadius: "4px",
                      borderColor: "#c4c4c4",
                      borderWidth: "1px",
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                    }}
                    value={searchParams.inputShopNoSetted}
                    onChange={(event) =>
                      handleInputChange(event, "inputShopNoSetted")
                    }
                    onBlur={handleInputBlur}
                  />
                  {inputError.inputName === "inputShopNoSetted" && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-20px",
                        right: "7px",
                        fontSize: "12px",
                        color: "red",
                      }}
                    >
                      {inputError.errorMessage}
                    </div>
                  )}
                </div>
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
                  value={searchParams.inputShopNameSetted}
                  onChange={(event) =>
                    handleInputChange(event, "inputShopNameSetted")
                  }
                />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button className="btn" variant="contained" onClick={handleInquery}>
          検索
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ padding: "16px 16px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default ErrorList;
