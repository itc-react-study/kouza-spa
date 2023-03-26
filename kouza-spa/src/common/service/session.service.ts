export const setItem = (key: string, value: any) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  return window.sessionStorage.getItem(key);
};

export const removeItem = (key: string) => {
  return window.sessionStorage.removeItem(key);
};

export const clear = () => {
  window.sessionStorage.clear();
};
