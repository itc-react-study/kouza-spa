import { createContext } from 'react';

export const StoreContext = createContext({
  areaErrorMessage: '',
  setAreaErrorMessage: (event: string) => {},
});
