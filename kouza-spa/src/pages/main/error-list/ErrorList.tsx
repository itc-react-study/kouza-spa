import React, { useContext, useState, useEffect } from "react";
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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  DataGridPro,
  GridColDef,
  GridPinnedColumns,
} from "@mui/x-data-grid-pro";
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

interface IErrorList {
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
  attributeLogin: string;
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

interface CustomHeaderProps {
  field: string;
  headerName: string;
}

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
      acceptanceNo: "123456789",
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
    {
      acceptanceDate: "2023.11.12",
      acceptanceNo: "123456789",
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

const CustomHeader = ({ field, headerName }: CustomHeaderProps): GridColDef => {
  return {
    field,
    headerName,
    width: 100,
    headerClassName: "header",
    headerAlign: "center",
    renderHeader: (params) => (
      <div
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          wordBreak: "break-all",
          height: "auto",
          lineHeight: "100%",
          margin: "0",
        }}
      >
        {params.colDef.headerName}
      </div>
    ),
  };
};

const CustomCell = ({ value }: { value: string }) => {
  if (value === "NG") {
    return (
      <div
        style={{
          backgroundColor: "pink",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {value}
      </div>
    );
  }
  return <div>{value}</div>;
};

const tableHeaderColumns: GridColDef[] = [
  {
    ...CustomHeader({ field: "acceptanceDate", headerName: "受付日" }),
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {params.value}
      </div>
    ),
  },
  {
    ...CustomHeader({ field: "acceptanceNo", headerName: "受付番号" }),
    renderCell: (params) => (
      <a
        href="https://www.itec-bridge.co.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {params.value}
      </a>
    ),
  },
  {
    ...CustomHeader({ field: "lastName", headerName: "氏名" }),
  },
  {
    ...CustomHeader({ field: "states", headerName: "ステータス" }),
  },
  {
    ...CustomHeader({ field: "newKey", headerName: "新規[普通]" }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "printAcceptInfoIcLogin",
      headerName: "印影受付情報コード登録（IC）",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({ field: "directNew", headerName: "ダイレクト契約新規" }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "appointAccountBranchLogin",
      headerName: "指定账号登録",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({ field: "eNotice", headerName: "E通知登録" }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "brandDebitCard",
      headerName: "ブランドデビットカード発行",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "printAcceptInfoDebitLogin",
      headerName: "印影受付情報コード登録（デビット)",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({ field: "oecd", headerName: "実特法" }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },

  {
    ...CustomHeader({
      field: "attributeLogin",
      headerName: "属性登録",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "kycInfomationLogin",
      headerName: "KYC情報登録",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "selfComfirmationRecord",
      headerName: "本人確認記録表",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "printLogin",
      headerName: "印影レス登録",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "recordImagLogin",
      headerName: "記録表イメージ登録",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "errorOperatorId",
      headerName: "エラー処理担当者",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({
      field: "errorReexamOperatorId",
      headerName: "エラー処理再鑑者",
    }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
];

/**
 * ErrorList
 */
const ErrorList = (): JSX.Element => {
  const [errorLists, setErrorLists] = useState<any>(responseBody);
  const [searchParams, setSearchParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  const [searchDefaultParams, setSearchDefaultParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [inputError, setInputError] = useState<InputError>({
    inputName: "",
    errorMessage: "",
  });
  const [errorListRowsCount, setErrorListRowsCount] = useState<number>(
    responseBody.errorList.length
  );
  const [currentPage, setCurrentPage] = useState(1);
  const { setIsMainLoading } = useContext(MainContext);
  const [pinnedColumns, setPinnedColumns] = React.useState<GridPinnedColumns>({
    left: ["acceptanceDate", "acceptanceNo", "lastName", "states"],
  });

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

  // 受付日
  const handleAcceptanceDateChange = (date: dayjs.Dayjs | null) => {
    const formattedDate = date?.format("YYYY.MM.DD") ?? "";
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      selectAcceptanceDate: formattedDate,
    }));
  };

  // pagination
  const startIndex = (currentPage - 1) * DEFAULT_PER_PAGE_SIZE;
  const endIndex = Math.min(
    startIndex + DEFAULT_PER_PAGE_SIZE - 1,
    errorLists.errorList.length
  );
  const currentPageData = errorLists.errorList.slice(startIndex, endIndex);

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  const rows = currentPageData.map((item: IErrorList, index: number) => {
    return {
      id: index,
      ...item,
    };
  });

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

      setErrorLists(response.data);
      setErrorListRowsCount(response.data.errorList.length);
      setCurrentPage(1);
    } catch (error: any) {
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
  };

  // 自动更新
  useEffect(() => {
    if (shouldRefresh) {
      var timer = setInterval(() => {
        handleRefresh();
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [shouldRefresh]);

  // input error message
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

      setErrorLists(response.data);
    } catch (error: any) {
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
  };

  // card
  const card = (
    <React.Fragment>
      <CardContent>
        <Grid container spacing={1}>
          <Grid container item spacing={0}>
            <Grid item xs={4}>
              <Item>
                <InputLabel style={{ fontWeight: 700 }}>受付日</InputLabel>
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
                <InputLabel style={{ fontWeight: 700 }}>拠点別</InputLabel>
                {renderSelect(
                  NCO_LOCATION_CD,
                  searchParams.selectBranchName,
                  "selectBranchName"
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <InputLabel style={{ fontWeight: 700 }}>
                  口座開設済/未済
                </InputLabel>
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
                <InputLabel style={{ fontWeight: 700 }}>店番</InputLabel>
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
                <InputLabel style={{ fontWeight: 700 }}>店名</InputLabel>
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
      {/* card */}
      <Card variant="outlined">{card}</Card>

      {/* 检索结果和最新化按钮 */}
      <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
        <div style={{ flexGrow: 1 }}>検索結果 {errorListRowsCount}件</div>
        <Button
          variant="contained"
          style={{
            width: 74,
            height: 44,
            fontSize: 12,
            marginLeft: 18,
            marginRight: 12,
            flexShrink: 0,
          }}
          onClick={handleRefresh}
        >
          最新化
        </Button>
      </div>

      {/* 固定列表格 */}
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Box
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1, width: "86.5vw" }}
        >
          {/* 日期选择器 */}
          <DataGridPro
            rows={rows}
            getRowId={(row) => row.id}
            columns={tableHeaderColumns.map((col) => ({
              ...col,
              align: "center",
            }))}
            pinnedColumns={pinnedColumns}
            autoHeight
            hideFooterRowCount
            disableRowSelectionOnClick
            columnHeaderHeight={88}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end" style={{ marginTop: 10 }}>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(
                errorLists.errorList.length / DEFAULT_PER_PAGE_SIZE
              )}
              variant="outlined"
              shape="rounded"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorList;
