import { useState } from 'react';
import './App.css';
import userSearch from './api/userSearch.js';
import SearchAutoComplete from './components/SearchAutoComplete.jsx';

const App = () => {
  return (
    <div>
      <h1>Username Checker</h1>
        <form action="submit">
          <SearchAutoComplete 
            searchFunction={userSearch}
            getLabel={(user) => user.login}
          />
      </form>
    </div>
  );
}

export default App
