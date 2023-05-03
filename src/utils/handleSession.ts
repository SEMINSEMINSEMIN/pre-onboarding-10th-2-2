export const setSearchCache = (key: string, value: any) => {
  sessionStorage.setItem(key, value);
};

export const removeSearchCache = (key: string) => {
  sessionStorage.removeItem(key);
};

export const getSearchCache = (key: string) => {
  return sessionStorage.getItem(key);
};
