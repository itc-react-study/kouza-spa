import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MENU_LIST } from "../../configs/menuList.config";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "../../interfaces/common/common";
import Header from "../../common/components/Header";

const listStyle = {
  border: "1px solid #000",
};

const Main = () => {
  const navigate = useNavigate();

  const clickList = (item: Menu) => () => {
    navigate(item.path);
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
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
        <Header></Header>
        <Outlet />
      </Box>
    </div>
  );
};

export default Main;
