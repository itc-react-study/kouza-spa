/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
import { createContext } from 'react';

/**
 * 登录画面
 */
export const LoginContext = createContext({});

/**
 * 主画面
 */
export const MainContext = createContext({
  areaErrorMessage: '',
  setAreaErrorMessage: (event: string) => {},
});
