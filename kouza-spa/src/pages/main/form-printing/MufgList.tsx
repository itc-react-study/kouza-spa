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
import FileSaver from "file-saver";
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
import {
  SH1APIOPE052RequestBody,
  SH1APIOPE052ResponseBody,
} from "../../../interfaces/api/sh1apiope052";
import { NCO_LOCATION_CD } from "../../../constants/code-list.constants";
import { ErrorCodes } from "../../../constants/error-code.constant";
import { getMessage } from "../../../common/service/message.service";
import { KouzaMessage } from "../../../interfaces/common/common";
import { MainContext } from "../../../store/store";
import Stack from "@mui/material/Stack";
import { PanoramaFishEye } from "@mui/icons-material";
import { Buffer } from "buffer";

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
interface IPrintAll {
  fileName: string;
  fileContent: string;
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
  cardCount: 0,
  CardToriList: [
    {
      CardTori: {
        serialNumber: "",
        shopNo: "",
        accountBranchName: "",
        furikanaName: "",
        acceptanceNo: "",
        printedFlg: "",
      },
    },
  ],
};

const responseBodyForPrint = {
  data: {
    downloadFiles: [
      {
        fileName: "Tanpyou.xlsx",
        fileContent:
          "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",
      },
    ],
  },
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
  const [exportAll, setExportAll] = useState<any>(responseBodyForPrint);
  const [searchParams, setSearchParams] = useState<SearchParams>(
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
    const param: SH1APIOPE052RequestBody = {
      acceptanceNo: ["2021040108002"], //searchParams.inputAcceptanceNo,
      bulkPrintFlag: true,
      acceptanceDate: "",
      branchName: "",
      shopNo: "",
      shopName: "",
    };

    setIsMainLoading(true);
    try {
      const response = await getApi(ApiIds.SH1APIOPE052, param);
      console.log("response", response.data);

      setExportAll(response.data);
    } catch (error: any) {
      console.log(error);
    }

    setIsMainLoading(false);

    const sheetData = exportAll.data.downloadFiles.map((item: IPrintAll) => ({
      fileName: item.fileName,
      fileContent: item.fileContent,
    }));
    const workbook = XLSX.utils.book_new();
    sheetData.forEach((data: { fileName: string; fileContent: string }) => {
      const decodedData = Buffer.from(data.fileContent, "base64").toString();

      const worksheet = XLSX.utils.sheet_add_aoa(
        XLSX.utils.book_new().Sheets.Sheet1,
        [[decodedData]]
      );
      XLSX.utils.book_append_sheet(workbook, worksheet, data.fileName);
    });
    const fileTitle = sheetData[0].fileName;
    const fileData = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([fileData], { type: "text/plain; charset=UTF-8" });
    FileSaver.saveAs(blob, fileTitle);
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
