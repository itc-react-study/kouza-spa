// 安装第三方，自己的api，css文件等。顺序依次从第三方到自己。
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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./OperatorStatusList.css";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  SH1APIOPE044RequestBody,
  SH1APIOPE044ResponseBody,
} from "../../../interfaces/api/sh1apiope044";
import {
  BUSINESS_ROLE,
  CODE_LOCATION_CD,
  ROLE_CD,
  STATUS,
} from "../../../constants/code-list.constants";
import { getApi } from "../../../common/service/api.service";
import { ApiIds } from "../../../constants/api-id.constant";
import { AxiosResponse } from "axios";
import { MainContext } from "../../../store/store";
import { ErrorCodes } from "../../../constants/error-code.constant";
import { getMessage } from "../../../common/service/message.service";
import { KouzaMessage } from "../../../interfaces/common/common";

// 定义List的类型
interface List {
  code: string;
  label: string;
}

// 定义Operator的类型
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

// 定义SearchParams的类型
interface SearchParams {
  selectedNcoLocation: string;
  selectedRoleNo: string;
  selectedBusinessRole: string;
  selectedOperatorStatus: string;
  inputShopNoSetted: string;
  inputShopNameSetted: string;
}

interface InputError {
  inputName: string;
  errorMessage: string;
}
// 定义表格中，每一页显示的数据量为10条
const DEFAULT_PER_PAGE_SIZE = 10;

//
const DEFAULT_SEARCH_PARAMS: SearchParams = {
  selectedNcoLocation: "",
  selectedRoleNo: "",
  selectedBusinessRole: "",
  selectedOperatorStatus: "",
  inputShopNoSetted: "",
  inputShopNameSetted: "",
};

// 定义responseBoday的初期设定
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
  ],
};

// 头部样式设定
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

// 表格单元样式设定
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// 表格行的样式设定
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
 * オペレータ状況一覧
 *
 * @return {JSX.Element}
 */
const OperatorStatusList = (): JSX.Element => {
  // 使用了React中的useState hook来声明了一个名为operator的state变量，并将其初始值设为responseBody。同时，还声明了一个名为setOperator的函数，用于更新operator的值。
  const [operator, setOperator] = useState<any>(responseBody);
  // 使用了React中的useState hook来声明了一个名为currentPage的state变量，并将其初始值设为1。同时，还声明了一个名为setCurrentPage的函数，用于更新currentPage的值。
  const [currentPage, setCurrentPage] = useState(1);
  /**
   * 使用了React中的useState hook来声明了一个名为searchParams的state变量，并将其初始值设为一个对象，该对象的各个属性均为字符串类型。
   * 同时，还声明了一个名为setSearchParams的函数，用于更新searchParams的值。
   * 在后续的组件渲染过程中，如果调用了setSearchParams函数更新了searchParams的值，组件会重新渲染，反映新的searchParams的值。
   */
  const [searchParams, setSearchParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );
  /**
   * 使用了React中的useState hook来声明了一个名为searchDefaultParams的state变量，并将其初始值设为一个对象，该对象的各个属性均为字符串类型。
   * 同时，还声明了一个名为setSearchDefaultParams的函数，用于更新searchDefaultParams的值。
   * 该对象的初始值为一个常量DEFAULT_SEARCH_PARAMS，该常量也是一个SearchParams类型的对象，表示搜索条件的默认值。
   * 在后续的组件渲染过程中，如果调用了setSearchDefaultParams函数更新了searchDefaultParams的值，组件会重新渲染，反映新的searchDefaultParams的值。
   */
  const [searchDefaultParams, setSearchDefaultParams] = useState<SearchParams>(
    DEFAULT_SEARCH_PARAMS
  );

  // 是否自动更新
  const [shouldRefresh, setShouldRefresh] = useState(false);
  // 设置报错信息
  const [inputError, setInputError] = useState<InputError>({
    inputName: "",
    errorMessage: "",
  });
  const { setIsMainLoading } = useContext(MainContext);

  // pagination
  // 开始页：（当前页-1）* 一页10条数据  → 减一是因为下标从0开始
  const startIndex = (currentPage - 1) * DEFAULT_PER_PAGE_SIZE;
  /**
   * 结束页：
   * 1. startIndex + DEFAULT_PER_PAGE_SIZE - 1，表示当前页的结束位置，因为数组索引从0开始，所以需要将索引加上DEFAULT_PER_PAGE_SIZE - 1。
   * 2. operator.operatorList.length
   *
   * Math.min函数的作用是取两个值中的较小值。这是为了确保当前页的结束位置不会超过数据总数。
   * 如果计算出来的结束位置超过了数据总数，那么就取数据总数减一作为当前页的结束位置。这样可以避免数组越界的错误。
   */
  const endIndex = Math.min(
    startIndex + DEFAULT_PER_PAGE_SIZE - 1,
    operator.operatorList.length
  );
  /**
   * slice函数是JavaScript数组的一个方法，用于返回一个从原数组中指定位置开始取出的一段新数组。slice函数取出了从startIndex到endIndex之间的数据，这个数据就是当前页需要显示的数据列表。
   * 注意：slice函数不会修改原数组，而是返回一个新数组。
   */
  const currentPageData = operator.operatorList.slice(startIndex, endIndex);

  /**
   * event表示触发页面变化事件的事件对象，page表示变化后的页码。
   * 当用户点击页面切换按钮时，handlePageChange函数将传递给它的page参数作为新的页码，通过调用setCurrentPage来更新当前页的值。
   */
  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  // searchBar
  /**
   * event表示触发下拉框变化事件的事件对象，name表示对应的下拉框名称。
   * setSearchParams是一个React Hook函数，用于更新searchParams的值，进而实现搜索条件的动态更新。
   * 当用户选择下拉框中的选项时，handleSelectChange函数会将用户选择的选项的value值作为新的搜索条件，通过调用setSearchParams来更新搜索条件。这样，在组件的下次渲染中，就会显示更新后的搜索结果。
   *
   * 【...】为ES6的解构语法，将prevSearchParams对象中的属性展开，然后再用新的属性值覆盖旧的属性值，从而实现了只更新指定属性的效果。
   *
   * [name]: event.target.value as string是一个对象字面量的语法
   * name是一个变量，表示下拉框的名称，通过这个变量动态地设置searchParams对象的属性。（如这里的拠点別、権限スキル等）
   * event.target.value表示用户选择的下拉框选项的值，这个值可能是一个字符串、数字、布尔值等，需要使用as string来将它强制转换为字符串类型，以保证属性值的一致性。（如新宿，日本桥，CSR等）
   */
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
  /**
   * event表示触发输入框变化事件的事件对象，name表示对应的输入框名称。
   * 当用户在输入框中输入文本时，handleInputChange函数会将用户输入的文本作为新的搜索条件，通过调用setSearchParams来更新搜索条件。
   */
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: event.target.value,
    }));
  };

  /**
   * renderSelect xx
   *
   * renderSelect的函数用于渲染一个下拉框。它接受三个参数：
   * List：一个数组，表示下拉框选项的列表。
   * Name：一个字符串，表示下拉框的名称，用于在handleSelectChange函数中动态更新对应的搜索条件。
   * Value：一个字符串，表示下拉框当前选中的值。
   *
   * 函数内部首先使用map方法遍历List数组，生成一个包含所有下拉框选项的item数组。
   * 在遍历的过程中，使用MenuItem组件来生成每一个下拉框选项，并使用code作为选项的值，使用label作为选项的文本。（顶部定义了List的类型）
   * 接着，在函数的返回值中，使用Select组件来渲染下拉框。value属性指定了下拉框当前选中的值，onChange属性指定了选项变化时要执行的回调函数。
   * 当下拉框选项发生变化时，onChange回调函数会触发handleSelectChange函数，并将选中的值和下拉框名称作为参数传入，以便动态更新对应的搜索条件。
   * 最后，函数将生成的下拉框组件返回，供组件进行渲染。
   */
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

  /**
   * BasicTable
   *
   * 返回一个表格，表格的内容来自于一个名为operator的变量，包括6列，分别是“待機中”，“受付中”，“後処理中”，“離席 1”，“離席 2”，“離席 3”。
   * 每列的数据都是通过在operator变量上访问对应的属性获得的，并使用TableCell组件在表格中显示。
   * 整个表格使用TableContainer和Paper组件包裹起来，使用sx属性设置了最小宽度为650，以便适应屏幕大小。
   * 表头使用TableHead和TableRow组件进行设置，包含了6个单元格。表体使用TableBody和TableRow组件进行设置，包含了一个行，也就是上面提到的6个单元格的数据。
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

        {/* 当点击最新化按钮时触动handleRefresh */}
        <Button
          variant="contained"
          style={{
            width: 50,
            height: 40,
            fontSize: 10,
            marginLeft: 18,
            marginRight: 12,
          }}
          onClick={handleRefresh}
        >
          最新化
        </Button>
      </Box>
    );
  };

  /**
   * 定义了一个异步函数 handleInquery，主要功能是获取搜索条件 searchParams。
   * 根据这些条件发送请求 getApi(ApiIds.SH1APIOPE044, param) 并获取响应 response，最后将响应数据保存到组件的状态 operator 中，并将当前页数 currentPage 设置为 1。
   *
   * 首先从 searchParams 中解构出搜索条件，然后根据这些条件构造请求参数 param。
   * 接着调用 getApi 函数发送请求，并将响应数据保存到组件的状态 operator 中。最后将当前页数 currentPage 设置为 1，这是因为搜索条件发生变化后需要从第一页重新开始显示数据。
   */
  const handleInquery = async () => {
    const {
      selectedNcoLocation,
      selectedRoleNo,
      selectedBusinessRole,
      selectedOperatorStatus,
      inputShopNoSetted,
      inputShopNameSetted,
    } = searchParams;

    // 当最新化里没有数据，或者数据与检索后的数据不一致时，把检索后的数据赋值给最新化。
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

    // 在发送API请求前显示loading
    setIsMainLoading(true);

    try {
      const response = await getApi(ApiIds.SH1APIOPE044, param);
      console.log("response", response);

      setOperator(response.data);
      setCurrentPage(1);
    } catch (error: any) {
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
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

    // 在发送API请求前显示loading
    setIsMainLoading(true);

    try {
      const response = await getApi(ApiIds.SH1APIOPE044, param);
      console.log("response", response);

      setOperator(response.data);
    } catch (error: any) {
      console.log(error);
    }

    // 在发送API请求后不显示loading
    setIsMainLoading(false);
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

  // 当focus out的时候显示error message
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

  return (
    <Box sx={{ flexGrow: 1, padding: "16px 16px" }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>
              <InputLabel>拠点別</InputLabel>
              {renderSelect(
                CODE_LOCATION_CD,
                searchParams.selectedNcoLocation,
                "selectedNcoLocation"
              )}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>権限スキル</InputLabel>
              {renderSelect(
                ROLE_CD,
                searchParams.selectedRoleNo,
                "selectedRoleNo"
              )}
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <InputLabel>業務スキル</InputLabel>
              {renderSelect(
                BUSINESS_ROLE,
                searchParams.selectedBusinessRole,
                "selectedBusinessRole"
              )}
            </Item>
          </Grid>
        </Grid>
        <Grid container item spacing={3}>
          <Grid item xs={4}>
            <Item>
              <InputLabel>ステータス</InputLabel>
              {renderSelect(
                STATUS,
                searchParams.selectedOperatorStatus,
                "selectedOperatorStatus"
              )}
            </Item>
          </Grid>
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
                  // value={searchParams.inputShopNoSetted}
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
            {currentPageData.map((operatorRow: Operator, index: number) => (
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
            // 计算表格中数据行数，然后将其除以默认每页展示的行数（DEFAULT_PER_PAGE_SIZE），得出需要展示的页数。
            // 使用Math.ceil()函数对计算结果进行向上取整，得到页数。最后将页数作为属性传递给组件。
            count={Math.ceil(
              operator.operatorList.length / DEFAULT_PER_PAGE_SIZE
            )}
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
