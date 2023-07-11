import React, { useState } from 'react';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CitySearch;
