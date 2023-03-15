import React from "react";
import OperatorStatusList from "../pages/main/operator-status-list/OperatorStatusList";
import TransactionsList from "../pages/main/transactions-list/TransactionsList";
import ErrorList from "../pages/main/error-list/ErrorList";

export const MAIN = "/Main/";

export const MENU_LIST = [
  {
    path: MAIN + "OperatorStatusList",
    title: "オペレータ状況一覧",
    element: <OperatorStatusList />,
  },

  {
    path: MAIN + "TransactionsList",
    title: "取引一覧表示",
    element: <TransactionsList />,
  },

  {
    path: MAIN + "ErrorList",
    title: "エラー処理未済一覧",
    element: <ErrorList />,
  },
  {
    path: MAIN + "TransactionsForReference",
    title: "取引一覧表示（参照用）",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "FormPrinting",
    title: "帳票印刷一覧",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "BusinessStatisticsData",
    title: "業務統計データ",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "MaskingInformation",
    title: "機微情報一覧",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "Operator",
    title: "オペレータ状況一覧",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "AccessHistory",
    title: "アクセス履歴一覧",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "WaitingList",
    title: "待ち状況一覧",
    element: <TransactionsList />,
  },
  {
    path: MAIN + "Tablet",
    title: "タブレット登録",
    element: <TransactionsList />,
  },
];
