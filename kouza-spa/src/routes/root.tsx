import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { MAIN, MENU_LIST } from "../assets/configs/MENU_LIST";
import Main from "../pages/main/Main";

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

const router = createBrowserRouter([
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
]);

export default router;
