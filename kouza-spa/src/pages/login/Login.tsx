import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getApi } from "../../common/service/api.service";
import { ApiIds } from "../../constants/api-id.constant";
import { SH1APIDUMLGNRequestBody } from "../../interfaces/api/shiapidumlgn";
import { LoginContext } from "../../store/store";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const boxStyle = {
  width: 500,
  maxWidth: "100%",
  marginBottom: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const formStyle = {
  width: 500,
  border: "1px solid #000",
  padding: "40px 40px",
};

/**
 * 描述
 * @returns {JSX.Element}
 */
const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const { register, handleSubmit, getValues } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const loginContext = { isLoading, setIsLoading };

  const loadMain = async () => {
    const { userName, userPwd } = getValues();

    const param: SH1APIDUMLGNRequestBody = {
      userName: userName,
      userPwd: userPwd,
    };

    setIsLoading(true);

    const response = await getApi(ApiIds.SH1APIDUMLGN, param);

    setIsLoading(false);

    console.log(response);

    navigate("/Main");
  };

  return (
    <div className="form">
      <LoginContext.Provider value={loginContext}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box sx={formStyle}>
          <form onSubmit={handleSubmit(loadMain)}>
            <Box sx={boxStyle}>
              <TextField
                fullWidth
                required
                {...register("userName")}
                label="userName"
              />
            </Box>

            <Box sx={boxStyle}>
              <TextField
                fullWidth
                required
                type={"password"}
                {...register("userPwd")}
                label="userPwd"
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <Button variant="contained" type="submit">
                login
              </Button>
            </Box>
          </form>
        </Box>
      </LoginContext.Provider>
    </div>
  );
};

export default Login;
