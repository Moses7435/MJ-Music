import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header>
      <h1>ViMusic</h1>
      <input 
        type="text" 
        placeholder="Search music..." 
        value={query}
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;

