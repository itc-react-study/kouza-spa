import React from "react";
import FormalCheck from "../pages/main/formal-check/FormalCheck";
import OperatorStatusList from "../pages/main/operator-status-list/OperatorStatusList";
import TransactionsList from "../pages/main/transactions-list/TransactionsList";

export const MAIN = "/Main/";

export const MENU_LIST = [
  {
    isShow: true,
    path: MAIN + "OperatorStatusList",
    title: "オペレータ状況一覧",
    element: <OperatorStatusList />,
  },
  {
    isShow: true,
    path: MAIN + "TransactionsList",
    title: "取引一覧表示",
    element: <TransactionsList />,
  },

  {
    isShow: true,
    path: MAIN + "ErrorList",
    title: "エラー処理未済一覧",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "TransactionsForReference",
    title: "取引一覧表示（参照用）",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "FormPrinting",
    title: "帳票印刷一覧",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "BusinessStatisticsData",
    title: "業務統計データ",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "MaskingInformation",
    title: "機微情報一覧",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "Operator",
    title: "オペレータ状況一覧",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "AccessHistory",
    title: "アクセス履歴一覧",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "WaitingList",
    title: "待ち状況一覧",
    element: <TransactionsList />,
  },
  {
    isShow: true,
    path: MAIN + "Tablet",
    title: "タブレット登録",
    element: <TransactionsList />,
  },
  {
    isShow: false,
    path: MAIN + "FormalCheck",
    title: "形式点検",
    element: <FormalCheck />,
  },
];
