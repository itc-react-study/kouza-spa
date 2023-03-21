import React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import App from "../App";
import { MAIN, MENU_LIST, Mufg_List } from "../configs/menuList.config";
import Main from "../pages/main/Main";
import FormPrinting from "../pages/main/form-printing/FormPrinting";

/**
 * 描述
 * @date 2023-02-24
 * @returns {any}
 */
const getChildren = () => {
  const children = MENU_LIST.map((item) => {
    return {
      path: item.path.split(MAIN)[1],
      element: item.element,
    };
  });

  return children;
};

const getMufgList = () => {
  const children = Mufg_List.map((item) => {
    return {
      path: item.path,
      element: item.element,
    };
  });

  return children;
};

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="Login" />,
  },
  {
    path: "/Login",
    element: <App />,
  },
  {
    path: "/Main",
    element: <Main />,
    children: getChildren(),
  },
  {
    path: "/Main/FormPrinting",
    element: <Main />,
    children: getMufgList(),
  },
]);

export default router;
