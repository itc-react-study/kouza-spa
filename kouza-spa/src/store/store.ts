import { createContext } from 'react';

export const AreaMessageContext = createContext({
  areaErrorMessage: '',
  setAreaErrorMessage: (event: string) => {},
});
