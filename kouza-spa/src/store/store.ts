import { createContext } from 'react';

export const MainContext = createContext({
  areaErrorMessage: '',
  setAreaErrorMessage: (event: string) => {},
  isLoading: false,
  setIsLoading: (event: boolean) => {},
});

export const LoginContext = createContext({
  isLoading: false,
  setIsLoading: (event: boolean) => {},
});
