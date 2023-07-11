const SEARCH_HISTORY_KEY = 'searchHistory';

export const saveSearchHistory = (history) => {
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
};

export const loadSearchHistory = () => {
  const history = localStorage.getItem(SEARCH_HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};

export const clearSearchHistory = () => {
  localStorage.removeItem(SEARCH_HISTORY_KEY);
};
