import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/**
 * FormPrinting
 *
 * @returns {JSX.Element}
 */
const FormPrinting = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./MufgList");
  };

  const card = (
    <React.Fragment>
      <CardContent sx={{ height: "70vh" }}>
        <div style={{ display: "flex", position: "relative" }}>
          <Typography style={{ marginRight: 20, fontWeight: 700 }}>
            帳票印刷
          </Typography>
          <Typography>
            <input
              type="text"
              value="MUFG一覧"
              style={{
                width: 400,
                paddingLeft: 20,
                fontSize: 16,
                border: "1px solid #aeaeae",
              }}
            />
          </Typography>
          <Button
            onClick={handleClick}
            style={{
              width: 240,
              height: 36,
              marginTop: 40,
              position: "absolute",
              left: "14%",
              color: "white",
              backgroundColor: "#c21818",
            }}
          >
            MUFGカード関連帳票一覧
          </Button>
        </div>
      </CardContent>
    </React.Fragment>
  );
  return (
    <>
      <Box sx={{ minWidth: 275, padding: "16px 16px" }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
};

export default FormPrinting;
