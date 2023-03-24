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
import * as XLSX from "xlsx";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material/Select";
import { getApi } from "../../../common/service/api.service";
import { ApiIds } from "../../../constants/api-id.constant";
import {
  SH1APIOPE051RequestBody,
  SH1APIOPE051ResponseBody,
} from "../../../interfaces/api/sh1apiope051";
import { NCO_LOCATION_CD } from "../../../constants/code-list.constants";
import { ErrorCodes } from "../../../constants/error-code.constant";
import { getMessage } from "../../../common/service/message.service";
import { KouzaMessage } from "../../../interfaces/common/common";
import { MainContext } from "../../../store/store";
import Stack from "@mui/material/Stack";
import { PanoramaFishEye } from "@mui/icons-material";

// 设置List的类型
interface List {
  code: string;
  label: string;
}

interface ICardTori {
  serialNumber: string;
  shopNo: string;
  accountBranchName: string;
  furikanaName: string;
  acceptanceNo: string;
  printedFlg: string;
}

// 设定SearchParam类型
interface SearchParams {
  selectAcceptanceDate: string;
  selectBranchName: string;
  inputAcceptanceNo: string;
  inputShopNo: string;
  inputShopName: string;
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
  inputAcceptanceNo: "",
  inputShopNo: "",
  inputShopName: "",
};

const responseBody = {
  cardCount: 1,
  CardToriList: [
    {
      CardTori: {
        serialNumber: "001",
        shopNo: "121",
        accountBranchName: "１－２－１",
        furikanaName: "小林",
        acceptanceNo: "2021010201001",
        printedFlg: "0",
      },
    },
    {
      CardTori: {
        serialNumber: "002",
        shopNo: "121",
        accountBranchName: "１－２－１",
        furikanaName: "小林",
        acceptanceNo: "2021010201001",
        printedFlg: "0",
      },
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
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      {value}
    </div>
  );
  return <div>{value}</div>;
};

const CustomCellFlag = ({ value }: { value: string }) => {
  if (value === "0") {
    return <div></div>;
  } else if (value === "1") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          fontWeight: 700,
        }}
      >
        ＊
      </div>
    );
  }
  return <div>{value}</div>;
};

const tableHeaderColumns: GridColDef[] = [
  {
    ...CustomHeader({ field: "serialNumber", headerName: "連番" }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    ...CustomHeader({ field: "shopNo", headerName: "店番" }),
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    field: "accountBranchName",
    headerName: "支店／出張所名",
    width: 320,
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
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    field: "furikanaName",
    headerName: "おなまえ（フリガナ）",
    width: 240,
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
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    field: "acceptanceNo",
    headerName: "受付番号",
    width: 200,
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
    renderCell: (params) => <CustomCell value={params.value} />,
  },
  {
    field: "printedFlg",
    headerName: "印刷済フラグ",
    width: 200,
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
    renderCell: (params) => <CustomCellFlag value={params.value} />,
  },
];

/**
 * MufgList
 *
 * @returns {JSX.Element}
 */
const MufgList = (): JSX.Element => {
  const [cardToriLists, setCardToriLists] = useState<any>(responseBody);
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
  const [cardToriListsRowsCount, setCardToriListsRowsCount] = useState<number>(
    responseBody.CardToriList.length
  );
  const [currentPage, setCurrentPage] = useState(1);
  const { areaErrorMessage, setAreaErrorMessage, setIsMainLoading } =
    useContext(MainContext);

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
    cardToriLists.CardToriList.length
  );
  const currentPageData = cardToriLists.CardToriList.slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  // 检索btn触发
  const handleInquery = async () => {
    const {
      selectAcceptanceDate,
      selectBranchName,
      inputAcceptanceNo,
      inputShopNo,
      inputShopName,
    } = searchParams;

    const param: SH1APIOPE051RequestBody = {
      acceptanceDate: selectAcceptanceDate,
      branchName: selectBranchName,
      acceptanceNo: inputAcceptanceNo,
      shopNo: inputShopNo,
      shopName: inputShopName,
    };

    // area error message
    if (
      searchParams.selectAcceptanceDate !== "" &&
      searchParams.selectBranchName !== ""
    ) {
      setIsMainLoading(true);

      try {
        const response = await getApi(ApiIds.SH1APIOPE051, param);
        console.log("response", response);

        setCardToriLists(response.data);
        setCardToriListsRowsCount(response.data.CardToriList.length);
        setCurrentPage(1);
      } catch (error: any) {
        console.log(error);
      }
      setIsMainLoading(false);
    } else {
      const kouzaMessage = getMessage(ErrorCodes.C30491) as KouzaMessage;
      if (kouzaMessage.display === "area") {
        setAreaErrorMessage(kouzaMessage.message);
      }
      return;
    }
  };

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

  const rows = currentPageData.map(
    (item: { CardTori: ICardTori }, index: number) => {
      const { CardTori } = item;
      return {
        id: index,
        ...CardTori,
      };
    }
  );

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
                <InputLabel style={{ fontWeight: 700 }}>受付番号</InputLabel>
                <input
                  type="text"
                  style={{
                    width: "174px",
                    height: "26px",
                    borderRadius: "4px",
                    borderColor: "#c4c4c4",
                    borderWidth: "1px",
                  }}
                  value={searchParams.inputAcceptanceNo}
                  onChange={(event) =>
                    handleInputChange(event, "inputAcceptanceNo")
                  }
                />
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
                    value={searchParams.inputShopNo}
                    onChange={(event) =>
                      handleInputChange(event, "inputShopNo")
                    }
                    onBlur={handleInputBlur}
                  />
                  {inputError.inputName === "inputShopNo" && (
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
                  value={searchParams.inputShopName}
                  onChange={(event) =>
                    handleInputChange(event, "inputShopName")
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

  // printing
  // export all
  const handleExportAll = async () => {
    const sheetData = rows.map((item: ICardTori) => [
      item.serialNumber,
      item.shopNo,
      item.accountBranchName,
      item.furikanaName,
      item.acceptanceNo,
    ]);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([...sheetData]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  //
  return (
    <Box sx={{ padding: "16px 16px" }}>
      {/* card */}
      <Card variant="outlined">{card}</Card>

      {/* 检索结果 */}
      <div
        style={{ display: "flex", alignItems: "center", margin: "20px 0px" }}
      >
        <div style={{ flexGrow: 1 }}>検索結果 {cardToriListsRowsCount}件</div>
      </div>

      {/* 表格 */}
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            getRowId={(row) => row.id}
            columns={tableHeaderColumns.map((col) => ({
              ...col,
              align: "center",
            }))}
            checkboxSelection
            disableRowSelectionOnClick
            hideFooter
            hideFooterPagination
            hideFooterSelectedRowCount
            columnHeaderHeight={50}
          />
          <Button
            className="btn"
            variant="contained"
            style={{
              margin: "10px 26px 0px -86px",
              backgroundColor: "#c21818",
            }}
          >
            個別印刷
          </Button>
          <Button
            className="btn"
            variant="contained"
            style={{ marginTop: 10, backgroundColor: "#c21818" }}
            onClick={handleExportAll}
            // onChange={handlePrinted}
          >
            一括印刷
          </Button>
        </Box>

        <Box display="flex" justifyContent="flex-end" style={{ marginTop: 10 }}>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(
                cardToriLists.CardToriList.length / DEFAULT_PER_PAGE_SIZE
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

export default MufgList;
