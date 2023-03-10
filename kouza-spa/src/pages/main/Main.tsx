import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MENU_LIST } from "../../configs/menuList.config";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "../../interfaces/common/common";
import { AreaMessageContext } from "../../store/store";
import ErrorTips from "../../common/components/error-tips/ErrorTips";

const listStyle = {
  border: "1px solid #000",
};

const Main = () => {
  const navigate = useNavigate();

  const clickList = (item: Menu) => () => {
    navigate(item.path);
  };

  const [areaErrorMessage, setAreaErrorMessage] = useState("");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AreaMessageContext.Provider
        value={{
          areaErrorMessage,
          setAreaErrorMessage,
        }}
      >
        <Box
          sx={{
            minWidth: 200,
            width: "10vw",
            background: "#24292e",
            color: "#FFF",
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              {MENU_LIST.map((item: Menu, index: number) => {
                return (
                  <ListItem sx={listStyle} key={index}>
                    <ListItemButton onClick={clickList(item)}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </nav>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ErrorTips></ErrorTips>
          <Outlet />
        </Box>
      </AreaMessageContext.Provider>
    </div>
  );
};

export default Main;
