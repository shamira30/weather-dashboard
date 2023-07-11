import React from 'react';

const SearchHistory = ({ history, onClearHistory, onSearch }) => {
  if (!history || history.length === 0) {
    return null;
  }

  const handleHistoryClick = (city) => {
    onSearch(city);
  };

  return (
    <div className="search-history">
      <h3>Search History</h3>
      <ul>
        {history.map((city) => (
          <li key={city} onClick={() => handleHistoryClick(city)}>
            {city}
          </li>
        ))}
      </ul>
      <button onClick={onClearHistory}>Clear History</button>
    </div>
  );
};

export default SearchHistory;
